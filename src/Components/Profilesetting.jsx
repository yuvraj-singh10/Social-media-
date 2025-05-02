import { useContext, useRef, useState } from "react";
import profilePic from "../assets/mypic.jpg"
import { Image } from "./Image";
import { ThemeContext } from "../context/ThemeContext";
export const Profilesetting = () => {
    const {theme} = useContext(ThemeContext)
    const imageRef = useRef();
    const [profileData, setProfileData ] = useState({

    //   name: "",
    //   email: "",
    //   password: "",
    //   location: "",


});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit")
        console.log(profileData);


    }
    const handleImageChange = (e) => {
        imageRef.current.click();
    }
    const handleImageUpdate = (e) => {
        imageRef.current.click();
    }
    const handleChange = (e) => {
        setProfileData((pre) => {
            return { ...pre, [e.target.name]: e.target.value };
        });
    }

    return (

        <>

            <section className={theme == "light"
                ? " flex flex-col items-center justify-center shadow-2xl   shadow-gray-500 w-1/2 mx-auto rounded-xl mt-10 p-5 gap-5 "
                : " flex flex-col items-center justify-center shadow-2xl bg-gray-800 text-white shadow-gray-500 w-1/2 mx-auto rounded-xl mt-10 p-5 gap-5"}>
                <h1 className="text-center text-3xl font-bold ">
                    User Profile setting
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className="justify-center gap-10 p-5 flex items-center">
                        <input type="file"
                            className="hidden"
                            ref={imageRef}
                            onChange={handleImageChange}
                            accept="*/png,jpg,jpeg,gif"
                        />
                        <div>
                            <Image profilePic={profilePic} onclick={handleImageUpdate} className="cursor-pointer" />
                        </div>
                    </div>


                    {/* <label  className = "gap-5" htmlFor="userName">User Name</label> */}
                    <input type="text"
                        placeholder="User name..."
                        nmae = "user name"
                        className="p-3  my-4 w-full border-2 rounded"
                        onChange={handleChange} />

                    <input type="password"
                        placeholder="Password..."
                        name="password"
                        className="p-3  my-4  w-full border-2 rounded"
                        onChange={handleChange} />


                    <input type="text"
                        placeholder="Location..."
                        name ="Location"
                        className="p-3  my-4 w-full border-2 rounded"
                        onChange={handleChange} />

                    <input type="email"
                        placeholder="User email..."
                        name="email"
                        className="p-3  my-4 w-full border-2 rounded"
                        onChange={handleChange} />
                    
                    <div className="flex items-center justify-center mx-auto">
                        <button
                            type="submit"
                            className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-5 rounded cursor-pointer border-2 border-gray-400 ">
                            Update
                        </button>
                    </div>




                </form>


            </section>

        </>

    )
}