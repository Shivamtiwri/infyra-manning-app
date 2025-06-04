import SideBar from "./SideBar";
import { Copy, Wallet } from "lucide-react";

function Dashboard() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1 min-h-screen bg-gray-50 p-6">
        {/* Header */}
        {/* <header className="mb-6 flex justify-between items-center">
          <button className="xl:hidden text-gray-600">
            <i className="bi bi-justify text-2xl"></i>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition">
            <Wallet size={20} /> Create or Import Wallet
          </button>
        </header> */}

        {/* Page Heading */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-gray-800">Dashboard</h3>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            {
              title: "Running Status",
              value: "Inactive",
              iconClass: "iconly-boldShow",
              bgColor: "bg-purple-500",
            },
            {
              title: "Verify Key",
              value: "False",
              iconClass: "iconly-boldProfile",
              bgColor: "bg-blue-500",
            },
            {
              title: "Node Id",
              value: "XYZ",
              iconClass: "iconly-boldAdd-User",
              bgColor: "bg-green-500",
            },
            {
              title: "Rate Limit",
              value: "10X",
              iconClass: "iconly-boldBookmark",
              bgColor: "bg-red-500",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full text-white ${item.bgColor}`}>
                  <i className={item.iconClass}></i>
                </div>
                <div>
                  <h6 className="text-gray-500 text-sm">{item.title}</h6>
                  <h4 className="text-lg font-bold text-gray-800">
                    {item.value}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Steps Widget */}
        <div className="max-w-xl space-y-3">
          {[
            {
              text: "Step1: Setup the node",
              copy: false,
            },
            {
              text: "Step2: Copy the Node Id",
              copy: true,
            },
            {
              text: "Step3: Verify node Id to map the key via owner portal.",
              copy: true,
            },
            {
              text: "Step4: Comeback checker node and start mining.",
              copy: false,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg"
            >
              <input
                type="radio"
                className="form-radio text-blue-500"
                id={`step-${i}`}
              />
              <label
                htmlFor={`step-${i}`}
                className="ml-3 flex items-center text-sm text-gray-700"
              >
                {item.text}
                {item.copy && <Copy className="ml-2 w-4 h-4 text-gray-500" />}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
