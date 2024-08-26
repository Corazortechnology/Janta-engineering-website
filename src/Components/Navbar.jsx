import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const nestedMenuItems = [
    {
      title: "PHYSICAL PROPERTY TESTING EQUIPMENT",
    },
    {
      title: "PULP TESTING EQUIPMENT",
    },
    {
      title: "PACKAGING TESTING EQUIPMENT",
    },
    {
      title: "SURFACE COATING & PRINTABILITY",
    },
    {
      title: "ENVIRONMENTAL TESTING EQUIPMENT",
    },
  ];

  const handleNavigation = (title) => {
    const currentPath = location.pathname;
    const currentState = location.state;

    if (currentPath === "/product" && currentState?.title === title) {
      navigate("/temp", { replace: true });
      navigate("/product", { state: { title } });
    } else {
      navigate("/product", { state: { title } });
    }
  };
  return (
    <nav className="sticky z-10 top-0 bg-white shadow-md p-2">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src="https://jantaengineering.com/wp-content/uploads/2024/05/JE-logo-1.png"
                alt="Logo"
                className="w-36 h-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <Menu>
              <Link to="/WhoAreWe">
                <button className="text-gray-600 hover:text-blue-600 text-lg font-bold">
                  ABOUT US
                </button>
              </Link>
              <MenuHandler>
                <button className="text-gray-600 hover:text-blue-600 text-lg font-bold">
                  PRODUCTS
                </button>
              </MenuHandler>
              <MenuList className=" bg-white shadow-lg rounded-md p-2 z-20 mt-5 ">
                <Menu>
                  <MenuHandler>
                    <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                      <span>LAB TESTING EQUIPMENT</span>
                    </MenuItem>
                  </MenuHandler>
                  <MenuList className="ml-72  bg-white shadow-lg rounded-md p-3 z-30">
                    {nestedMenuItems.map(({ title }, key) => (
                      <MenuItem
                        onClick={() => handleNavigation(title)}
                        key={key}
                        className="text-gray-600 hover:text-blue-600 text-mg border-b-2 border-gray-300 font-bold p-3 "
                      >
                        <Link>{title}</Link>
                      </MenuItem>
                    ))}
                  </MenuList>
                </Menu>
                <MenuItem
                  onClick={() => handleNavigation("HANDMADE PAPER MACHINES")}
                  className="text-gray-600 hover:text-blue-600 text-mg border-b-2 border-gray-300 font-bold p-3"
                >
                  <Link>HANDMADE PAPER MACHINES</Link>
                </MenuItem>
                <MenuItem
                  onClick={() => handleNavigation("PRAKRITIK PAINT MACHINES")}
                  className="text-gray-600 hover:text-blue-600 text-mg border-b-2 border-gray-300 font-bold p-3"
                >
                  <Link>PRAKRITIK PAINT MACHINES</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <button className="text-gray-600 hover:text-blue-600 text-lg font-bold">
                  APPLICATIONS
                </button>
              </MenuHandler>
              <MenuList className="bg-white shadow-lg rounded-md z-30 mt-5">
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  <Link
                    to={{ pathname: "/product" }}
                    state={{ title: "NEWSPRINT" }}
                  >
                    {" "}
                    NEWSPRINT
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{ title: "WRITING PRINTING/COPIER" }}
                  >
                    WRITING PRINTING/COPIER
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{ title: "DUPLEX AND ART PAPER" }}
                  >
                    DUPLEX AND ART PAPER
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{ title: "KRAFT LINER/FLUTING PAPER/SACK" }}
                  >
                    KRAFT LINER/FLUTING PAPER/SACK
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{ title: "CORRUGATED FIBRE BOARD BOX BOARD" }}
                  >
                    CORRUGATED FIBRE BOARD BOX BOARD
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{ title: "TISSUE & SOFT MATERIAL" }}
                  >
                    TISSUE & SOFT MATERIAL
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{
                      title: "PULP TESTING RAW MATERIAL RECYCLED FIBRE",
                    }}
                  >
                    PULP TESTING RAW MATERIAL RECYCLED FIBRE
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{ title: "PULP TESTING RAW MATERIAL WOOD FIBRE" }}
                  >
                    PULP TESTING RAW MATERIAL WOOD FIBRE
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{ title: "PULP TESTING RAW MATERIAL AGRO FIBRE" }}
                  >
                    PULP TESTING RAW MATERIAL AGRO FIBRE
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{ title: "Items" }}
                  >
                    Items
                  </Link>
                </MenuItem>
              </MenuList>
              <Link to="/ServiceAndCalibration">
                <button className="text-gray-600 hover:text-blue-600 text-lg font-bold">
                  SERVICE AND CALIBRATION
                </button>
              </Link>
            </Menu>
            <Link
              to="/contact-us"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-blue-600"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md p-4">
          <Menu>
            <Link to="/WhoAreWe">
              <button className="font-medium text-gray-900 hover:text-blue-600 w-full text-left pl-5 p-3 text-lg font-md">
                ABOUT US
              </button>
            </Link>
            <MenuHandler>
              <button className="font-medium text-gray-900 hover:text-blue-600 w-full text-left pl-5 p-3 text-lg font-md">
                PRODUCTS
              </button>
            </MenuHandler>
            <MenuList className="bg-white shadow-lg rounded-md p-2 z-20 ">
              <Menu>
                <MenuHandler>
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    <span>LAB TESTING EQUIPMENT</span>
                  </MenuItem>
                </MenuHandler>
                <MenuList className="bg-white shadow-lg rounded-md p-3 z-30 ">
                  {nestedMenuItems.map(({ title }, key) => (
                    <MenuItem
                      onClick={() => handleNavigation(title)}
                      key={key}
                      className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300"
                    >
                      <Link>{title}</Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              <MenuItem
                onClick={() => handleNavigation("HANDMADE PAPER MACHINES")}
                className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300"
              >
                <Link>HANDMADE PAPER MACHINES</Link>
              </MenuItem>
              <MenuItem
                onClick={() => handleNavigation("PRAKRITIK PAINT MACHINES")}
                className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300"
              >
                <Link>PRAKRITIK PAINT MACHINES</Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuHandler>
              <button className="font-medium text-gray-900 hover:text-blue-600 w-full text-left pl-5 p-3 text-lg font-md">
                APPLICATIONS
              </button>
            </MenuHandler>
            <MenuList className="bg-white shadow-lg rounded-md z-30">
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                <Link
                  to={{ pathname: "/product" }}
                  state={{ title: "NEWSPRINT" }}
                >
                  {" "}
                  NEWSPRINT
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{ title: "WRITING PRINTING/COPIER" }}
                >
                  WRITING PRINTING/COPIER
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{ title: "DUPLEX AND ART PAPER" }}
                >
                  DUPLEX AND ART PAPER
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{ title: "KRAFT LINER/FLUTING PAPER/SACK" }}
                >
                  KRAFT LINER/FLUTING PAPER/SACK
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{ title: "CORRUGATED FIBRE BOARD BOX BOARD" }}
                >
                  CORRUGATED FIBRE BOARD BOX BOARD
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{ title: "TISSUE & SOFT MATERIAL" }}
                >
                  TISSUE & SOFT MATERIAL
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{ title: "PULP TESTING RAW MATERIAL RECYCLED FIBRE" }}
                >
                  PULP TESTING RAW MATERIAL RECYCLED FIBRE
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{ title: "PULP TESTING RAW MATERIAL WOOD FIBRE" }}
                >
                  PULP TESTING RAW MATERIAL WOOD FIBRE
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{ title: "PULP TESTING RAW MATERIAL AGRO FIBRE" }}
                >
                  PULP TESTING RAW MATERIAL AGRO FIBRE
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link to={{ pathname: "/product" }} state={{ title: "Items" }}>
                  Items
                </Link>
              </MenuItem>
            </MenuList>
            <Link to="/ServiceAndCalibration">
              <button className="font-medium text-gray-900 hover:text-blue-600 w-full text-left pl-5 p-3 text-lg font-md">
                SERVICE AND CALIBRATION
              </button>
            </Link>
          </Menu>
          <Link
            to="/contact-us"
            className="block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700 transition duration-150"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
