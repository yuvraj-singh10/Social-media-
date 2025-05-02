import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

// const {theme} = useContext(ThemeContext)
export const Login = () => {

  const [loginData,setLoginData] = useState({
    email: "",
    password: "",
  });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("from Submit");
        console.log(loginData);
        


    }
    const handleChange= (e) => {
      setLoginData((pre)=>{
        return{...pre, [e.target.name]:e.target.value};

  });

    }
    return (
  <>
  <div className="flex items-center justify-center mx-auto my-20">
    <form
     onSubmit = {handleSubmit} 
      className=" flex flex-col items-center justify-center gap-5 py-10 px-5 bg-gray-50 shadow-2xl shadow-gray-500 rounded w-1/3 " >
    
     <div className="w-full">
      <input
      type="email"
      name="email"
      placeholder="Enter Your Email"
      onChange={handleChange}
      className="py-2 px-3 outline-None border-2 rounded w-full"/>
      </div> 

      <div className="w-full">
      <input
      type="password"
      placeholder="Enter Your password"
      name="password"
      onChange={handleChange}
      className="py-2 px-3 outline-None border-2 rounded w-full"/>
      </div>

      <div className="flex item-center justify-center mx-auto w-full">
      <button className="py-2 px-3 bg-blue-500 text-white w-full rounded cursor-pointer hover:scale-0.7px"
      type="submit
      ">Submit
      </button>
      </div>
      <Link  to = "/singup" className=" text-blue-600"> dont have an account</Link>

        
        </form>
         </div>
        </>
    )
}