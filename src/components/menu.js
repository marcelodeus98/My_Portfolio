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
                <li><a href="#home-div" id="a-menu">Início</a></li>
                <li><a href="#about-div" id="a-menu">Sobre</a></li>
                <li><a href="#projects-div" id="a-menu">Projetos</a></li>
                <li><a href="#courses-div" id="a-menu">Cursos</a></li>
                <li><a href="#contact-div" id="link-menu">Contato</a></li>
            </ul>
        </div>
    </header>
    );
}

export default  Menu;