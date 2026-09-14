import React from "react";
import assets from "../assets/assets";
import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = ({ theme, setTheme }) => {

    const [sidebarOpen, setSidebarOpen] = React.useState(false); 

  return (
    <div className="flex items-center justify-between px-4 sm:px-8 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w-40"
        alt="Logo"
      />
      <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

        <img src={assets.close_icon} className="w-5 absolute right-4 top-4 sm:hidden cursor-pointer" onClick={()=> setSidebarOpen(false)}/>

        <a href="#" className="sm:hover:border-b" onClick={()=> setSidebarOpen(false)}>
          Home
        </a>
        <a href="#services" className="sm:hover:border-b" onClick={()=> setSidebarOpen(false)}>
          Services
        </a>
        <a href="#our-work" className="sm:hover:border-b" onClick={()=> setSidebarOpen(false)}>
          Our Work
        </a>
        <a href="#contact-us" className="sm:hover:border-b" onClick={()=> setSidebarOpen(false)}>
          Contact Us
        </a>
      </div>

        <div className="flex items-center gap-4">

          <ThemeToggleButton theme={theme} setTheme={setTheme} />
           
           <img src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon} className="w-8 sm:hidden cursor-pointer" onClick={()=> setSidebarOpen(true)}/>

            <a href="#contact-us" className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition-all">
                Connect <img src={assets.arrow_icon} width={14} alt="arwimg" />
            </a>
        </div>

    </div>
  );
};

export default Navbar;
