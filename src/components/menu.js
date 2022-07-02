import React from 'react';
import '../global/styles.css';
import Logo from '../global/img/logo.png';

const Menu = () => {
    return (
        <header>
        <div class="logo">
            <img src={Logo} alt="Image logo"/>
        </div>
        <div class="menu">
            <ul>
                <li><a href="#home-div" id="a-menu">Home</a></li>
                <li><a href="#about-div" id="a-menu">About</a></li>
                <li><a href="#projects-div" id="a-menu">Projects</a></li>
                <li><a href="#courses-div" id="a-menu">Courses</a></li>
                <li><a href="#contact-div" id="link-menu">Contact</a></li>
            </ul>
        </div>
    </header>
    );
}

export default  Menu;