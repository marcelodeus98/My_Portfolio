import React, { useState, useEffect } from 'react';
import '../global/styles.css';
import Logo from '../global/img/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Verifica no carregamento
    handleResize();
    
    // Adiciona listener para redimensionamento
    window.addEventListener('resize', handleResize);
    
    // Remove listener ao desmontar
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo João Marcelo Deus" />
      </div>
      
      {!isMobile && (
        <nav className="menu">
          <ul>
            <li><a href="#home-div">Início</a></li>
            <li><a href="#about-div">Sobre</a></li>
            <li><a href="#skills-div">Habilidades</a></li>
            <li><a href="#projects-div">Projetos</a></li>
            <li><a href="#courses-div">Cursos</a></li>
            <li><a href="#contact-div">Contato</a></li>
          </ul>
        </nav>
      )}
      
      {isMobile && (
        <>
          <button className="menu-toggle" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home-div" onClick={toggleMenu}>Início</a></li>
              <li><a href="#about-div" onClick={toggleMenu}>Sobre</a></li>
              <li><a href="#skills-div" onClick={toggleMenu}>Habilidades</a></li>
              <li><a href="#projects-div" onClick={toggleMenu}>Projetos</a></li>
              <li><a href="#courses-div" onClick={toggleMenu}>Cursos</a></li>
              <li><a href="#contact-div" onClick={toggleMenu}>Contato</a></li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Menu;