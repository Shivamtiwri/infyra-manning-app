import SideBar from "../components/SideBar";

export default function Wallet() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 min-h-screen bg-gray-50 p-6">
        {/* Header */}
        <header className="mb-6 flex justify-between items-center">
          <button className="xl:hidden text-gray-600">
            <i className="bi bi-justify text-2xl"></i>
          </button>
        </header>

        {/* Page Heading */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Wallet</h3>
          <p className="text-gray-600 mt-1">
            Please create a new burner wallet, or use a previous burner wallet
            from the checker client
          </p>
        </div>

        {/* Wallet Actions */}
        <div className="flex items-center gap-4 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition">
            <i className="bi bi-plus-circle"></i> Create Wallet
          </button>

          <span className="text-gray-600">or</span>

          <button className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition">
            <i className="bi bi-box-arrow-in-down"></i> Import Wallet
          </button>
        </div>

        {/* Warning Text */}
        <p className="text-red-500 mt-4 text-sm">
          *Please note that you can't import a wallet after you've created one.
        </p>
      </div>
    </div>
  );
}
