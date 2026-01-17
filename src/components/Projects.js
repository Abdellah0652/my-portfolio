import { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import proj_1Img1 from "../assets/img/diana/image-1.png";
import proj_1Img2 from "../assets/img/diana/image-2.png";
import proj_1Img3 from "../assets/img/diana/image-3.png";
import proj_1Img4 from "../assets/img/diana/image-4.jfif";
import proj_1Img5 from "../assets/img/diana/image-5.jfif";
import proj_1Img6 from "../assets/img/diana/image-6.jfif";
import proj_1Img7 from "../assets/img/diana/image-7.jfif";
import proj_1Img8 from "../assets/img/diana/image-8.jfif";

import proj_2Img1 from "../assets/img/chatme/image-1.jfif";
import proj_2Img2 from "../assets/img/chatme/image-2.jfif";
import proj_2Img3 from "../assets/img/chatme/image-3.jfif";
import proj_2Img4 from "../assets/img/chatme/image-4.jfif";
import proj_2Img5 from "../assets/img/chatme/image-5.jfif";

import proj_3Img1 from "../assets/img/consulting/image-1.jfif";
import proj_3Img2 from "../assets/img/consulting/image-2.jfif";
import proj_3Img3 from "../assets/img/consulting/image-3.jfif";
import proj_3Img4 from "../assets/img/consulting/image-4.jfif";

import proj_4Img1 from "../assets/img/social-media/image-1.jfif";
import proj_4Img2 from "../assets/img/social-media/image-2.jfif";
import proj_4Img3 from "../assets/img/social-media/image-3.jfif";
import proj_4Img4 from "../assets/img/social-media/image-4.jfif";

import projImg2 from "../assets/img/project-img2.png";
import projImg1 from "../assets/img/project-img2.png";

import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img3.png";
import projImg5 from "../assets/img/project-img1.png";
import projImg6 from "../assets/img/project-img2.png";
import projImg7 from "../assets/img/project-img3.png";
import projImg8 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleImageClick = (project) => {
    setSelectedProject(project);
    setCarouselIndex(0);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  // 4 PROJETS COMPLETS
  const projects = [
    {
      id: 1,
      title: "EcoShop - E-commerce Écologique",
      description: "Plateforme e-commerce spécialisée dans les produits écologiques",
      imgUrl: proj_1Img1,
      images: [proj_1Img1, proj_1Img2, proj_1Img3, proj_1Img4,proj_1Img5,proj_1Img6, proj_1Img7,proj_1Img8],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind"],
      link: "https://ecoshop-demo.com",
      category: "web",
      detailedDescription: "EcoShop est une plateforme e-commerce complète avec gestion des produits, panier utilisateur, système de paiement Stripe intégré, et tableau de bord administrateur. Le projet inclut une architecture microservices et une API RESTful.",
      features: [
        "Système de panier dynamique",
        "Paiement sécurisé Stripe",
        "Tableau de bord admin",
        "Recherche avancée",
        "Gestion des stocks",
        "Notifications en temps réel"
      ],
      status: "Complété",
      duration: "3 mois"
    },
    {
      id: 2,
      title: "FitTrack - Application Fitness",
      description: "Application mobile de suivi d'entraînement et nutrition",
      imgUrl: proj_2Img1,
      images: [proj_2Img1, proj_2Img2, proj_2Img3, proj_2Img4,proj_2Img5],
      technologies: ["React Native", "Firebase", "GraphQL", "Expo", "Redux"],
      link: "https://fittrack-app.com",
      category: "mobile",
      detailedDescription: "FitTrack est une application mobile complète pour le suivi d'entraînement, nutrition et progrès. Elle inclut des plans personnalisés, suivi des calories et intégration avec Apple Health/Google Fit.",
      features: [
        "Suivi d'entraînement personnalisé",
        "Calcul de calories",
        "Synchronisation avec wearables",
        "Graphiques de progression",
        "Communauté sociale",
        "Rapports hebdomadaires"
      ],
      status: "En production",
      duration: "4 mois"
    },
    {
      id: 3,
      title: "FinanceDash - Tableau de Bord",
      description: "Dashboard interactif pour analyse financière",
      imgUrl: proj_3Img1,
      images: [proj_3Img2, proj_3Img2, proj_3Img3, proj_3Img4],
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "Chart.js"],
      link: "https://financedash.demo",
      category: "web",
      detailedDescription: "FinanceDash est un tableau de bord analytique pour la visualisation de données financières avec rapports personnalisés, prédictions et alertes en temps réel.",
      features: [
        "Visualisation de données en temps réel",
        "Rapports personnalisés",
        "Prédictions AI",
        "Export PDF/Excel",
        "Alertes personnalisées",
        "Dashboard multi-utilisateurs"
      ],
      status: "Complété",
      duration: "2.5 mois"
    },
    {
      id: 4,
      title: "TaskFlow - Gestion de Projets",
      description: "Outil collaboratif de gestion de projets",
      imgUrl: proj_4Img4,
      images: [proj_4Img2, proj_4Img1, proj_4Img3, proj_4Img2],
      technologies: ["Angular", "Node.js", "MongoDB", "WebSockets", "Jest"],
      link: "https://taskflow.team",
      category: "web",
      detailedDescription: "TaskFlow est une plateforme de gestion de projets avec tableaux Kanban, chat intégré, gestion des tâches et suivi du temps. Parfait pour les équipes agiles.",
      features: [
        "Tableaux Kanban interactifs",
        "Chat d'équipe en temps réel",
        "Suivi du temps",
        "Attachement de fichiers",
        "Intégration calendrier",
        "Rapports d'équipe"
      ],
      status: "En développement",
      duration: "5 mois"
    }
  ];

  // Filtrage pour les onglets
  const webProjects = projects.filter(project => project.category === "web");
  const mobileProjects = projects.filter(project => project.category === "mobile");

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Découvrez mes projets récents. Chaque projet représente un défi unique et une opportunité d'apprentissage.</p>
                  
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tous les projets ({projects.length})</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Développement Web ({webProjects.length})</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Applications Mobile ({mobileProjects.length})</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project) => (
                            <ProjectCard 
                              key={project.id} 
                              {...project} 
                              onImageClick={() => handleImageClick(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {webProjects.map((project) => (
                            <ProjectCard 
                              key={project.id} 
                              {...project} 
                              onImageClick={() => handleImageClick(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {mobileProjects.map((project) => (
                            <ProjectCard 
                              key={project.id} 
                              {...project} 
                              onImageClick={() => handleImageClick(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modal Lightbox */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal}
        size="xl"
        centered
        className="project-modal"
      >
        {selectedProject && (
          <>
            <Modal.Header closeButton className="modal-header-custom">
              <div className="modal-header-content">
                <Modal.Title>{selectedProject.title}</Modal.Title>
                <div className="project-status">
                  <span className={`status-badge ${selectedProject.status === 'Complété' ? 'completed' : selectedProject.status === 'En production' ? 'production' : 'development'}`}>
                    {selectedProject.status}
                  </span>
                  <span className="project-duration">
                    <i className="fas fa-clock"></i> {selectedProject.duration}
                  </span>
                </div>
              </div>
            </Modal.Header>
            
            <Modal.Body>
              <div className="modal-content-wrapper">
                {/* Carousel grand format */}
                <div className="modal-carousel-container">
                  <Carousel 
                    activeIndex={carouselIndex}
                    onSelect={handleSelect}
                    indicators={true}
                    controls={true}
                    interval={null}
                    className="modal-carousel"
                  >
                    {selectedProject.images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <div className="modal-image-container">
                          <img
                            src={image}
                            alt={`${selectedProject.title} - Vue ${index + 1}`}
                            className="modal-image"
                          />
                        </div>
                        <Carousel.Caption className="modal-caption">
                          <span>Image {index + 1} sur {selectedProject.images.length}</span>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  
                  <div className="modal-carousel-controls">
                    <button 
                      className="carousel-nav-btn prev-btn"
                      onClick={() => handleSelect(carouselIndex > 0 ? carouselIndex - 1 : selectedProject.images.length - 1)}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button 
                      className="carousel-nav-btn next-btn"
                      onClick={() => handleSelect(carouselIndex < selectedProject.images.length - 1 ? carouselIndex + 1 : 0)}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                </div>

                {/* Informations détaillées */}
                <div className="modal-details">
                  <div className="modal-section">
                    <h4>
                      <i className="fas fa-info-circle"></i> Description
                      <button className="section-toggle">
                        <i className="fas fa-chevron-down"></i>
                      </button>
                    </h4>
                    <div className="section-content">
                      <p className="modal-description">
                        {selectedProject.detailedDescription}
                      </p>
                    </div>
                  </div>
                  
                  <div className="modal-section">
                    <h4>
                      <i className="fas fa-code"></i> Technologies
                      <button className="section-toggle">
                        <i className="fas fa-chevron-down"></i>
                      </button>
                    </h4>
                    <div className="section-content">
                      <div className="tech-tags-modal">
                        {selectedProject.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag-modal">
                            <i className="fas fa-check"></i> {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="modal-section">
                    <h4>
                      <i className="fas fa-star"></i> Fonctionnalités
                      <button className="section-toggle">
                        <i className="fas fa-chevron-down"></i>
                      </button>
                    </h4>
                    <div className="section-content">
                      <ul className="features-list">
                        {selectedProject.features.map((feature, idx) => (
                          <li key={idx}>
                            <i className="fas fa-check-circle"></i> {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="modal-actions">
                    {selectedProject.link && selectedProject.link !== "#" && (
                      <a 
                        href={selectedProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-link-btn"
                      >
                        <i className="fas fa-external-link-alt"></i> Voir le projet en ligne
                      </a>
                    )}
                    <button className="modal-demo-btn">
                      <i className="fas fa-play-circle"></i> Voir la démo
                    </button>
                  </div>
                </div>
              </div>
            </Modal.Body>
            
            <Modal.Footer className="modal-footer-custom">
              <div className="project-meta">
                <span>
                  <i className="fas fa-layer-group"></i> {selectedProject.category === "web" ? "Développement Web" : "Mobile"}
                </span>
                <span>
                  <i className="fas fa-images"></i> {selectedProject.images.length} screenshots
                </span>
                <span>
                  <i className="fas fa-tools"></i> {selectedProject.technologies.length} technologies
                </span>
              </div>
              <button className="modal-close-btn" onClick={handleCloseModal}>
                <i className="fas fa-times"></i> Fermer
              </button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      <img className="background-image-right" src={colorSharp2} alt="Background decoration" />
    </section>
  );
};