import data from "../assets/img/data.png";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },
        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3
        },
        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },
        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Full-stack web developer with strong experience in front-end development
                                using React.js, JavaScript, HTML5, CSS3, and Bootstrap, and back-end development
                                with Node.js and Django (Django REST Framework). Skilled in working with
                                relational and NoSQL databases such as PostgreSQL, MongoDB, Firebase, SQLite,
                                and Oracle. Familiar with modern development tools including Git/GitHub, Heroku,
                                web scraping (BeautifulSoup), and data analysis using Power BI and Excel..</p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                autoPlay="autoPlay"
                                autoPlaySpeed={2000}
                                transitionDuration={1000}
                                arrows={false}
                                keyBoardControl={true}
                                pauseOnHover={true}
                                draggable={true}
                                className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={data} alt="Image"/>
                                    <h5>React.js, JavaScript, HTML5, CSS3, Bootstrap
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Node.js, Django, Python (Django REST Framework)
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                    <h5>PostgreSQL, Firebase, MongoDB, SQLite,Oracle
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={data} alt="Image"/>
                                    <h5>Git/GitHub, Heroku, Web Scraping (BeautifulSoup)
                                    </h5>
                                </div>
                                <div className="item">
                                    <img src={data} alt="Image"/>
                                    <h5>Power BI,Excel

                                    </h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image"/>
        </section>
    )
}
