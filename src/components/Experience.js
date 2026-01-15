import {useState} from "react";
import {
    Container,
    Row,
    Col,
    Tab,
    Nav,
    Button,
    Modal
} from "react-bootstrap";
import {ExperienceCard} from "./ExperienceCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {
    FaFilter,
    FaCalendarAlt,
    FaMapMarkerAlt,
    FaCode,
    FaDatabase,
    FaLaptopCode
} from 'react-icons/fa';

export const Experience = () => {
    const [filter, setFilter] = useState('all');
    const [selectedExperience, setSelectedExperience] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleExperienceClick = (experience) => {
        setSelectedExperience(experience);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedExperience(null);
    };

    const experiences = [
        {
            id: 1,
            company: "EXPANDED PAYMENT INTERNATIONAL (XPI.MA)",
            position: "Junior Software Developer",
            period: "March 2023 - July 2023",
            duration: "4 months",
            location: "Casablanca, Morocco",
            type: "full-time",
            icon: <FaDatabase/>,
            color: "#4A2FBD",
            description: "Worked on database optimization and industrial monitoring applications with a " +
                    "focus on performance and scalability.",
            responsibilities: [
                "Designed and optimized database schemas (PostgreSQL) for industrial performanc" +
                        "e monitoring",
                "Developed complex SQL queries for real-time dashboards and KPI tracking",
                "Migrated data from legacy systems to modern databases (PostgreSQL, TimescaleDB" +
                        ")",
                "Implemented data visualization solutions for industrial analytics",
                "Collaborated with cross-functional teams on data processing workflows"
            ],
            technologies: [
                "PostgreSQL",
                "TimescaleDB",
                "SQL",
                "Data Migration",
                "Data Visualization",
                "Performance Monitoring"
            ],
            achievements: ["Improved query performance by 40% through optimization", "Successfully migrated 50+ client databases", "Reduced data processing time by 30%"]
        }, {
            id: 2,
            company: "CORPS VISION",
            position: "Frontend Developer",
            period: "October 2022 - March 2023",
            duration: "6 months",
            location: "Casablanca, Morocco",
            type: "internship",
            icon: <FaCode/>,
            color: "#AA367C",
            description: "Frontend development for web applications with focus on user experience and pe" +
                    "rformance.",
            responsibilities: [
                "Developed responsive user interfaces using React.js and modern JavaScript", "Collaborated with a team of 5 developers in an agile environment", "Created server monitoring dashboard with real-time updates", "Implemented responsive designs and optimized UX/UI", "Participated in code reviews and CI/CD processes"
            ],
            technologies: [
                "React.js",
                "JavaScript",
                "Node.js",
                "Express",
                "Firebase",
                "CSS3",
                "HTML5",
                "Git"
            ],
            achievements: ["Reduced page load time by 25% through optimization", "Implemented 10+ reusable components", "Achieved 95%+ Lighthouse performance score"]
        }, {
            id: 3,
            company: "MAROC FA PRO",
            position: "Full-Stack Developer",
            period: "May 2021 - July 2021",
            duration: "3 months",
            location: "Fes, Morocco",
            type: "internship",
            icon: <FaLaptopCode/>,
            color: "#27ae60",
            description: "Web application development for automotive dealership management system.",
            responsibilities: [
                "Designed and developed web application for car dealerships using Django", "Integrated Power BI for data visualization and analytics", "Implemented secure user authentication and authorization", "Developed RESTful APIs for mobile and web clients", "Deployed and maintained application in production environment"
            ],
            technologies: [
                "Django",
                "Python",
                "PostgreSQL",
                "Power BI",
                "REST API",
                "Docker",
                "AWS"
            ],
            achievements: ["Successfully launched production application", "Improved data processing efficiency by 35%", "Implemented comprehensive testing suite"]
        }, {
            id: 4,
            company: "ATLASS SKILLS",
            position: "Application Developer",
            period: "September 2019 - December 2020",
            duration: "16 months",
            location: "Sefrou, Morocco",
            type: "internship",
            icon: <FaLaptopCode/>,
            color: "#3498db",
            description: "Desktop application development and software engineering practices.",
            responsibilities: [
                "Assisted in developing desktop applications using C# and .NET", "Participated in requirement analysis and system design", "Performed software testing, debugging and quality assurance", "Documented development processes and created user guides", "Collaborated with senior developers on project features"
            ],
            technologies: [
                "C#",
                ".NET",
                "SQL Server",
                "Windows Forms",
                "Software Testing",
                "Git",
                "Azure DevOps"
            ],
            achievements: ["Completed 3 major application modules", "Reduced bug reports by 40% through improved testing", "Created comprehensive documentation"]
        }
    ];

    const filteredExperiences = filter === 'all'
        ? experiences
        : experiences.filter(exp => exp.type === filter);

    const experienceStats = {
        total: experiences.length,
        fullTime: experiences
            .filter(exp => exp.type === 'full-time')
            .length,
        internships: experiences
            .filter(exp => exp.type === 'internship')
            .length,
        totalDuration: experiences.reduce((acc, exp) => {
            const months = parseInt(exp.duration);
            return acc + (
                isNaN(months)
                    ? 0
                    : months
            );
        }, 0)
    };

    return (
        // Experience.js - Utilisez ces noms de classe
        <div className="experience-section" id="experience">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {
                                ({isVisible}) => (
                                    <div
                                        className={isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""}>
                                        <div className="exp-header-section text-center mb-5">
                                            <h2 className="exp-section-title">
                                                <span className="exp-title-text">Professional Experience</span>
                                                <span className="exp-title-line"></span>
                                            </h2>
                                            <p className="exp-section-subtitle">
                                                My journey through software development roles, gaining expertise across
                                                different technologies and industries.
                                            </p>

                                            {/* Stats Bar */}
                                            <div className="exp-stats-bar mb-4">
                                                <div className="exp-stats-container">
                                                    {/* ... stats items ... */}
                                                </div>
                                            </div>

                                            {/* Filter Buttons */}
                                            <div className="exp-filter-buttons mb-5">
                                                {/* ... filter buttons ... */}
                                            </div>
                                        </div>

                                        {/* Experience Cards */}
                                        <div className="exp-cards-container">
                                            <Row className="g-4">
                                                {
                                                    filteredExperiences.map((experience) => (
                                                        <Col xs={12} key={experience.id}>
                                                            <ExperienceCard
                                                                {...experience}
                                                                onClick={() => handleExperienceClick(experience)}/>
                                                        </Col>
                                                    ))
                                                }
                                            </Row>
                                        </div>
                                    </div>
                                )
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};