import { useState } from "react";
import { Download, Plus} from "lucide-react";
import CardShowcase from "../components/layouts/CardShowcase";
import filter from "../assets/icons/filter.png";
import grid from "../assets/icons/grid.png";
import info from "../assets/icons/info.png";
import clock from "../assets/icons/clock.png";
import play from "../assets/icons/play.png";
import check from "../assets/icons/check.png";
import list from "../assets/icons/lines.png";
import cross from "../assets/icons/cross.png";
import search from "../assets/icons/search.png";

type SummaryItem = {
  label: string;
  value: string | number;
  color: string;
};

export default function Appointments() {
  const summary: SummaryItem[] = [
    { label: "Total Today", value: 7, color: "#F97415" },
    { label: "Completed", value: 2, color: "#4ADE80" },
    { label: "Ongoing", value: 1, color: "#60A5FA" },
    { label: "Upcoming", value: 2, color: "#C084FC" },
    { label: "Revenue", value: "₹3,000", color: "#22C55E" },
    { label: "New Requests", value: 1, color: "#FB923C" },
  ];

  const tabs = [
    { label: "All", count: 7, icon: undefined },
    { label: "New", count: 2, icon: info },
    { label: "Upcoming", count: 2, icon: clock },
    { label: "Ongoing", count: 2, icon: play },
    { label: "Completed", count: 2, icon: check },
    { label: "Cancelled", count: 2, icon: cross },
  ];
  const [searchQuery, setSearchQuery] = useState("");
  const activeIndex = 0;
  return (
    <div className="p-4 sm:p-6 bg-blue-50 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-[#020817]">Appointments</h1>
          <p className="text-[#64748B] text-[16px]">
            Manage appointments, schedules and availability
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex items-center justify-center gap-2 bg-white shadow px-4 py-2 rounded-lg hover:bg-gray-100 transition text-[#020817]">
            <Download className="w-4 h-4" />
            Export
          </button>
          <button className="flex items-center justify-center gap-2 bg-gradient-to-r to-[#6C5DD3] from-[#BFA6FF] text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition">
            <Plus className="w-4 h-4" />
            New Appointment
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
        {summary.map((item) => (
          <div
            key={item.label}
            className="bg-white p-4 rounded-xl shadow text-center"
          >
            <p className="text-xl font-bold" style={{ color: item.color }}>
              {item.value}
            </p>
            <p className="text-[#64748B] text-sm">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src={search} alt="search" className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search for Appointments !"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-[#FFFFFF] w-[320px] h-[40px] pl-10 pr-4 py-2 border border-[#E2E8F0] rounded-lg outline-none transition-all placeholder:text-[14px] placeholder:text-[#64748B]"
          />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center border border-[#E2E8F0] rounded-lg px-3 py-2 bg-white w-full sm:w-auto">
            <img src={filter} alt="filter" className="w-4 h-4 mr-1" />
            <select
              className="bg-transparent outline-none text-gray-700"
              disabled
            >
              <option>All Status</option>
            </select>
          </div>

          <div className="flex items-center border border-[#E2E8F0] rounded-lg px-3 py-2 bg-white w-full sm:w-auto">
            <select
              className="bg-transparent outline-none text-gray-700"
              disabled
            >
              <option>All Types</option>
            </select>
          </div>

          <div className="flex items-center ml-auto rounded-lg overflow-hidden border border-[#E2E8F0]">
            <button className="p-2 bg-white hover:bg-gray-100">
              <img src={grid} alt="grid" className="w-5 h-5" />
            </button>
            <button className="p-2 bg-[#6D28D9] text-white">
              <img src={list} alt="list" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap w-full justify-center gap-2 pb-2 bg-white rounded-[8px] px-[8px] pt-[8px] mb-[20px]">
        {tabs.map((tab, idx) => {
          const isActive = idx === activeIndex;

          return (
            <button
              key={tab.label}
              className={`flex items-center justify-center gap-2 py-2 text-sm font-medium transition rounded-[10px] ${
                isActive
                  ? "bg-[#6C5DD3] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              } w-1/2 sm:flex-1`}
            >
              {tab.icon && (
                <img src={tab.icon} alt={tab.label} className="w-4 h-4" />
              )}

              <span>{tab.label}</span>
              <span
                className={`ml-1 px-2 py-0.5 text-xs rounded-full ${
                  isActive
                    ? "bg-[#E3E0F9] text-[#6C5DD3]"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-auto bg-blue-50">
        <CardShowcase searchQuery={searchQuery}/>
      </div>
    </div>
  );
}
