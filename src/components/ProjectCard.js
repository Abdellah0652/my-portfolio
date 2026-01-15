import { useState } from "react";
import { Col, Carousel } from "react-bootstrap";
import './Projects.css';

export const ProjectCard = ({ 
  title, 
  description, 
  imgUrl, 
  images, 
  technologies, 
  link, 
  onImageClick 
}) => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showAllTech, setShowAllTech] = useState(false);
  const projectImages = images && images.length > 0 ? images : [imgUrl];

  const handleSelect = (selectedIndex) => {
    setCarouselIndex(selectedIndex);
  };

  const handleImageClick = () => {
    if (onImageClick) {
      onImageClick();
    }
  };

  const toggleTech = (e) => {
    e.stopPropagation();
    setShowAllTech(!showAllTech);
  };

  // Limiter les technologies affichées à 3
  const displayedTech = showAllTech ? technologies : technologies.slice(0, 3);
  const hasMoreTech = technologies.length > 3;

  return (
    <Col xs={12} sm={6} md={6} lg={3} className="project-col">
      <div className="proj-imgbx">
        {/* Carousel avec zone cliquable */}
        <div className="project-carousel-wrapper" onClick={handleImageClick}>
          <Carousel 
            activeIndex={carouselIndex} 
            onSelect={handleSelect}
            indicators={false}
            controls={false}
            interval={null}
            className="project-carousel"
          >
            {projectImages.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="carousel-image-container">
                  <img 
                    src={image} 
                    alt={`${title} - Vue ${index + 1}`}
                    className="carousel-image clickable"
                  />
                  <div className="click-overlay">
                    <span className="zoom-icon">
                      <i className="fas fa-search-plus"></i>
                    </span>
                    <span className="click-text">Cliquer pour agrandir</span>
                  </div>
                </div>
                <div className="image-counter-label">
                  {index + 1}/{projectImages.length}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
          
          {/* Bouton pour ouvrir le modal */}
          <button className="expand-btn" onClick={handleImageClick}>
            <i className="fas fa-expand"></i>
          </button>
        </div>

        <div className="proj-txtx">
          <h4>{title}</h4>
          <span className="description">{description}</span>
          
          {technologies && technologies.length > 0 && (
            <div className="technologies-container">
              <div className={`technologies-tags ${showAllTech ? 'expanded' : ''}`}>
                {displayedTech.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              {hasMoreTech && (
                <button 
                  className={`tech-toggle-btn ${showAllTech ? 'expanded' : ''}`}
                  onClick={toggleTech}
                >
                  {showAllTech ? 'Voir moins' : `+${technologies.length - 3} plus`}
                  <i className="fas fa-chevron-down"></i>
                </button>
              )}
            </div>
          )}
          
          <div className="project-footer">
            <button className="view-details-btn" onClick={handleImageClick}>
              <i className="fas fa-eye"></i> Voir les détails
            </button>
            
            {link && link !== "#" && (
              <a 
                href={link} 
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};