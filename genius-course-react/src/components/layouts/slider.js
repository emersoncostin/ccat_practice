import React from "react";

import OwlCarousel from 'react-owl-carousel';


class Slider extends React.Component {
  render() {
    return (
      <section id="slide" className="slider-section">
        <OwlCarousel id="slider-item" className="slider-item-details owl-carousel" 
        loop 
        nav 
        smartSpeed={1000}
        items={1} 
        autoplaySpeed={1000}
        autoplayTimeout={9000}
        autoplay={true}
        navText={["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]}>
          <div className="slider-area slider-bg-1 relative-position">
            <div className="slider-text">
              <div className="section-title mb20 headline text-center ">
                <div className="layer-1-1">
                  <span className="subtitle text-uppercase">
                    COGNITIVE APTITUDE TEST PREPARATION
                  </span>
                </div>
                <div className="layer-1-2">
                  <h2>
                    We help you <span>pass</span> the<br /><span> CCAT </span>  of{" "}
                    <span><i>Crossover</i></span>
                  </h2>
                </div>
              </div>
              <div className="layer-1-2">
                <div id="course-btn">
                  <div className="genius-btn  text-center text-uppercase ul-li-block bold-font">
                    <a href="#">
                      KNOW MORE <i className="fas fa-caret-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-area slider-bg-2 relative-position">
            <div className="slider-text">
              <div className="section-title mb20 headline text-center ">
                <div className="layer-1-1">
                  <span className="subtitle text-uppercase">
                    COGNITIVE APTITUDE TEST PREPARATION
                  </span>
                </div>
                <div className="layer-1-2">
                  <h2 className="secoud-title">
                    {" "}
                    Practice with the <span>same</span><br />
                    real <span>Criteria</span> CCAT test  
                  </h2>
                </div>
              </div>
              <div className="layer-1-2">
                <div id="course-btn">
                  <div className="genius-btn  text-center text-uppercase ul-li-block bold-font">
                    <a href="#">
                      SEE OUR PACKAGES <i className="fas fa-caret-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-area slider-bg-3 relative-position">
            <div className="slider-text">
              <div className="section-title mb20 headline text-center ">
              <div className="layer-1-1">
                  <span className="subtitle text-uppercase">
                    COGNITIVE APTITUDE TEST PREPARATION
                  </span>
                </div>
                <div className="layer-1-2">
                  <h2 className="third-slide">
                    {" "}
                    Have access to your<br />{" "}
                    <span>Score</span> after the tests
                  </h2>
                </div>
              </div>
              <div className="layer-1-2">
                <div className="about-btn text-center">
                  <div className="genius-btn text-center text-uppercase ul-li-block bold-font">
                    <a href="#">
                      SEE OUR PACKAGES <i className="fas fa-caret-right" />
                    </a>
                  </div>
                  <div className="genius-btn text-center text-uppercase ul-li-block bold-font">
                    <a href="#">
                      REQUEST A FREE GIFT <i className="fas fa-caret-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </OwlCarousel>
      </section>
    );
  }
}

export default Slider;
