import { Copy, Plus } from "lucide-react";
import SideBar from "../components/SideBar";

export default function Licenses() {
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
          <h3 className="text-2xl font-semibold text-gray-800">Progress</h3>
        </div>

        {/* Steps Widget */}
        <div className="max-w-md space-y-4">
          {[
            {
              text: "Step1: Create a Wallet",
              copy: false,
            },
            {
              text: "Step2: Copy the wallet address",
              copy: true,
            },
            {
              text: "Step3: Initiate the delegation process in the Owner Portal",
              copy: true,
            },
            {
              text: "Step4: Accept the delegation here",
              copy: false,
            },
          ].map((step, index) => (
            <div
              key={index}
              className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg"
            >
              <input
                type="radio"
                className="form-radio text-blue-500"
                id={`license-step-${index}`}
              />
              <label
                htmlFor={`license-step-${index}`}
                className="ml-3 flex items-center text-sm text-gray-700"
              >
                {step.text}
                {step.copy && <Copy className="ml-2 w-4 h-4 text-gray-500" />}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
