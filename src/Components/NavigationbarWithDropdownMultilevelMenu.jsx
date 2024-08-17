import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

const nestedMenuItems = [
  {
    title: "Hero",
  },
  {
    title: "Features",
  },
  {
    title: "Testimonials",
  },
  {
    title: "Ecommerce",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openNestedMenu, setopenNestedMenu] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = nestedMenuItems.map(({ title }, key) => (
    <a href="#" key={key}>
      <MenuItem className="hover:bg-gray-100 hover:text-blue-500 transition-colors duration-150 px-4 py-2 flex justify-start ml-2 focus:outline-none focus:ring-0 text-lg">
        {title}
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom-start"
        allowHover={true}
        offset={10}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900 hover:bg-gray-100 rounded-md transition-all duration-200 text-lg"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Blocks
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>

        <MenuList className="lg:block bg-white rounded-lg shadow-lg p-4 mt-1 transition-all duration-100 text-lg flex justify-start">
          <Menu
            placement="right-start"
            allowHover
            offset={10}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between ml-3">
              <MenuItem className="hover:bg-gray-100 hover:text-blue-500 rounded-md transition-colors duration-150 py-2 px-4 h-auto flex justify-start">
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="rounded-lg shadow-lg bg-white ml-2">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem className="hover:bg-gray-100 hover:text-blue-500 rounded-md transition-colors duration-150 py-2 px-4 h-auto flex justify-start">
            React
          </MenuItem>
          <MenuItem className="hover:bg-gray-100 hover:text-blue-500 rounded-md transition-colors duration-150 py-2 px-4 h-auto flex justify-start">
            TailwindCSS
          </MenuItem>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>
          <Menu
            placement="bottom"
            allowHover
            offset={6}
            open={openNestedMenu}
            handler={setopenNestedMenu}
          >
            <MenuHandler className="flex items-center justify-between">
              <MenuItem className="hover:bg-gray-100 hover:text-blue-500 rounded-md transition-colors duration-150">
                Figma
                <ChevronUpIcon
                  strokeWidth={2.5}
                  className={`h-3.5 w-3.5 transition-transform ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                />
              </MenuItem>
            </MenuHandler>
            <MenuList className="block rounded-lg shadow-lg bg-white lg:hidden ml-2">
              {renderItems}
            </MenuList>
          </Menu>
          <MenuItem className="hover:bg-gray-100 hover:text-blue-500 rounded-md transition-colors duration-150">
            React
          </MenuItem>
          <MenuItem className="hover:bg-gray-100 hover:text-blue-500 rounded-md transition-colors duration-150">
            TailwindCSS
          </MenuItem>
        </Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-gray-100 rounded-md transition-all duration-200 text-lg">
          Pages
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-gray-100 rounded-md transition-all duration-200 text-lg">
          Account
        </ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4 hover:bg-gray-100 rounded-md transition-all duration-200 text-lg">
          Docs
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavigationbarWithDropdownMultilevelMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="max-w-screen-3xl px-4 py-5 bg-white shadow-md rounded-lg">
      <div className="flex items-center justify-between text-blue-gray-900 ">
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-blue-600 text-lg"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex ">
          <Button size="sm" color="blue" className="text-lg">
            Get Started
          </Button>
          <Button variant="outlined" size="sm" color="blue" className="text-lg">
            Log In
          </Button>
        </div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button size="sm" fullWidth color="blue" className="text-lg">
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="sm"
            fullWidth
            color="blue"
            className="text-lg"
          >
            Log In
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
