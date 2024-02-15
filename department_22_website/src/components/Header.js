import React from "react";
import "../styles/header.css"
import kafLogo from "../pictures/Kaf22Logo.png"
import MITITlogo from "../pictures/MITITlogo.png"
class Header extends React.Component{
    render(){
        return(
            <header id="mainHeader">
            <img id="KafLogo" className="headerLinks" src={kafLogo} alt="logo" height='100px'></img>
            <a className='headerLinks' href='/'>Home</a>
            <a className='headerLinks' href='/'>About</a>
            <a className='headerLinks' href='/'>Gallery</a>
            <a className='headerLinks' href='/'>Servises</a>
            <a className='headerLinks' href='/'>Contact</a>
            <img id="MITITLogo" className="headerLinks" src={MITITlogo} alt="mititLogo" height="100px"></img>
        </header>
        )
    }
}
export default Header