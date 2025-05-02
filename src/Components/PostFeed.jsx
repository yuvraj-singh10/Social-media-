import { FcLike } from "react-icons/fc";

import profilePic from "../assets/mypic.jpg"

import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { Image } from "./Image";
import { Link } from "react-router-dom";

export const PostFeed = () => {

    const {theme} = useContext(ThemeContext);

  return (
    <>
      <section 
      className= {
        theme == "light"
        ? "rounded-2xl shadow-2xl text-black my-10 bg-white shadow-gray-500 p-4"
        : "rounded-2xl shadow-2xl text-white my-10 bg-gray-800 shadow-gray-500 p-4"
        }>
        <div className=" flex flex-col  ">
          <div className="flex  items-center justify-items-start  gap-5">
            <div >
             <Image profilePic = {profilePic}/>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Yuvraj Singh</h2>
              <p className="text-gray-600 text-sm">Lucknow {"   "}</p>
            </div>
          </div>
          <div className="pt-3 pb-2 text-xl">
            <Link to = {"/Post/:2"}>
            <p>Hello Everyone</p></Link>
          </div>

          <div>
            <img 
            src="https://social-media-3w1i.onrender.com/assets/Screenshot%20(150).png" 
            alt="Recent Work Image" 
            className="h-80 w-2xl rounded-2xl mt-4 overflow-hidden"
            />
          </div>
          <div className="flex px-4 pt-2 gap-3">
            <p className="mt-0.5"><FcLike  size={23}/></p>
            <span className="text-lg font-semibold ">
                3
            </span>
          </div>
        </div>
      </section>
    </>
  );
};