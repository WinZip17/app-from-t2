import React from 'react';
import Logo from "../../media/header/logo.svg";
import LineMenu from "../../media/header/line-menu.svg";
import UserInfo from "./UserInfo";

const Header = () => {
    return (
        <header>
            <div className="logoSell">
                <Logo className="logo"/>
            </div>
            <input type='checkbox' name="toggle" id="menu" className='toggleMenu'/>
            <div className='tabletBlockMenu'>
                <menu className="tabletMenu">
                    <li className="menuItem"><a href='#about'>About me</a></li>
                    <li className="menuItem"><a href='#relationships'>Relationships</a></li>
                    <li className="menuItem"><a href='#requirements'>Requirements</a></li>
                    <li className="menuItem"><a href='#users'>Users</a></li>
                    <li className="menuItem menuItemHeader"><a href='#signUp'>Sign Up</a></li>
                    <li className="menuItem itemSingOut"><a href='#signOut'>Sign Out</a></li>
                </menu>
                <UserInfo />
            </div>
            <label htmlFor='menu' className="toggleMenu">
                <LineMenu className="lineMenu"/>
            </label>
        </header>
    );
}


export default Header;
