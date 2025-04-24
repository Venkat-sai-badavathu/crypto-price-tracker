import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-['Pacifico'] text-primary">CPT</div>
          <h1 className="text-xl font-semibold hidden md:block">
            Crypto Market
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search coins..."
              className="pl-10 pr-4 py-2 rounded-button border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-gray-400">
              <i className="ri-search-line"></i>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-button !rounded-button flex items-center justify-center">
              <i className="ri-moon-line text-gray-700"></i>
            </button>
            <button className="bg-primary text-white px-4 py-2 rounded-button !rounded-button whitespace-nowrap font-medium hover:bg-opacity-90">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
