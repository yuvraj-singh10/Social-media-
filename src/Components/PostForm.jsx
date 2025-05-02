import { ThemeContext } from "../context/ThemeContext"
// import {useRef} from "/react"
import { FaImages } from "react-icons/fa";
import { useContext, useRef } from "react";
import { useState } from "react";
import profilePic from "../assets/mypic.jpg";
import { Image } from "./Image";
export const PostForm = () => {
    const imageRef = useRef();

    const[image,setImage]= useState(null);
    const[description,setDescription ] = useState("")

    const {theme} = useContext(ThemeContext);

    const handleImageUpload = ()=>{
        imageRef.current.click();
    }
const handleChange = (e)=>{
    setDescription(e.target.value);
};
const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(description);
    setDescription("")
    
}

    return(
    <>
    <section className={theme == "light"
    ?"bg-white shadow-xl shadow-gray-500 rounded-2xl w-full p-5"
    :"bg-gray-800  text-white shadow-gray-500 rounded-2xl w-full p-5"

    }>
        <form 
        onSubmit={handleSubmit}
        >

            <div className="flex items-center justify-start gap-12">
                <div >
               
                  <Image profilePic = {profilePic}/>
                </div>

             <textarea name="textarea" 
             onChange={handleChange}
             placeholder="Write something to post..." 
             id="" rows="1"
             value= {description}
             className="rounded-xl py-3 px-5 w-full border-2 text-black bg-gray-200 "
             ></textarea>
          
            </div>
            <section className="flex items-center justify-between p-3">
                <div>
                  <input type="file" className="hidden" ref={imageRef}/>

                  <button className="flex items-center gap-3 justify-center cursor-pointer"
                  type="button"
                  onClick={handleImageUpload}>

                    <FaImages size = {28}/><span className="text-lg font-normal">Upload Image</span>
                    </button>

                </div>
                <button className="bg-blue-500 text-white rounded-md py-2 px-5">post</button>
            </section>
        </form>
    </section>
    </>

    )
}