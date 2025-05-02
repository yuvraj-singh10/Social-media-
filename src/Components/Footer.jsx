
import { IoLogoLinkedin } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
export const Footer = () =>{
    const {theme} = useContext(ThemeContext)
    return(
        <>
        <footer className={theme == "light"
        ? "bg-gray-100 shadow-2xl p-6"
        :"bg-gray-800 text-white shadow-2xl p-6"}>
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3  shadow-2xs gap-8 text-center md:text-left">
    
  
    <div>
      <h3 className="text-lg font-bold text-blue-600 mb-2">Social Media</h3>
      <p className="text-gray-500 text-sm">© Copyright 2025. <br/>All Rights Reserved by Yuvraj Singh.</p>
    </div>

  
    <div>
      <h3 className="text-lg font-bold text-gray-600 mb-2">Support</h3>
      <ul className="text-gray-600 text-sm space-y-1">
        <li><a href="#" className="hover:text-blue-500">HelpCenter</a></li>
        <li><a href="#" className="hover:text-blue-500">Term of Use</a></li>
        <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
      </ul>
    </div>

 
    <div>
      <h3 className="text-lg font-bold  text-gray-600 mb-2">Connect with Us</h3>
      <div className="flex justify-center size-{20} md:justify-start space-x-4 p-3 ">

        <a href="https://www.linkedin.com/in/yuvraj-singh-3644a9254" target="_blank">
        <IoLogoLinkedin size={25} />
        </a>

         <a href="https://www.instagram.com/singh_yuvi_06?utm_source=qr&igsh=bHRobzFkOXdwYWgw" target="_blank">
         <FaSquareInstagram  size={25}/> </a>
        <a href="https://www.facebook.com/share/16cGANNuPJ/" target="_blank"><FaFacebook size={25}/> </a>
      </div>
    </div>

  </div>
</footer>

        </>
        
    )
}