
import { useContext, useRef, useState } from "react"
// import { ThemeContext } from "../context/ThemeContext";
import { ThemeContext } from "../context/ThemeContext";
export const Singup = () => {
    const {theme} = useContext(ThemeContext)
    const imageRef = useRef();
    const [singUpData,setsingUpData] = useState({

        firstName:"",
        lastName:"",
        email:"",
        password:"",
        location:"",
        occupation:""
    })
    const handleImageChange = (e) =>{
        // console.log("changed");
   
        
    }
    const handleImageUpload = () =>{   
     imageRef.current.click();      

    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("object");
        console.log(singUpData)
        
    }
    const handleChange = (e) => {
        setsingUpData((pre)=>{
            return{...pre,[e.target.name]: e.target.value};
    })
    }
    return (
        <>
        <div className="flex items-center justify-center mx-auto my-10 ">
        
        <form className={theme == "light" 
         ? " p-5 shadow-md shadow-gray-500  text-black w-1/2"
         :" p-5 shadow-md bg-gray-800 text-white w-1/2"
        } onSubmit={handleSubmit}
        >
           
           <div className="flex items-center justify-center  my-5 gap-5">
            
            <input type="text" 
            placeholder="First Name..."
             name = "firstName" 
             onChange={handleChange}
             className="w-1/2 p-3 border-2  outline-none rounded" />
            
            <input type="text"
             placeholder="Last Name..." 
             name = "lastName"
             onChange={handleChange}
              className="w-1/2 p-3 border-2 outline-none rounded" />
           </div>

           <div>
           <input type="text"
            placeholder="Location"
            onChange={handleChange}
             name = "location" 
             className="w-full p-3 border-2 outline-none my-5 rounded" />

           </div>
           <input type="text"
            placeholder="Occupation" 
            name = "occupation"
            onChange={handleChange}
            className="w-full p-3 my-5 border-2 outline-none rounded" />
         <div>
           
            <div>
                <input type="file"
                placeholder="Add picture here"
                accept = "image/*"
                name="image"
                
                className="w-full p-3 hidden border-2 outline-none rounded"
                onChange = {handleImageChange}
                ref={imageRef}></input>
               </div>
               
               <div className="p-5 w-full border-2 my-5 rounded">
                <button type = "button" 
                className="outline-none border-2 border-dotted p-4 w-full rounde
                cursor-pointer"
                onClick={handleImageUpload}
                >Add picture here</button>

 
            </div>
            <input type="email" 
            onChange={handleChange}
            name="email"
            placeholder="Enter your email"
            className="outline-none border-2 p-3 rounded  mx-auto w-full"/>
            <p> EMAIL: email@gmail.com</p>
           </div>
            
            <div>
            <input type="password" 
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
            className="outline-none border-2  my-5 p-3 rounded  mx-auto w-full"/>
            <p> password: 098765544</p>
            
            <button
            type="submit"
            className="w-full p-3 border-2 outline-none rounded-xl cursor-pointer bg-blue-500 text-white text-bold hover:scale-0.5">REGISTER

            </button>
            </div>
         </form>
        </div>
        </>
    )
}