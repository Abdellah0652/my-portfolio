import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Language = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="languages">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Languages</h2>

              <p>
                Multilingual professional with strong communication skills.
                Native in Tamazight and Arabic, fluent in English and French,
                and proficient in German, enabling effective collaboration in
                international environments.
              </p>

              <Carousel
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={4000}
                transitionDuration={2000}
                arrows={false}
                keyBoardControl
                pauseOnHover
                draggable
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter3} alt="Tamazight" />
                  <h5>Tamazight (Native)</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Arabic" />
                  <h5>Arabic (Native)</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="English" />
                  <h5>English (Intermediate)</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="French" />
                  <h5>French (Intermediate)</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="German" />
                  <h5>German (Intermediate)</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      <img
        className="background-image-left"
        src={colorSharp}
        alt="Background"
      />
    </section>
  );
};
