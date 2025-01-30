import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
const API_URL = import.meta.env.VITE_JE_API_URL;

export function Navbar() {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search popup
  const [searchQuery, setSearchQuery] = useState(""); // State to handle search input
  const [categories, setCategories] = useState([]);
  console.log("00", categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/api/v1/categories`);
      if (response.ok) {
        const data = await response.json();
        setCategories(data); // Assuming `data` is an array of categories
      } else {
        toast.error("Failed to fetch categories");
      }
    } catch (error) {
      toast.error("Error fetching categories");
    }
  };

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

  const handleNavigation = (title, type) => {
    const currentPath = location.pathname;
    const currentState = location.state;

    if (currentPath === "/product" && currentState?.title === title) {
      navigate("/temp", { replace: true });
      navigate("/product", { state: { title, type } });
    } else {
      navigate("/product", { state: { title, type } });
    }
  };
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  let openTimer;
  let closeTimer;

  // Show menu immediately on hover
  const handleMouseEnter = () => {
    clearTimeout(closeTimer); // Cancel any pending close timer
    setIsMenuVisible(true); // Show menu immediately
  };

  // Delay hiding menu when mouse leaves
  const handleMouseLeave = () => {
    closeTimer = setTimeout(() => {
      setIsMenuVisible(false); // Hide menu after 2 seconds
    }, 2000);
  };

  // Keep menu open when hovering over the MenuList
  const handleMenuListEnter = () => {
    clearTimeout(closeTimer); // Cancel close timer if hovering over MenuList
  };

  // Delay closing menu when leaving MenuList
  const handleMenuListLeave = () => {
    closeTimer = setTimeout(() => {
      setIsMenuVisible(false); // Hide menu after 2 seconds
    }, 2000);
  };

  // Toggle the search popup
  const toggleSearchPopup = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Handle the search functionality (for demonstration)
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate("/product", { state: { searchQuery } });
      setIsSearchOpen(false); // Close popup after search
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
                src={logo}
                alt="Logo"
                className="w-36 h-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-6 mr-16">
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
              {/* <MenuList className=" bg-white shadow-lg rounded-md p-2 z-20 mt-5 ">
                <MenuItem
                  onClick={() =>
                    handleNavigation("HANDMADE PAPER MACHINES", "category")
                  }
                  className="text-gray-600 hover:text-blue-600 text-mg border-b-2 border-gray-300 font-bold p-3"
                >
                  <Link>HANDMADE PAPER MACHINES</Link>
                </MenuItem>
                <MenuItem
                  onClick={() =>
                    handleNavigation("PRAKRITIK PAINT MACHINES", "category")
                  }
                  className="text-gray-600 hover:text-blue-600 text-mg border-b-2 border-gray-300 font-bold p-3"
                >
                  <Link>PRAKRITIK PAINT MACHINES</Link>
                </MenuItem>
                <Menu>
                  <MenuHandler
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                      <span>LAB TESTING EQUIPMENT</span>
                    </MenuItem>
                  </MenuHandler>

                  {isMenuVisible && (
                    <MenuList
                      onMouseEnter={handleMenuListEnter} // Keep menu open when hovering over it
                      onMouseLeave={handleMenuListLeave} // Start delay on mouse leave
                      className="bg-white shadow-lg rounded-md p-3 z-30"
                    >
                      {nestedMenuItems.map(({ title }, key) => (
                        <MenuItem
                          onClick={() => handleNavigation(title, "category")}
                          key={key}
                          className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300"
                        >
                          <Link>{title}</Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  )}
                </Menu>
              </MenuList> */}
              <MenuList className=" bg-white shadow-lg rounded-md p-2 z-20 mt-5 ">
                {categories.map((category, index) => (
                  <div key={index}>
                    <MenuItem
                      onMouseEnter={handleMenuListEnter} // Keep menu open when hovering over it
                      onMouseLeave={handleMenuListLeave}
                      onClick={() =>
                        handleNavigation(category.name, "category")
                      }
                      className="text-gray-600 hover:text-blue-600 text-mg border-b-2 border-gray-300 font-bold p-3"
                    >
                      <Link>{category.name}</Link>
                    </MenuItem>
                    {category.subcategories.length > 0 && (
                      <MenuList
                        onMouseEnter={handleMenuListEnter} // Keep menu open when hovering over it
                        onMouseLeave={handleMenuListLeave}
                        className="bg-white shadow-lg rounded-md p-3 z-30 mt-40"
                      >
                        {category.subcategories.map((sub, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            onClick={() =>
                              handleNavigation(sub.name, "subcategory")
                            }
                            className="text-gray-600 hover:text-blue-600 text-mg border-b-2 border-gray-300 font-bold p-3"
                          >
                            <Link>{sub.name}</Link>
                          </MenuItem>
                        ))}
                      </MenuList>
                    )}
                  </div>
                ))}
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
                    state={{ title: "NEWSPRINT", type: "application" }}
                  >
                    {" "}
                    NEWSPRINT
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{
                      title: "WRITING PRINTING/COPIER",
                      type: "application",
                    }}
                  >
                    WRITING PRINTING/COPIER
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{
                      title: "DUPLEX AND ART PAPER",
                      type: "application",
                    }}
                  >
                    DUPLEX AND ART PAPER
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{
                      title: "KRAFT LINER/FLUTING PAPER/SACK",
                      type: "application",
                    }}
                  >
                    KRAFT LINER/FLUTING PAPER/SACK
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{
                      title: "CORRUGATED FIBRE BOARD BOX BOARD",
                      type: "application",
                    }}
                  >
                    CORRUGATED FIBRE BOARD BOX BOARD
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{
                      title: "TISSUE & SOFT MATERIAL",
                      type: "application",
                    }}
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
                      type: "application",
                    }}
                  >
                    PULP TESTING RAW MATERIAL RECYCLED FIBRE
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{
                      title: "PULP TESTING RAW MATERIAL WOOD FIBRE",
                      type: "application",
                    }}
                  >
                    PULP TESTING RAW MATERIAL WOOD FIBRE
                  </Link>
                </MenuItem>
                <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                  {" "}
                  <Link
                    to={{ pathname: "/product" }}
                    state={{
                      title: "PULP TESTING RAW MATERIAL AGRO FIBRE",
                      type: "application",
                    }}
                  >
                    PULP TESTING RAW MATERIAL AGRO FIBRE
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

            {/* Desktop Search Icon */}
            <button
              onClick={toggleSearchPopup}
              className="text-gray-600 hover:text-blue-600 transition duration-150 mt-1 w-1 text-center"
            >
              <MagnifyingGlassIcon className="w-6 h-6 mx-auto" />
            </button>
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
              <MenuItem
                onClick={() =>
                  handleNavigation("HANDMADE PAPER MACHINES", "category")
                }
                className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300"
              >
                <Link>HANDMADE PAPER MACHINES</Link>
              </MenuItem>
              <MenuItem
                onClick={() =>
                  handleNavigation("PRAKRITIK PAINT MACHINES", "category")
                }
                className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300"
              >
                <Link>PRAKRITIK PAINT MACHINES</Link>
              </MenuItem>
              <Menu>
                <MenuHandler
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                    <span>LAB TESTING EQUIPMENT</span>
                  </MenuItem>
                </MenuHandler>

                {isMenuVisible && (
                  <MenuList
                    onMouseEnter={handleMouseEnter} // Keep menu open if hovering over the list
                    onMouseLeave={handleMouseLeave}
                    className="bg-white shadow-lg rounded-md p-3 z-30"
                  >
                    {nestedMenuItems.map(({ title }, key) => (
                      <MenuItem
                        onClick={() => handleNavigation(title, "category")}
                        key={key}
                        className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300"
                      >
                        <Link>{title}</Link>
                      </MenuItem>
                    ))}
                  </MenuList>
                )}
              </Menu>
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
                  state={{ title: "NEWSPRINT", type: "application" }}
                >
                  {" "}
                  NEWSPRINT
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{
                    title: "WRITING PRINTING/COPIER",
                    type: "application",
                  }}
                >
                  WRITING PRINTING/COPIER
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{ title: "DUPLEX AND ART PAPER", type: "application" }}
                >
                  DUPLEX AND ART PAPER
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{
                    title: "KRAFT LINER/FLUTING PAPER/SACK",
                    type: "application",
                  }}
                >
                  KRAFT LINER/FLUTING PAPER/SACK
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{
                    title: "CORRUGATED FIBRE BOARD BOX BOARD",
                    type: "application",
                  }}
                >
                  CORRUGATED FIBRE BOARD BOX BOARD
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{
                    title: "TISSUE & SOFT MATERIAL",
                    type: "application",
                  }}
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
                    type: "application",
                  }}
                >
                  PULP TESTING RAW MATERIAL RECYCLED FIBRE
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{
                    title: "PULP TESTING RAW MATERIAL WOOD FIBRE",
                    type: "application",
                  }}
                >
                  PULP TESTING RAW MATERIAL WOOD FIBRE
                </Link>
              </MenuItem>
              <MenuItem className="text-gray-600 hover:text-blue-600 text-mg font-bold p-3 border-b-2 border-gray-300">
                {" "}
                <Link
                  to={{ pathname: "/product" }}
                  state={{
                    title: "PULP TESTING RAW MATERIAL AGRO FIBRE",
                    type: "application",
                  }}
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

          {/* Mobile Search Icon */}
          <button
            onClick={toggleSearchPopup}
            className="text-gray-600 hover:text-blue-600 transition duration-150 mt-1 w-1 text-center"
          >
            <MagnifyingGlassIcon className="w-6 h-6 mx-auto" />
          </button>
        </div>
      )}

      {/* Search Popup */}
      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="bg-white shadow-lg rounded-md p-4 w-80 sm:w-96 relative flex-col"
            onClick={(e) => e.stopPropagation()} // Prevent click inside the popup from closing it
          >
            {/* <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button> */}
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-md w-full p-2 mb-4"
            />
            <button
              onClick={handleSearch}
              className="w-10 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-150"
            >
              GO!
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
