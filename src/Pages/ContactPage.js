import React from "react";
import "../Css/ContactPage.css";
const ContactPage = () => {
  return (
    <div>
 {/* Header Image Section */}
 <div className="header-image">
        <img src="images/IMG_4255.png" alt="Contact Header" />
      </div>
  <div className="wrapper">
    {/* Contact Start */}
    <div className="contact wow fadeInUp">
      <div className="container">
        <div className="section-header text-center">
          <p>Get In Touch</p>
          <h2>For Any Query</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="contact-info">
              <div className="contact-item">
                <i className="flaticon-address" />
                <div className="contact-text">
                  <h2>Location</h2>
                  <p>123 Street, New York, USA</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="flaticon-call" />
                <div className="contact-text">
                  <h2>Phone</h2>
                  <p>+012 345 67890</p>
                </div>
              </div>
              <div className="contact-item">
                <i className="flaticon-send-mail" />
                <div className="contact-text">
                  <h2>Email</h2>
                  <p>info@example.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-form">
              <div id="success" />
              <form name="sentMessage" id="contactForm" noValidate="novalidate">
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                  />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                    defaultValue={""}
                  />
                  <p className="help-block text-danger" />
                </div>
                <div>
                  <button className="btn" type="submit" id="sendMessageButton">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Contact End */}
    {/* Footer Start */}
  <div className="footer wow fadeIn" data-wow-delay="0.3s">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="footer-contact">
            <h2>Office Contact</h2>
            <p>
              <i className="fa fa-map-marker-alt" />
              G01, Unit 3, Pure Life, 399 Uxbridge Road, Southall, Middlesex, UB13 EJ
            </p>
            <p>
              <i className="fa fa-phone-alt" />
              Toll Free: +44 800 644 6899
            </p>
            <p>
              <i className="fa fa-phone-alt" />
              +44 7586954652
            </p>
            <p>
              <i className="fa fa-envelope" />
              support@learningconnect.co.uk
            </p>
            <div className="footer-social">
              <a href="">
                <i className="fab fa-twitter" />
              </a>
              <a href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="">
                <i className="fab fa-youtube" />
              </a>
              <a href="">
                <i className="fab fa-instagram" />
              </a>
              <a href="">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="footer-link">
            <h2>Services Areas</h2>
            <a href="">SSSTS</a>
            <a href="">SMSTS</a>
            <a href="">NVQ</a>
            {/* <a href="">Interior Design</a>
            <a href="">Painting</a> */}
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="footer-link">
            <h2>Useful Pages</h2>
            <a href="">About Us</a>
            <a href="">Contact Us</a>
            <a href="">Courses</a>
            <a href="">Blog</a>
            {/* <a href="">Testimonial</a> */}
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="newsletter">
            {/* <h2>Newsletter</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
              Curabitur facilisis ornare velit non vulpu
            </p> */}
            <div className="form">
              <input className="form-control" placeholder="Email here" />
              <button className="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container footer-menu">
      <div className="f-menu">
        <a href="">Terms of use</a>
        <a href="">Privacy policy</a>
        <a href="">Cookies</a>
        <a href="">Help</a>
        <a href="">FQAs</a>
      </div>
    </div>
    <div className="container copyright">
      <div className="row">
        <div className="col-md-6">
          <p>
            © <a href="#">Your Site Name</a>, All Right Reserved.
          </p>
        </div>
        <div className="col-md-6">
          <p>
            Designed By <a href="#"></a>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
    
  </div>
  
    </div>
  );
};

export default ContactPage;
