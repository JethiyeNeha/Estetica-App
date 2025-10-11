import React, { useState } from "react";
import type { IsidebarSteps } from "../../types/appointments.interface";
import { SIDEBAR_STEPS } from "../../data/appointment.data";
import { Menu, X } from "lucide-react";
import arrowright from "../../assets/icons/Arrow - Down 3.png";
import logo from "../../assets/icons/image 17.png";

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState("appointments");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sidebarSections: IsidebarSteps[] = SIDEBAR_STEPS;
  const handleItemClick = (itemId: string) => {
    // setActiveItem(itemId);
  };

return (
    <>
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black text-white rounded-md"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        fixed lg:relative
        w-64 h-screen flex flex-col bg-black text-[#AAAAAA]
        transition-transform duration-300 ease-in-out
        z-40
      `}>
        <div className="p-6">
          <img src={logo} alt="Brand logo" />
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          {sidebarSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              {section.title && (
                <div className="px-5 mb-3">
                  <h3 className="text-[#8E92BC] font-poppins font-semibold text-base uppercase">
                    {section.title}
                  </h3>
                </div>
              )}

              <div className="">
                {section.items.map((item) => (
                  <div key={item.id}>
                    <button
                      onClick={() => {
                        handleItemClick(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-6 py-3 text-left"
                    >
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.icon}
                          className="w-[20px] h-[20px]"
                          alt="Brand logo"
                        />
                        <span
                          className={`text-[#AAAAAA] ${
                            activeItem === item.id ? "text-[#BFA6FF]" : ""
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                       {item.hasSubmenu && (
                      <img src={arrowright} alt="submenu" className="w-3 h-3" />
                    )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
