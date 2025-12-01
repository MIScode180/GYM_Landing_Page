import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="flex items-center justify-between w-full px-6 py-4  shadow lg:px-10">
        {/* Logo */}
        <img
          src="/logo/logo.jpg"
          alt="logo"
          className="w-14 h-14 rounded-full object-cover"
        />

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-10 text-xl font-semibold text-white list-none">
          <li className="hover:text-yellow-400 cursor-pointer">Advantages</li>
          <li className="hover:text-yellow-400 cursor-pointer">Membership</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Trainers</li>
          <button className="text-black cursor-pointer text-[0.60em] bg-[#E0D205] hover:bg-[#FFFD8D] rounded-2xl flex items-center justify-center py-2 px-4 font-bold">
            Create an Account
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-3xl text-yellow-400"
          onClick={() => setIsMenuOpen(true)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {/* ======= MOBILE SLIDING SIDEBAR   */}
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Right Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#02754B] text-black z-50 p-6 flex flex-col gap-6 rounded-l-3xl shadow-xl transform transition-transform duration-300 font-general font-black
         ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="self-start text-white text-3xl"
        >
          ✕
        </button>

        {/* Profile Section */}
        <div className="flex items-center gap-4 border-b border-gray-700 pb-4">
          <FontAwesomeIcon
            icon={faUser}
            className="w-12 h-12 rounded-full object-cover text-yellow-500"
          />
          <div>
            <h3 className="font-semibold text-lg">Profile Name</h3>
          </div>
        </div>

        {/* Menu List */}
        <ul className="flex flex-col gap-6 text-lg list-none">
          <li className="hover:text-yellow-400 cursor-pointer">Advantages</li>
          <li className="hover:text-yellow-400 cursor-pointer">Membership</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Trainers</li>
          <button className="text-black cursor-pointer text-[0.90em] bg-[#E0D205] hover:bg-[#FFFD8D] rounded-2xl w-full flex items-center justify-center py-2 font-bold">
            Create an Account
          </button>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
