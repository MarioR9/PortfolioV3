import React from 'react'
import logo from './assets/Mlogo.png'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import IconButon from '@material-ui/core/IconButton'

const Header = () => {
    return (
        <div className="header">
            <IconButon>
            <img 
            className="header__logo"
            src={logo}
            alt='portfolio logo'
            /> 
            </IconButon>
            <IconButon>
            <MenuIcon className="header__menu" fontSize="large"/>
            </IconButon>
        </div>
    )
}

export default Header
