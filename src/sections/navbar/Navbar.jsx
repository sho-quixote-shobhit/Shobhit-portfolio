import './navbar.css'
import Logo from '../../assests/heart.jpg'
import data from './data'
import { IoIosColorPalette } from "react-icons/io"; 
import ThemeModal from '../../theme/ThemeModal';
import React, { useState } from 'react';

const Navbar = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [themeColor, setThemeColor] = useState('');

    const handleThemeChange = (color) => {
        setThemeColor(color);
        document.documentElement.style.setProperty('--primary-color', color);
        setModalVisible(false);
    };

    return (
        <nav style={{ backgroundColor: themeColor }}>
            <div className='container nav__container'>
                <a href="index.html" className='nav__logo'> 
                    <img src={Logo} alt="" />
                </a>
                <ul className='nav__menu'>
                    {data.map((item) => (
                        <li key={item.id}><a href={item.link}>{item.title}</a></li>
                    ))}
                </ul>
                <button id="theme__icon" onClick={() => setModalVisible(true)}>
                    <IoIosColorPalette /> 
                </button>
            </div>
            <ThemeModal isVisible={isModalVisible} onClose={handleThemeChange} />
        </nav>
    );
}

export default Navbar;
