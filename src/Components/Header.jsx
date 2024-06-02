import React, { useState } from "react";
import { IoSearchSharp, IoClose } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { behance_logo } from "../Data";
import { adobeLogo } from "../Data";
import { IoFilter } from "react-icons/io5";

const Header = () => {
  const [selectedSortOption, setSelectedSortOption] = useState("Recommended");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sortOptions = ["Recommended", "Most Appreciated", "Most Viewed"];

  const toggleSortDropdown = () => {
    setIsSortDropdownOpen(!isSortDropdownOpen);
  };

  const handleSortOptionClick = (option) => {
    setSelectedSortOption(option);
    setIsSortDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header" id="header">
        {isMenuOpen && (
          <div
            id="menu"
            className="menu duration-300 bg-white lg:hidden shadow-lg w-[70%] h-[100%] fixed left-0 top-0 z-20 p-5 overflow-y-auto"
          >
            <div
              className="text-3xl absolute right-3 cursor-pointer text-[#333]"
              onClick={toggleMenu}
            >
              <IoClose />
            </div>
            <ul className="flex flex-col mt-10 ">
              <li className="my-3 font-medium text-lg">
                <a href="http://">Explore</a>
              </li>
              <li className="my-3 font-medium text-lg">
                <a href="http://">Assets</a>
              </li>
              <li className="my-3 font-medium text-lg">
                <a href="http://">Jobs</a>
              </li>
              <li className="my-3 font-medium text-lg">
                <a href="http://">
                  Behance{" "}
                  <span className="ml-1 font-medium text-xs bg-blue-800 text-white rounded-md px-1 py-0">
                    PRO
                  </span>
                </a>
              </li>
              <li className="my-3 font-medium text-lg">
                <a href="http://">Hire Freelancers</a>
              </li>
              <li className="my-3 font-medium text-lg">
                <a href="" className="text-[#0057ff]">
                  Login
                </a>
              </li>
              <li className="my-3 font-medium text-lg">
                <a
                  href=""
                  className="bg-[#0057ff] text-white px-4 py-1 rounded-full"
                >
                  Sign Up
                </a>
              </li>
              <li className="my-3 font-medium text-lg flex items-center">
                <img src={adobeLogo} alt="Adobe" className="w-5 h-5 mr-1" />
                <a href="" className="font-bold text-black text-lg">
                  Adobe
                </a>
              </li>
            </ul>
          </div>
        )}

        <div className="border-b fixed w-full top-0 bg-white z-10">
          <div className="container-fluid">
            <div className="top-header py-4 lg:py-3 px-5 border-b">
              <div className="navbar flex items-center justify-between">
                <div className="brand-logo flex items-center">
                  <div
                    className="phone-menu pr-3 text-2xl cursor-pointer block lg:hidden"
                    onClick={toggleMenu}
                  >
                    <CgMenuLeft />
                  </div>
                  <img
                    src={behance_logo}
                    alt="Behance"
                    className="w-auto h-4"
                  />
                  <div className="page-links lg:ml-8 hidden lg:block">
                    <ul className="flex items-center">
                      <li className="mx-3 font-medium text-md">
                        <a href="http://">Explore</a>
                      </li>
                      <li className="mx-3 font-medium text-md">
                        <a href="http://">Assets</a>
                      </li>
                      <li className="mx-3 font-medium text-md">
                        <a href="http://">Jobs</a>
                      </li>
                      <li className="mx-3 font-medium text-md">
                        <a href="http://">
                          Behance{" "}
                          <span className="mx-0 font-medium text-xs bg-blue-800 text-white rounded-md px-1 py-0">
                            PRO
                          </span>
                        </a>
                      </li>
                      <li className="mx-3 font-medium text-md">
                        <a href="http://">Hire Freelancers</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:flex items-center">
                  <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff]">
                    <a href="" className="text-[#0057ff] font-medium text-md">
                      Login
                    </a>
                  </div>
                  <div className="login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]">
                    <a href="" className="text-white font-medium text-md">
                      Sign Up
                    </a>
                  </div>
                  <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                    <img src={adobeLogo} alt="Adobe" className="w-5 h-5" />
                    <a href="" className="pl-1 font-bold text-black text-sm">
                      Adobe
                    </a>
                  </div>
                </div>
                <div className="phone-search block lg:hidden cursor-pointer pr-3 text-2xl">
                  <IoSearchSharp />
                </div>
              </div>
            </div>
            <div className="search-area p-2 ">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <button className="flex items-center px-4 py-2 mb-4 lg:mb-0 border border-gray-300 rounded-full bg-white hover:bg-gray-100 focus:outline-none">
                  <IoFilter />
                  <p className="text-sm font-medium pr-1">Filter</p>
                </button>
                <div className="search-box w-full h-10 mx-4 border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center">
                  <div className="input-box relative w-full">
                    <input
                      type="text"
                      placeholder="Search the creative world at work"
                      className="bg-transparent outline-none w-[90%] pl-16 text-md lg:text-sm font-bold text-[#222] placeholder:text-[#000000]"
                    />
                    <div className="search-icon text-2xl text-[#777] absolute top-[2px] left-4">
                      <IoSearchSharp />
                    </div>
                  </div>
                </div>
                <div className="sort-recommended flex items-center relative">
                  <span className="text-xs font-bold text-[#626161] mr-2">
                    Sort
                  </span>
                  <button
                    onClick={toggleSortDropdown}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-full bg-white hover:bg-gray-100 focus:outline-none"
                  >
                    <p className="text-sm font-medium pr-1">
                      {selectedSortOption}
                    </p>
                    <MdArrowDropDown />
                  </button>
                  {isSortDropdownOpen && (
                    <div className="absolute top-full mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                      <ul className="py-2">
                        {sortOptions.map((option) => (
                          <li
                            key={option}
                            onClick={() => handleSortOptionClick(option)}
                            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                              option === selectedSortOption ? "bg-gray-200" : ""
                            }`}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
