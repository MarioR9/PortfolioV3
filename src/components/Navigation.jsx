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
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Experience</li>
            <li>Portfolio</li>
            </div>
        </div>
    )
}
export default Navigation;