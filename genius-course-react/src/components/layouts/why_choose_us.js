import React from "react";

import OwlCarousel from 'react-owl-carousel';


const service_options = {
  margin: 85,
  responsiveClass: true,
  nav: false,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,

    }
  },
};


const testi_options = {
  margin: 85,
  responsiveClass: true,
  nav: false,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 2,

    }
  },
};


class WhyChooseUs extends React.Component {
  render() {
    return (
      <section id="why-choose-us" className="why-choose-us-section">
        <div className="jarallax  backgroud-style">
          <div className="container">
            <div className="section-title mb20 headline text-center ">
              <span className="subtitle text-uppercase">OUR ADVANTAGES</span>
              <h2>
                Reason why choose <span>CCAT | PRACTICE</span>
              </h2>
            </div>
            <OwlCarousel
              {...service_options}
              id="service-slide-item"
              className="service-slide owl-carousel"
            >
              <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Practice how much you need and want.</h3>
                  <p>
                    You will be able to practice everywhere, until you feel prepared for the real challenge
                  </p>
                </div>
              </div>
              <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-clipboard-with-pencil" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Choose how much you want to invest.</h3>
                  <p>
                    You can start investing only U$ 5.00 to know what awaits you. We are fully transparent
                  </p>
                </div>
              </div>
              <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-list" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Practice with the SAME test from <i>Crossover</i>.</h3>
                  <p>
                    We offer not only a generic CCAT, we offer the CCAT from Criteria, the same provider from <i>Crossover for Work</i>
                  </p>
                </div>
              </div>
              <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Memorize the questions.</h3>
                  <p>
                      For example if you are not a English native speaker use the test to memorize the harsh English questions and garantee your score.
                  </p>
                </div>
              </div>
              <div className="service-text-icon">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-clipboard-with-pencil" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Know your Score after the test.</h3>
                  <p>
                    You will know your score RIGHT AFTER you finish your practice tests. Like that you will know when you are prepared and when your are not.
                  </p>
                </div>
              </div>
              <div className="service-text-icon">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-list" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Pay with security.</h3>
                  <p>
                    We use Stripe and Paypal as secure payment gateways. You will provide your credit card information inside their platform, we do not have access to any of these data.
                  </p>
                </div>
              </div>

            </OwlCarousel>

            <div className="testimonial-slide">
              <div className="section-title-2 mb65 headline text-left ">
                <h2>
                  Students <span>Testimonial.</span>
                </h2>
              </div>
              <OwlCarousel
                id="testimonial-slide-item"
                className="testimonial-slide-area owl-carousel"
                {...testi_options}
              >
                <div className="student-qoute ">
                  <p>
                    “This was our first time lorem ipsum and we{" "}
                    <b> were very pleased with the whole experience</b>. Your
                    price was lower than other companies. Our experience was
                    good from start to finish, so we’ll be back in the future
                    lorem ipsum diamet.”
                  </p>
                  <div className="student-name-designation">
                    <span className="st-name bold-font">Robertho Garcia </span>
                    <span className="st-designation">L1 Custommer Support Agent</span>
                  </div>
                </div>
                <div className="student-qoute ">
                  <p>
                    “This was our first time lorem ipsum and we{" "}
                    <b> were very pleased with the whole experience</b>. Your
                    price was lower than other companies. Our experience was
                    good from start to finish, so we’ll be back in the future
                    lorem ipsum diamet.”
                  </p>
                  <div className="student-name-designation">
                    <span className="st-name bold-font">Robertho Garcia </span>
                    <span className="st-designation">QA Manual Tester</span>
                  </div>
                </div>
                
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
