// import { Routes } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Singup } from "./Pages/Singup"

import { Login } from "./Pages/login"
import { ThemeContext } from "./context/ThemeContext"
import { useEffect, useState } from "react"
// import { Profilesetting } from "./Components/Profilesetting"
import { Profilesetting } from "./Components/Profilesetting"
import { Post } from "./Components/Post"

export const App = () => {
  const [theme, setTheme] = useState("light");

  // useEffect(()=>{

  //   let currentTheme = theme =="light"? "dark" : "light";

  //   localStorage.setItem("theme",currentTheme);

  // },[setTheme,theme]);

  return (
    <>
      <Router>
        <ThemeContext.Provider value= {{theme,setTheme}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singup" element={<Singup />} />
          <Route path ="/update-profile" element={<Profilesetting/>}/>   
          <Route path="/Post/:id" element={<Post/>}/>
          </Routes>
        </ThemeContext.Provider>
      </Router>
    </>
  )
} 
export default App