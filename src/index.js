import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/menu";
import "./global/styles.css";

import imgPerfil from "./global/img/perfil-portfolio.jpg";
import imgProjectPortfolio from "./global/img/project-portfolio.png";
import imgProjectInsta from "./global/img/project1.png";
import imgProjectCI from "./global/img/project2.jpg";
import imgProjectConverter from "./global/img/project3.jpeg";
import imgProjectTripWise from "./global/img/tripwise-api.jpeg";
import imgProjectAPIUsers from "./global/img/api-users.jpeg";
import iconGithub from "./global/img/github.png";
import iconBackend from "./global/img/backend-icon.png";
import imgCourse1 from "./global/img/img-c5.png";
import imgCourse2 from "./global/img/img-c3.jpeg";
import imgCourse3 from "./global/img/img-c4.jpeg";
import imgCourse4 from "./global/img/img-c2.jpeg";

const Portfolio = () => {
  return (
    <div className="App">
      <div className="flexbox-container">
        <Menu />
        
        <div className="image-parallax" id="home-div"></div>

        <main className="main-container">
          {/* Seção Inicial */}
          <section className="section-project intro-section">
            <h1 className="title">João Marcelo Deus</h1>
            <img
              className="img-perfil"
              src={imgPerfil}
              alt="Foto de perfil João Marcelo"
              width="200"
              height="200"
            />
            <p className="subtitle">
              Desenvolvedor Backend | Ruby | Node.js | APIs REST
            </p>
          </section>

          {/* Seção Sobre */}
          <section className="section-project" id="about-div">
            <h1 className="title">Sobre</h1>
            <div className="about-content">
              <p>
                Desde cedo, tenho grande interesse pela tecnologia, especialmente
                no desenvolvimento. Durante o ensino médio, realizei um curso técnico
                em informática, onde explorei diversas áreas como redes, hardware,
                banco de dados e desenvolvimento de software.
              </p>
              <p>
                Nessa jornada, descobri minha afinidade com o desenvolvimento web.
                Atualmente, foco em aprimorar minhas habilidades em tecnologias
                modernas para construção de sistemas robustos e escaláveis.
              </p>
              <p>
                Especializo-me em desenvolvimento backend com Node.js e Ruby,
                criando APIs RESTful eficientes. Estou constantemente buscando
                novos desafios para expandir meus conhecimentos e me tornar um
                profissional mais completo.
              </p>
            </div>
          </section>

          {/* Seção Habilidades */}
          <section className="section-project" id="skills-div">
            <h1 className="title">Linguagens e Ferramentas</h1>
            <div className="skills-container">
              <div className="skill-category">
                <h3>
                  <img src={iconBackend} alt="Backend" className="skill-icon" />
                  Backend
                </h3>
                <ul>
                  <li>JavaScript (Node.js)</li>
                  <li>Ruby</li>
                  <li>Ruby on Rails</li>
                  <li>Sinatra</li>
                  <li>Express.js</li>
                  <li>Sequelize</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>🛠️ Outras Tecnologias</h3>
                <ul>
                  <li>PostgreSQL</li>
                  <li>Git/GitHub</li>
                  <li>Docker</li>
                  <li>APIs REST</li>
                  <li>Swagger</li>
                  <li>JWT</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Seção Projetos */}
          <section className="section-project" id="projects-div">
            <h1 className="title">Projetos</h1>
            
            {/* Projeto 1 - Portfolio */}
            <div className="project-card">
              <div className="project-image-container">
                <img
                  className="project-image"
                  src={imgProjectPortfolio}
                  alt="Projeto Portfólio"
                />
              </div>
              <div className="project-details">
                <h2>Meu Portfólio</h2>
                <p>
                  Projeto pessoal desenvolvido para apresentação profissional,
                  inicialmente concebido com HTML5 e CSS3 básicos, mas evoluído
                  para incorporar React. Este projeto representa meu primeiro
                  trabalho completo de desenvolvimento frontend autoral.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/marcelodeus98/My_Portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <img
                      src={iconGithub}
                      alt="Repositório GitHub"
                      className="github-icon"
                    />
                    Ver código
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 2 - TripWise */}
            <div className="project-card reverse-layout">
              <div className="project-image-container">
                <img
                  className="project-image"
                  src={imgProjectTripWise}
                  alt="TripWise API"
                />
              </div>
              <div className="project-details">
                <h2>TripWise - API de Viagens</h2>
                <p>
                  <strong>Tecnologias:</strong> Ruby, Sinatra, Google Gemini API
                </p>
                <p>
                  API que gera roteiros de viagem personalizados usando IA.
                  Desenvolvi também uma gem personalizada para integração com a
                  API do Google Gemini.
                </p>
                <ul className="project-features">
                  <li>Validação de inputs</li>
                  <li>Cache de respostas</li>
                  <li>Documentação Postman</li>
                </ul>
                <div className="project-links">
                  <a
                    href="https://github.com/marcelodeus98/tripwise"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <img
                      src={iconGithub}
                      alt="Repositório GitHub"
                      className="github-icon"
                    />
                    Ver código
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 3 - Users API */}
            <div className="project-card">
              <div className="project-image-container">
                <img
                  className="project-image"
                  src={imgProjectAPIUsers}
                  alt="Users API"
                />
              </div>
              <div className="project-details">
                <h2>Users API</h2>
                <p>
                  <strong>Tecnologias:</strong> Node.js, Express, JWT, Nodemailer, Swagger
                </p>
                <p>
                  Sistema completo de autenticação de usuários com diversas
                  funcionalidades de segurança e recuperação de conta.
                </p>
                <ul className="project-features">
                  <li>Registro e login com JWT</li>
                  <li>Recuperação de senha via email</li>
                  <li>Documentação Swagger automatizada</li>
                  <li>Banco de dados relacional</li>
                </ul>
                <div className="project-links">
                  <a
                    href="https://github.com/marcelodeus98/usersapi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <img
                      src={iconGithub}
                      alt="Repositório GitHub"
                      className="github-icon"
                    />
                    Ver código
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 4 - Instagram Clone */}
            <div className="project-card reverse-layout">
              <div className="project-image-container">
                <img
                  className="project-image"
                  src={imgProjectInsta}
                  alt="Instagram Clone"
                />
              </div>
              <div className="project-details">
                <h2>Instagram HomePage</h2>
                <p>
                  Projeto desenvolvido como exercício prático em um curso
                  introdutório de HTML5 e CSS, focando nos conceitos de Flexbox.
                </p>
                <p>
                  O resultado foi uma réplica responsiva da página inicial do
                  Instagram, demonstrando habilidades básicas de frontend.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/marcelodeus98/instagram-homepage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <img
                      src={iconGithub}
                      alt="Repositório GitHub"
                      className="github-icon"
                    />
                    Ver código
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 5 - Central.Inventory */}
            <div className="project-card">
              <div className="project-image-container">
                <img
                  className="project-image"
                  src={imgProjectCI}
                  alt="Central Inventory"
                />
              </div>
              <div className="project-details">
                <h2>Central.Inventory</h2>
                <p>
                  Sistema de gerenciamento de estoque com funcionalidades básicas
                  de entrada e saída, notificações e controle de acesso.
                </p>
                <p>
                  <strong>Status:</strong> Em desenvolvimento (implementando
                  módulo de relatórios)
                </p>
                <ul className="project-features">
                  <li>Controle de entradas/saídas</li>
                  <li>Sistema de notificações</li>
                  <li>Autenticação de usuários</li>
                  <li>Registro de atividades</li>
                </ul>
                <div className="project-links">
                  <a
                    href="https://github.com/marcelodeus98/Central.Inventory"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <img
                      src={iconGithub}
                      alt="Repositório GitHub"
                      className="github-icon"
                    />
                    Ver código
                  </a>
                </div>
              </div>
            </div>

            {/* Projeto 6 - Conversor de Moedas */}
            <div className="project-card reverse-layout">
              <div className="project-image-container">
                <img
                  className="project-image"
                  src={imgProjectConverter}
                  alt="Conversor de Moedas"
                />
              </div>
              <div className="project-details">
                <h2>Conversor de Moedas</h2>
                <p>
                  Aplicação web simples para conversão de moedas, desenvolvida
                  para praticar manipulação do DOM com JavaScript.
                </p>
                <p>
                  Projeto focado em fundamentos de frontend: HTML semântico,
                  CSS organizado e JavaScript funcional.
                </p>
                <div className="project-links">
                  <a
                    href="https://github.com/marcelodeus98/Conversor-de-moedas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    <img
                      src={iconGithub}
                      alt="Repositório GitHub"
                      className="github-icon"
                    />
                    Ver código
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Seção Cursos */}
          <section className="section-project" id="courses-div">
            <h1 className="title">Cursos</h1>
            
            <div className="courses-grid">
              {/* Curso 1 */}
              <div className="course-card">
                <div className="course-image-container">
                  <img
                    src={imgCourse1}
                    alt="Lógica de Programação"
                    className="course-image"
                  />
                </div>
                <div className="course-details">
                  <h3>Lógica de Programação Essencial</h3>
                  <p>
                    Fundamentos de lógica de programação, algoritmos e estruturas
                    básicas que formam a base para qualquer linguagem de
                    programação.
                  </p>
                </div>
              </div>

              {/* Curso 2 */}
              <div className="course-card">
                <div className="course-image-container">
                  <img
                    src={imgCourse2}
                    alt="Pensamento Computacional"
                    className="course-image"
                  />
                </div>
                <div className="course-details">
                  <h3>Introdução à Programação e Pensamento Computacional</h3>
                  <p>
                    Curso introdutório que apresenta os conceitos fundamentais de
                    programação e desenvolve a habilidade de pensar de forma
                    algorítmica.
                  </p>
                </div>
              </div>

              {/* Curso 3 */}
              <div className="course-card">
                <div className="course-image-container">
                  <img
                    src={imgCourse3}
                    alt="Introdução ao JavaScript"
                    className="course-image"
                  />
                </div>
                <div className="course-details">
                  <h3>Introdução ao JavaScript</h3>
                  <p>
                    Fundamentos da linguagem JavaScript, incluindo sintaxe,
                    estruturas de controle, funções e manipulação básica do DOM.
                  </p>
                </div>
              </div>

              {/* Curso 4 */}
              <div className="course-card">
                <div className="course-image-container">
                  <img
                    src={imgCourse4}
                    alt="Decola Tech Avanade"
                    className="course-image"
                  />
                </div>
                <div className="course-details">
                  <h3>Avanade - Decola Tech</h3>
                  <p>
                    Bootcamp intensivo da Avanade em parceria com a Digital
                    Innovation One, com foco em desenvolvimento backend e
                    tecnologias Microsoft.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Seção Contato */}
          <section className="section-project contact-section" id="contact-div">
            <h1 className="title">Contato</h1>
            <div className="contact-grid">
              <a
                href="https://github.com/marcelodeus98"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <ion-icon name="logo-github"></ion-icon>
                <span>marcelodeus98</span>
              </a>

              <a
                href="https://www.linkedin.com/in/jmarcelodeus/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
                <span>João Marcelo Deus</span>
              </a>

              <a
                href="https://www.instagram.com/jmarcelo_deus/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <ion-icon name="logo-instagram"></ion-icon>
                <span>@jmarcelo_deus</span>
              </a>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="footer-container">
            <p>© {new Date().getFullYear()} Desenvolvido por João Marcelo Deus</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Portfolio />, rootElement);