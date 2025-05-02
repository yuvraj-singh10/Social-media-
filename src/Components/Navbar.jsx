import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
export const Navbar = () => {
  const location = useLocation();
  const { theme, setTheme } = useContext(ThemeContext)

  const handleThemeToggle = () => {
    setTheme(theme == "light" ? "dark" : "light");
  }
  return (
    <>
      {location.pathname == "/login" || location.pathname == "/signup" ? (

        <div className={
          theme == "light"
            ? "flex items-center justify-center px-3 py-5 bg-white shadow-lg shadow-gray-500"
            : "flex items-center justify-center px-3 py-5 bg-gray-800 shadow-lg shadow-gray-500 text-white"
        }
        >

          <Link to = {"/"}><h1 className="text-center font-bold  text-2xl text-blue-400">
            Social Media
          </h1>
          </Link>

        </div>
      ) : (
        <div className={theme == "light" ? "flex items-center  bg-white justify-between px-3 py-5  shadow-lg shadow-gray-500" 
        : "flex items-center justify-between px-3 py-5 bg-gray-800  text-white shadow-lg  shadow-gray-500"}>
          <div>
            <Link to="{/}">


              <h1 className="text-center font-bold  text-2xl text-blue-400">
                Social Media
              </h1>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-5">
            <button className="py-2 px-3   hover:bg-blue-500 hover:text-white rounded corsor-pointer"
              onClick={handleThemeToggle}>
              {theme == "light" ? <CiLight size={20} /> : <MdDarkMode size={20} />}</button>

            <Link to={"/login"} className="py-2 px-3 hover:bg-blue-500 hover:text-white rounded corsor-pointer">Login</Link>
            <Link to={"/singup"} className="py-2 px-3 hover:bg-blue-500 hover:text-white rounded corsor-pointer" >Singup</Link>
          </div>
        </div>
      )}
    </>
  );
};