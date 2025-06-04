import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="w-64 min-h-screen bg-[#3F56C9] text-white flex flex-col">
      {/* Logo and Close Icon */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <a href="/" className="block">
          <img src="assets/images/logo/logo.png" alt="Logo" className="h-8" />
        </a>
        <button className="block xl:hidden">
          <i className="bi bi-x text-white text-xl"></i>
        </button>
      </div>

      {/* Sidebar Menu */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-2 rounded-md bg-cyan-400 text-white font-medium"
            >
              <i className="bi bi-grid-fill"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              to="/license"
              className="flex items-center gap-3 px-4 py-2 rounded-md text-white/70 hover:text-white hover:bg-white/10"
            >
              <i className="bi bi-diamond"></i>
              <span>Progress</span>
            </Link>
          </li>

          <li>
            <Link
              to="/wallet"
              className="flex items-center gap-3 px-4 py-2 rounded-md text-white/70 hover:text-white hover:bg-white/10"
            >
              <i className="bi bi-wallet"></i>
              <span>Wallet</span>
            </Link>
          </li>

          <li>
            <Link
              to="/setting"
              className="flex items-center gap-3 px-4 py-2 rounded-md text-white/70 hover:text-white hover:bg-white/10"
            >
              <i className="bi bi-grid-1x2-fill"></i>
              <span>Settings</span>
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="flex items-center gap-3 px-4 py-2 rounded-md text-white/70 hover:text-white hover:bg-white/10"
            >
              <i className="bi bi-hexagon-fill"></i>
              <span>Help & FAQ</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Toggler Button */}
      <div className="p-4">
        <button className="text-white hover:text-red-500">
          <i className="bi bi-x text-xl"></i>
        </button>
      </div>
    </div>
  );
}
