import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu';
import "./global/styles.css";

import imgPerfil from './global/img/perfil-portfolio.jpg';
import imgProjectPortfolio from './global/img/project-portfolio.png';
import imgProjectInsta from './global/img/project1.png';
import imgProjectCI from './global/img/project2.jpg';
import imgProjectConverter from './global/img/project3.jpeg';
import iconGithub from './global/img/github.png';
import imgCourse1 from './global/img/img-c5.png';
import imgCourse2 from './global/img/img-c3.jpeg';
import imgCourse3 from './global/img/img-c4.jpeg';
import imgCourse4 from './global/img/img-c2.jpeg';



const textJMD = "const JMD = ( ) => 'Desenvolvedor web | NodeJS | React';"

const Portfolio = () => {
    return (
        <div className="App">
            <div clasName="flexbox-conatiner">
                <Menu></Menu>

                <div className='image-parallax' id='home-div'></div>

                <main className='main-container'>
                    <div className='section-project'>
                        <h1 className='title'>João Marcelo Deus</h1>
                        <img className="img-perfil" src={imgPerfil} width="100vmin" height="100vmax"/>
                        <p>{textJMD}</p>
                    </div>
                    
                    <div className="section-project" id="about-div">
                        <h1 className="title">Sobre</h1>
                        Desde cedo, tenho um grande interesse pela tecnologia, especialmente na área de desenvolvimento. Durante o ensino médio, realizei um curso técnico em informática, onde tive a oportunidade de explorar diversas áreas, como redes, hardware, banco de dados e desenvolvimento de software.

Ao longo dessa jornada, descobri uma forte afinidade com o desenvolvimento web. Atualmente, estou focado no aprimoramento das minhas habilidades em HTML, CSS e JavaScript para a construção de interfaces intuitivas e responsivas. Além disso, estou aprofundando meus conhecimentos em ferramentas como Node.js e React, preparando-me para enfrentar novos desafios e alcançar um crescimento constante como desenvolvedor.
                    </div>    

                    <div className="section-project" id="projects-div">
                        <h1 className="title">Projetos</h1>
                        <div className="project-container">
                            <div className="project-container-section">
                                <div className="project-container-img">
                                    <img className="img-project" src={imgProjectPortfolio} width="400vmin" height="300vmax"/>
                                </div>
                                <div className="project-container-description">
                                    <h2>Meu Portfólio</h2>
                                    <p>Como projeto pessoal para uma apresentação sobre mim e também de carater profissional, iniciei o desenvolvimento do meu próprio Portfólio, a premissa como algo simples, apenas aplicando conhecimentos básicos de HTML5 e CSS3, porém decidir acrescentar o React na receita do mesmo, e também o que está sendo meu desafio, a tentativa de minha primeira página com desevolvimento dito propriamente meu.</p>
                                    <p><a href="https://github.com/marcelodeus98/My_Portfolio" target="_blank" rel="noopener noreferrer"> <img className="logo-link-github" src={iconGithub} alt="Repositório GITHUB"/></a></p>
                                </div>
                            </div>
            
                            <div className="project-container-section">
                                <div className="project-container-img">
                                <img className="img-project" src={imgProjectInsta} width="400vmin" height="300vmax"/>
                                </div>
                                <div className="project-container-description">
                                    <h2>Instagram HomePage</h2>
                                    <p>Na busca por conhecimento, me encontrei em um curso introdutório de HTML5 e CSS, onde em uma determina etapa, havia como um exercício prático o desenvolvimento da página inicial do Instagran, utlizando apenas estas ferramentas e conceitos do CSS com uso do flexbox, criando assim uma pagina completamente responsiva.</p>
                                    <p><a href="https://github.com/marcelodeus98/instagram-homepage" target="_blank" rel="noopener noreferrer"> <img className="logo-link-github" src={iconGithub} alt="Repositório GITHUB"/></a></p>
                                </div>
                            </div>

                            <div className="project-container-section">
                                <div className="project-container-img">
                                <img className="img-project" src={imgProjectCI} width="400vmin" height="300vmax"/>
                                </div>
                                <div className="project-container-description">
                                    <h2>Central.Inventory</h2>
                                    <p>Um sistema simples para um gerenciamento de estoque, com a disponibilidade das funções básicas de entrada e saída, junto com uma área de notificação, para contribuir em ter um controle maior do que está em baixa, e atrelado a isso um envio de notificação também por o email.
                                    O sistema está em desenvolvimento ainda, o qual estou trabalhando na parte de relatórios, mas já conta também com um sistema de login para ter um controle sobre os acessos e atividade executadas dentro do sistema, principalmente na parte de saídas, que vai está diretamente dentro dos relatórios.  </p>
                                    <p><a href="https://github.com/marcelodeus98/Central.Inventory" target="_blank" rel="noopener noreferrer"> <img className="logo-link-github" src={iconGithub} alt="Repositório GITHUB"/></a></p>
                                </div>
                            </div>

                            <div className="project-container-section">
                                <div className="project-container-img">
                                <img className="img-project" src={imgProjectConverter} width="400vmin" height="300vmax"/>
                                </div>
                                <div className="project-container-description">
                                    <h2>Conversor de moedas</h2>
                                    <p>Página simples com HTML5 e CSS3 para conversão de moedas, aplicando a manipulação do DOM com JS.</p>
                                    <p><a href="https://github.com/marcelodeus98/Conversor-de-moedas" target="_blank" rel="noopener noreferrer"> <img className="logo-link-github" src={iconGithub} alt="Repositório GITHUB"/></a></p>
                                </div>
                            </div>
                        </div>            
                    </div>

                    <div className="section-project" id="courses-div">
                            <h1 className="title">Cursos</h1>
                            <div className="project-container">
                                <div className='project-container-section'>
                                    <div class="project-container-img">
                                        <img class="img-project" src={imgCourse1} width="400vmin" height="300vmax"/>
                                    </div>
                                    <div className='project-container-description'>
                                        <h2>Lógica de Programação Essencial</h2>
                                        <p>Lógica de programação é a forma como o desenvolvedor entende a comunicação a fim de programar uma função de um programa. Faz uso de algoritmos, que são sequências de passos bem estabelecidos, como por exemplo, uma receita de bolo.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="project-container">
                                <div className='project-container-section'>
                                    <div class="project-container-img">
                                        <img class="img-project" src={imgCourse2} width="400vmin" height="300vmax"/>
                                    </div>
                                    <div className='project-container-description'>
                                        <h2>Introdução à Programação e Pensamento Computacional</h2>
                                        <p>Curso básico e de introdução, e construção da base para o que é programação, e os principais conceitos para o pensamento computacional, o que é e como usar.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="project-container">
                                <div className='project-container-section'>
                                    <div class="project-container-img">
                                        <img class="img-project" src={imgCourse3} width="400vmin" height="300vmax"/>
                                    </div>
                                    <div className='project-container-description'>
                                        <h2>Introdução ao Javascript</h2>
                                        <p>Curso introdutório a linguagem de porgrama Javascript, a sua sintaxe, principais conceitos e formas de se trabalhar com o mesmo.</p>
                                    </div>
                                </div>

                            <div className="project-container">
                                <div className='project-container-section'>
                                    <div class="project-container-img">
                                        <img class="img-project" src={imgCourse4} width="400vmin" height="300vmax"/>
                                    </div>
                                    <div className='project-container-description'>
                                        <h2>Avanade - Decola Tech</h2>
                                        <p>O Decola Tech Avanade é o programa de Estágio da Avanade no qual os futuros talentos poderão ser contratados através do Bootcamp online com a Digital Innovation One, com mais de 60 horas de duração. Depois do Bootcamp, você passará por um processo seletivo e poderá fazer um estágio na Avanade, uma joint venture da Microsoft e Accenture, em um programa de aceleração criado especialmente para você com certificações Microsoft inclusas e um planejamento de carreira.</p>
                                    </div>
                                </div>
                            </div>

                            </div>
                    </div>

                    <div className='section-project' id="contact-div">
                            <h1 className="title">Contato</h1>
                            <div className="section-contact-itens">
                                <div>
                                    <ion-icon name="logo-github" size="large"></ion-icon>
                                    <a className="link-social" href="https://github.com/marcelodeus98" target="_blank" rel="noopener noreferrer"><p className='name-social'>marcelodeus98 </p></a>
                                </div>
                                <div>
                                    <ion-icon name="logo-linkedin" size="large"></ion-icon>
                                    <a className="link-social" href="https://www.linkedin.com/in/jmarcelodeus/" target="_blank" rel="noopener noreferrer"><p className='name-social'>João Marcelo Deus</p></a>
                                </div>
    
                                <div>
                                    <ion-icon name="logo-instagram" size="large"></ion-icon>
                                    <a className='link-social' href="https://www.instagram.com/jmarcelo_deus/" target="_blank" rel="noopener noreferrer"><p className='name-social'>jmarcelo_deus</p></a>
                                </div>
                            </div>
                    </div>
                </main>
                <footer>
                    <div className='footer-container'>
                        <h3>Developed by João Marcelo Deus</h3>
                    </div>
                </footer>
            </div>
        </div>
         
    )
}
const rootElement = document.getElementById("root")
ReactDOM.render(<Portfolio/>, rootElement)