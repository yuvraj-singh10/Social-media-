import { FcLike } from "react-icons/fc";
import profilePic from "../assets/mypic.jpg";

import { useContext } from "react";
import { Image } from "./Image";
import { ThemeContext } from "../context/ThemeContext";

export const Post = () => {

    const {theme} = useContext(ThemeContext);

  return (
    <>
      <section 
      className= {
        theme == "light"
        ? "rounded-2xl shadow-2xl text-black bg-white shadow-gray-500 p-4  my-10 "
        : "rounded-2xl shadow-2xl text-white bg-gray-800 shadow-gray-500 p-4 my-10 "
        }>
        <div className=" flex flex-col  ">
          <div className="flex  items-center justify-items-start  gap-5">
            <div >
              <Image profilePic={profilePic}/>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Shivam Singh Rawat</h2>
              <p className="text-gray-600 text-sm">Lucknow {"   "}</p>
            </div>
          </div>
          <div className="pt-3 pb-2 text-xl">
            
            <p>Hello Everyone</p>
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