import React from 'react'
import '../css/Navigation.css'
import Logo from '../assets/Mlogo.png'
export const Navigation = () => {
    return (
        <div className='nav'>
            <div>
            <div>
            <img className='nav__logo' src={Logo} alt='logo'/>
            </div >
            </div>
            <div className="nav__links">
            <a href='/home'><li>Home</li></a >
            <a href='/about'><li>About</li></a >
            <a href='/skills'><li>Skills</li></a >
            <a href='/experience'><li>Experience</li></a >
            <a href='/portfolio'><li>Portfolio</li></a >
            </div>
        </div>
    )
}
export default Navigation;