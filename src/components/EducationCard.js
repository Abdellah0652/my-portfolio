import { Col } from "react-bootstrap";

export const EducationCard = ({ 
  institution, 
  degree, 
  period, 
  location, 
  description,
  achievements,
  field,
  type
}) => {
  return (
    <Col xs={12} className="education-col mb-4">
      <div className="education-card">
        <div className="education-header">
          <div className="education-icon">
            {type.includes('Bachelor') || type.includes('Diploma') ? (
              <i className="fas fa-graduation-cap"></i>
            ) : type.includes('Language') ? (
              <i className="fas fa-language"></i>
            ) : (
              <i className="fas fa-school"></i>
            )}
          </div>
          <div className="education-content">
            <h4>{degree}</h4>
            <h5>{institution}</h5>
            <div className="education-meta">
              <span className="period">
                <i className="fas fa-calendar-alt"></i> {period}
              </span>
              <span className="location">
                <i className="fas fa-map-marker-alt"></i> {location}
              </span>
              <span className={`education-type ${type.toLowerCase()}`}>
                {type}
              </span>
            </div>
          </div>
        </div>
        
        <div className="education-body">
          <p className="description">{description}</p>
          
          <div className="achievements">
            <h6>Key Achievements & Skills:</h6>
            <ul>
              {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          
          <div className="field-of-study">
            <span className="field-tag">
              <i className="fas fa-book"></i> {field}
            </span>
          </div>
        </div>
        
        <div className="education-footer">
          <div className="status-badge">
            {period.includes('Present') ? (
              <span className="in-progress">
                <i className="fas fa-spinner"></i> In Progress
              </span>
            ) : (
              <span className="completed">
                <i className="fas fa-check-circle"></i> Completed
              </span>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};