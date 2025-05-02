import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Image } from "./Image";
// import { profilePic} from "../assets/mypic.jpg"
import profilePic  from "../assets/mypic.jpg"
import { FcLike } from "react-icons/fc";
export const NewCard = () => {
        const {theme} = useContext(ThemeContext);
    return(
          <>
          <section className= {theme == "light"
            ? "rounded-2xl shadow-2xl text-black my-4 bg-white shadow-gray-500 p-2 "
        : "rounded-2xl shadow-2xl text-white my-10 bg-gray-800 shadow-gray-500 p-4"
          }>

            <div className="flex items-start gap-5">
                <div className="flex items-center justify-start gap-5">
                    
                      <Image profilePic = {profilePic}/>


                </div>

            
            <div>
              <h2 className="text-xl font-semibold">Yuvraj Singh</h2>
              <p className="text-gray-600 text-sm">Lucknow {"   "}</p>
            </div>
            </div>
            <div  className="pt-3 pb-2 text-l">
                Hello Everyone
            </div>

             <div className="flex px-4 pt-2 gap-3">
            <p className="mt-0.5"><FcLike  size={20}/></p>
            <span className="text-lg font-semibold ">
                3
            </span>
          </div>
          </section>
          
          </>

    )
}