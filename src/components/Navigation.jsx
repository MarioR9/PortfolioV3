import React from 'react'
import '../css/Navigation.css'
import Logo from '../assets/Mlogo2.png'

const Navigation = () => {
    const links =["Home","About","Skills","Experience","Portfolio"]
    return (
        <div className='nav'>
            <div>
            <div>
            <a href='/home'>
             <img className='nav__logo' src={Logo} alt='logo'/>
            </a>
            </div >
            </div>
            <div className="nav__links">
                {links.map(link =>
                <a key={link} href={`/${link.toLowerCase()}`}><li>{link}</li></a >
                )}
            </div>
        </div>
    )
}
export default Navigation;