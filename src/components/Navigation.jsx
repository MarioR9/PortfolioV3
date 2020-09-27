import React from 'react'
import '../css/Navigation.css'
import Logo from '../assets/Mlogo2.png'
import { Link } from "react-scroll";

const Navigation = () => {

    const links =["Home","About","Skills","Experience","Portfolio"]

    return (
        <div className='nav' >
            <div>
            <div>
            <a href='/home'>
             <img className='nav__logo' src={Logo} alt='logo'/>
            </a>
            </div >
            </div>
            <div className="nav__links">
                {links.map(link =>
                <Link 
                data-aos="slide-left" 
        data-aos-delay="30"  
        data-aos-easing="ease-in-out"
        data-aos-offset="200"
        data-aos-duration="1800"
                key={link} to={link.toLowerCase()} smooth={true} duration={1300} href={`/${link.toLowerCase()}`}><li>{link}</li></Link>
                )}
            </div>
        </div>
    )
}
export default Navigation;