import { useState } from "react";
import { Menu, X } from "lucide-react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button (Only visible on mobile) */}
      <button
        className="p-3 text-white bg-blue-700 rounded-md z-50 fixed top-4 left-4 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar (Always visible on larger screens) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-900 to-black p-5 transition-all duration-300 ease-in-out z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block`}
      >
        <h2 className="text-white text-lg font-bold mb-4">Dashboard</h2>
        <ul className="text-white space-y-2">
          <li>Agentic AI</li>
          <li>Web Automation</li>
        </ul>
      </div>

      {/* Overlay (Only for mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default HamburgerMenu;
