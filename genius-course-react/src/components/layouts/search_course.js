import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";


const Style = true;

class SearchCourse extends React.Component {
  
  render() {
    return (
      <section id="search-course" className={this.props.Style !== true ? ('search-course-section') : ('search-course-section search-course-secound')}>
        <div className="container">
          {this.props.Style !== true ? (
            <div>
              <div className="section-title mb20 headline text-center ">
                <span className="subtitle text-uppercase">PRACTICE UNTIL YOU SUCCED</span>
                <h2>
                  Feel <span>confident</span> to pass and boost your career.
              </h2>
              </div>
             
              <div className="search-course mb30 relative-position" style={{paddingTop: "50px", paddingBottom: "130px", textAlign: "center"}}>
                 <img src={require('../../assets/img/about/welcome_to_crossover.jpg')} alt="Welcome to Crossover" style={{maxWidth: "1000px", width: "100%"}} />

              </div>
            </div>
          )
            :
            ''
          }

                
          <div className="search-counter-up">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="counter-icon-number text-center justify-content-center">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-graduation-hat" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={184} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    <span>+</span>
                    <p>Registrations</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="counter-icon-number text-center justify-content-center">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-book" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={489} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>+</span>
                    <p>Tests Taken</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="counter-icon-number text-center justify-content-center">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-favorites-button" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={276} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>+</span>
                    <p>Scores Above 35</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default SearchCourse;
