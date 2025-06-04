const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

// Development mode detection (replaces electron-is-dev)
const isDev =
  process.env.NODE_ENV === "development" ||
  process.defaultApp ||
  /[\\/]electron[\\/]/.test(process.execPath);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true, // Added for extra security
      preload: path.join(__dirname, "preload.js"),
    },
    show: false,
    icon: path.join(__dirname, "../assets/icon.ico"),
    backgroundColor: "#ffffff", // Prevents white flash on load
  });

  // Load app
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Window event handlers
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();

    // Open dev tools in development
    if (isDev) {
      mainWindow.webContents.openDevTools({ mode: "detach" });
    }
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  // Optional: Handle focus events
  mainWindow.on("focus", () => {
    // Custom focus handling if needed
  });
}

// App lifecycle management
app
  .whenReady()
  .then(createWindow)
  .catch((error) => {
    console.error("Window creation failed:", error);
  });

// macOS window management
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Quit when all windows are closed (except on macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Enhanced IPC Communication
ipcMain.handle("perform-action", (event, ...args) => {
  console.log("Received from renderer:", args);

  // Validate input
  if (!args || args.length === 0) {
    return { error: "Invalid arguments", status: 400 };
  }

  return {
    status: "success",
    data: "response from main",
    timestamp: Date.now(),
  };
});

// Security enhancements
app.enableSandbox();

// Optional: Add CSP headers in development
if (isDev) {
  app.on("web-contents-created", (event, contents) => {
    contents.on("did-finish-load", () => {
      contents.session.webRequest.onHeadersReceived((details, callback) => {
        callback({
          responseHeaders: {
            ...details.responseHeaders,
            "Content-Security-Policy": ["default-src 'self'"],
          },
        });
      });
    });
  });
}
