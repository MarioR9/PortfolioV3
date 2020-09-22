import React , {useState} from 'react'
import logo from './assets/Mlogo.png'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import PersonIcon from '@material-ui/icons/Person';
import IconButon from '@material-ui/core/IconButton';
const Header = () => {
    
    return (
        <div>
        <div className="header">
            <div>
            <IconButon>
            <img 
            className="header__logo"
            src={logo}
            alt='portfolio logo'
            /> 
            </IconButon>
            </div>
            <div className="header__menu">
                <div className='header__links'>
                <IconButon>
                <HomeIcon className="header__icon" fontSize="large"/>
                </IconButon>
                <IconButon>
                <PersonIcon className="header__icon" fontSize="large"/>
                </IconButon>
                <IconButon>
                <CloudDownloadIcon className="header__icon" fontSize="large"/>
                </IconButon>
                </div>
            </div>
            <div className="header__burger">
                <IconButon>
                <MenuIcon className="header__burger" fontSize="large"/>
                </IconButon>
            </div>
        </div>
        </div>
       
    )
}

export default Header
