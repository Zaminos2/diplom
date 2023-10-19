import NavBar from "./NavBar";
import { showingPath } from "../utils";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


function Header(){
    const {pathname}= useLocation();
    useEffect(()=>{
        showingPath(pathname);
    },[pathname])
    return(
        <NavBar/>
    )
}

export default Header;