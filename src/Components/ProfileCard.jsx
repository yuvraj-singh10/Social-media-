import { IoMdSettings } from "react-icons/io"
import { FaDev } from "react-icons/fa"
import { FaMapMarkerAlt } from "react-icons/fa"
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import profilePic from "../assets/mypic.jpg";
import { Image } from "./Image";
import { Link } from "react-router-dom";

export const ProfileCard = () => {
    const{theme}= useContext(ThemeContext)
    return (<>
        <section className={theme =="light"
            ?"flex flex-col shadow-2xl  bg-white text-black items-center justify-center w-2/3 hover:scale-104 rounded-xl shadow-gray-500"
            :"flex flex-col bg-gray-800 shadow-2xl text-white items-center justify-center w-2/3 hover:scale-104 shadow-gray-500 rounded-xl"
        }>

            <div className="flex items-center justify-center gap-5 w-2/3 border-b-2 p-3">
                <div className=" w-20 h-20 rounded-full">
                   <Image profilePic = {profilePic} />          
                    </div>
                <div className="">
                    <h3 className="font-bold">Yuvraj Singh</h3>
                    <p>setting</p>
                </div>
                <Link to = {"/update-profile"}>
                <p>
                    <IoMdSettings size={20} />
                </p>
                </Link>
            </div>
            <div className=" border-b-2 w-2/3  p-3">
                <h3 className=" flex items-start justify-center gap-5">
                    <FaMapMarkerAlt />
                    <span>Location</span></h3>

                <h3 className="flex items-start justify-center gap-5">
                    <FaDev />
                    <span>Developer</span>
                </h3>
            </div>
            <div className="border-b-2 w-2/3 mb-2 p-3 flex flex-col item-start justify-start ">
                <div className="py-2 flex items-center justify-center gap-5">
                    <p>Whose viewed your profile</p>
                    <p> 120</p>{""}
                </div>
                <div className="py-2 flex items-center justify-center gap-5">
                    <p>Impresssion on your post </p>
                    <p>120</p>
                </div>
            </div>

        </section>

    </>);
}; 