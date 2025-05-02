import { Image } from "./Image";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import profilePic from "../assets/mypic.jpg"
export const Friendlist = () => {
    const {theme} = useContext(ThemeContext);
    
    const friends = [{
        id:1,
        name:"shivank",
        image:profilePic,
        description:"my name is shivank",
        friends:"4",
        post:"35",
        like:"567",
    },];
    return(
        <>
        <section className= {theme=="light"
        ? "rounded-2xl shadow-2xl w-2/3 text-black my-10 bg-white shadow-gray-500 p-4"
        : "rounded-2xl shadow-2xl w-2/3 text-white my-10 bg-gray-800 shadow-gray-500 p-4"
        
        

        }>
            <h1>
                Friend's
            </h1>
            <div className="flex flex-col items-center justify-center gap-5 p-2 rounded shadow-xl shadow-gray-500">
              
              {
                 friends.map((friend)=>{
                    return(
                     <li key = {friend.id} className="flex items-center justify-between p-2 w-full 
                     rounded gap-5">
                     
                     <div>
                        <Image profilePic = {friend.image}/>
                     </div>

                     <div>
                        <p>{friend.name}</p>
                        <p>{friend.description}</p>

                     </div>
                     <div>
                        <p>{friend.friends}</p>
                        <p>{friend.post}</p>
                        <p>{friend.like}</p>
                     </div>

                    </li>
                
                    );
                })
                }

            </div>

        </section>
        
        </>
    )
}