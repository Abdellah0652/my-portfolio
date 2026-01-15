import { Col } from "react-bootstrap";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

export const ExperienceCard = ({ 
  company, 
  position, 
  period, 
  duration,
  location, 
  type,
  description,
  responsibilities,
  technologies,
  icon,
  color,
  onClick
}) => {
  const getTypeBadgeClass = (type) => {
    switch(type) {
      case 'full-time': return 'badge-full-time';
      case 'internship': return 'badge-internship';
      default: return 'badge-other';
    }
  };

  return (
    <Col xs={12}>
      <div className="experience-timeline-card" onClick={onClick}>
        <div className="timeline-marker" style={{ backgroundColor: color }}>
          <div className="marker-icon">{icon}</div>
        </div>
        
        <div className="card-content">
          <div className="card-header">
            <div className="card-title-section">
              <h3 className="card-title">{position}</h3>
              <h4 className="card-subtitle">{company}</h4>
            </div>
            
            <div className="card-meta">
              <div className="meta-items">
                <div className="meta-item">
                  <FaCalendarAlt className="meta-icon" />
                  <span className="meta-text">{period}</span>
                  <span className="meta-duration">({duration})</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt className="meta-icon" />
                  <span className="meta-text">{location}</span>
                </div>
                <div className={`type-badge ${getTypeBadgeClass(type)}`}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-body">
            <p className="card-description">{description}</p>
            
            <div className="preview-section">
              <div className="preview-responsibilities">
                <h5 className="preview-title">Main Responsibilities</h5>
                <ul className="preview-list">
                  {responsibilities.slice(0, 2).map((resp, index) => (
                    <li key={index} className="preview-item">
                      <span className="bullet">•</span>
                      <span className="preview-text">{resp}</span>
                    </li>
                  ))}
                  {responsibilities.length > 2 && (
                    <li className="preview-item">
                      <span className="bullet">+</span>
                      <span className="preview-text">
                        {responsibilities.length - 2} more responsibilities
                      </span>
                    </li>
                  )}
                </ul>
              </div>
              
              <div className="preview-technologies">
                <h5 className="preview-title">Technologies</h5>
                <div className="tech-preview">
                  {technologies.slice(0, 5).map((tech, index) => (
                    <span key={index} className="tech-preview-tag" style={{ borderColor: color }}>
                      {tech}
                    </span>
                  ))}
                  {technologies.length > 5 && (
                    <span className="tech-preview-tag more-tag" style={{ borderColor: color }}>
                      +{technologies.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="card-footer">
            <button className="view-details-btn">
              <span>View Full Details</span>
              <FaArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};