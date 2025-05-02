import { Footer } from "../Components/Footer"
import { Friendlist } from "../Components/Friendlist"
// import { NewCard } from "../Components/NewCard"
import { NewCard } from "../Components/NewCard"
import { PostFeed } from "../Components/PostFeed"
import { PostForm } from "../Components/PostForm"
import { ProfileCard } from "../Components/ProfileCard"


export const Home = () => {
    return (
        <>
        <div className="flex items-start justify-evenly my-10">     
              <div className="w-1/3">
              <ProfileCard/>
              <Friendlist/>
              
                </div>
            
        <div className="w-1/2 gap-5 ">
        <PostForm/>
        <PostFeed />
        <NewCard/>
        </div>
        </div>
        <Footer/>
 
        </>
    )
}