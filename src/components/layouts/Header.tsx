import React, { useState } from "react";
import button from "../../assets/icons/Button (1).png";
import vector from "../../assets/icons/Vector.png";
import search from "../../assets/icons/search.png";
import type { HeaderProps } from "../../types/appointments.interface";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

const Header: React.FC<HeaderProps> = ({
  userName = "Vendor",
  userRole = "Admin",
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  function LogoutButton() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
      logout();
      navigate("/", { replace: true });
    };

    return (
      <div
        onClick={handleLogout}
        className="cursor-pointer bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition"
      >
        Logout
      </div>
    );
  }
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button>
            <img
              src={button}
              alt="button"
              className="w-[28px] h-[28px] object-contain"
            />
          </button>

          <div>
            <h1 className="text-xl font-bold text-[#020817]">
              Welcome Back, {userName}
            </h1>
            <p className="text-sm text-[#64748B]">
              Hello, here you can manage your orders by zone
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src={search} alt="search" className="w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-[#E2E8F0] rounded-lg outline-none transition-all placeholder-[#64748B]"
            />
          </div>

          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
              <img
                src={vector}
                alt="button"
                className="w-[16px] h-[16px] object-contain"
              />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-[12px] w-[12px] flex items-center justify-center font-medium"></span>
            </button>
          </div>

          <div className="flex items-center space-x-3 pl-4  border-gray-200">
            <div className="w-8 h-8 bg-[#F1F5F9] rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-[#020817]">AD</span>
            </div>
            <div className="text-right">
              <div className="text-xs text-[#020817]">{userRole}</div>
            </div>
            <div className="p-2">
              <LogoutButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
