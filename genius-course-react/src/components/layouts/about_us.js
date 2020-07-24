import React from "react";

const WhiteBg = true;

class AboutUs extends React.Component {
  render() {
    return (
      <section id="about-us" className={this.props.WhiteBg === true ? 'about-us-section home-secound home-third' : 'about-us-section'}>
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="about-resigter-form backgroud-style relative-position">
                <div className="register-content">
                  <div className="register-fomr-title text-center">
                    <h3 className="bold-font">
                      <span>Get a</span> Free Gift.
                    </h3>
                    <p>1 FULL VIDEO of a REAL CCAT Test from <i>Crossover</i> + 50 Screenshots of questions</p>
                  </div>
                  <div className="register-form-area">
                    <form
                      className="contact_form"
                      action="#"
                      method="POST"
                      encType="multipart/form-data"
                    >
                      <div className="contact-info">
                        <input
                          className="name"
                          name="name"
                          type="text"
                          placeholder="Your Name."
                        />
                      </div>
                      <div className="contact-info">
                        <input
                          className="nbm"
                          name="nbm"
                          type="text"
                          placeholder="Your Country."
                        />
                      </div>
                      <div className="contact-info">
                        <input
                          className="nbm"
                          name="nbm"
                          type="number"
                          placeholder="Your Age."
                        />
                      </div>
                      <div className="contact-info">
                        <input
                          className="email"
                          name="email"
                          type="email"
                          placeholder="Email Address."
                        />
                      </div>
                     
                      <div className="nws-button text-uppercase text-center white text-capitalize">
                        <button type="submit" value="Submit">
                          SUBMIT REQUEST{" "}
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="register-fomr-title text-center" style={{paddingTop: '20px'}}>
                    <p>We will send you the link to the email registered above</p>
                    <p>We are not affiliate with <i>Crossover for Work</i>. Your data will be secure.</p>
                  </div>
                </div>
              </div>
              <div className="bg-mockup">
                <img src={require('../../assets/img/about/phone.png')} alt="" />
              </div>
            </div>
            {}
            <div className="col-md-7">
              <div className="about-us-text">
                <div className="section-title relative-position mb20 headline text-left ">
                  <span className="subtitle ml42 text-uppercase">
                    A FREE GIFT FOR START
                  </span>
                  <h2>
                    Know the <span>challenge</span> that awaits you.
                    
                  </h2>
                  <p>
                    While another sites charge you for just some recorded videos we give you it for free.<br />
                    The full version of the video bellow shows a real application recorded for you be preapared and know wich kind of question awaits you in the <i>Crossover for Work</i> CCAT.

                  </p>
                </div>
                <div className="about-content-text">
                  <div style={{height: "350px"}}>
                  <p>
                    VIDEO HERE
                  </p>
                  </div>
                  <div className="about-list mb65 ul-li-block ">
                    <ul>
                      <li>50 Questions answered in 15 minutes</li>
                      <li>
                        The video shows a applicant that PASSED with above 35 correct answers
                      </li>
                      <li>
                        For every test the questions are DIFFERENT, but very similar... The only way to succed is practice!
                      </li>

                    </ul>
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

export default AboutUs;
