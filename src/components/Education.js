import { Container, Row, Col } from "react-bootstrap";
import { EducationCard } from "./EducationCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {

  const educations = [
    {
      id: 1,
      institution: "Wisdom School",
      degree: "German Course (B2 Level)",
      period: "2024 - Present",
      location: "Fes, Morocco",
      description: "Intensive German language course focused on achieving B2 proficiency level for professional and academic purposes.",
      achievements: [
        "Currently enrolled in B2 level German course",
        "Focus on professional communication and technical vocabulary",
        "Preparation for international work opportunities"
      ],
      field: "Language Studies",
      type: "Language Course"
    },
    {
      id: 2,
      institution: "Wisdom School",
      degree: "English Course",
      period: "2024 - Present",
      location: "Fes, Morocco",
      description: "Advanced English language course to enhance professional communication skills and technical vocabulary.",
      achievements: [
        "Business English communication",
        "Technical writing skills",
        "Presentation and negotiation skills"
      ],
      field: "Language Studies",
      type: "Language Course"
    },
    {
      id: 3,
      institution: "Faculty of Legal, Economic and Social Sciences",
      degree: "Bachelor's in Applied Computer Science for Finance",
      period: "January - June 2022",
      location: "Fes, Morocco",
      description: "Specialized program focusing on the application of computer science in financial and economic contexts.",
      achievements: [
        "Financial data analysis and modeling",
        "Database management for financial systems",
        "Software development for financial applications",
        "Risk assessment algorithms"
      ],
      field: "Computer Science & Finance",
      type: "Bachelor's Degree"
    },
    {
      id: 4,
      institution: "Higher School of Technology",
      degree: "Diploma in Decision-Oriented Computer Science",
      period: "2018 - 2021",
      location: "Fes, Morocco",
      description: "Comprehensive program focusing on computer science applications for business decision-making and data analysis.",
      achievements: [
        "Data structures and algorithms",
        "Database management systems",
        "Software engineering principles",
        "Business intelligence and analytics",
        "Project management methodologies"
      ],
      field: "Computer Science",
      type: "Diploma"
    },
    {
      id: 5,
      institution: "Lycée Mohammed 6",
      degree: "Baccalaureate in Physical Sciences",
      period: "2017 - 2018",
      location: "Imouzzer Kandar, Morocco",
      description: "Scientific baccalaureate with focus on mathematics and physical sciences, laying foundation for technical education.",
      achievements: [
        "Advanced mathematics and physics",
        "Scientific research methodology",
        "Problem-solving and analytical thinking",
        "Laboratory techniques and experiments"
      ],
      field: "Physical Sciences",
      type: "High School Diploma"
    }
  ];

  return (
    <section className="education" id="education">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Education & Training</h2>
                  <p>My academic background and continuous learning journey in technology and languages.</p>
                  
                  <Row className="education-timeline">
                    {educations.map((education) => (
                      <EducationCard key={education.id} {...education} />
                    ))}
                  </Row>
                  
                  <div className="education-summary mt-5">
                    <h4>Continuous Learning</h4>
                    <p>In addition to formal education, I continuously update my skills through:</p>
                    <ul className="learning-list">
                      <li>Online courses on platforms like Coursera and Udemy</li>
                      <li>Technical workshops and webinars</li>
                      <li>Open source contributions</li>
                      <li>Technical reading and research</li>
                      <li>Participation in developer communities</li>
                    </ul>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background decoration"></img>
    </section>
  );
};