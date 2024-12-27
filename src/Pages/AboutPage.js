import React from "react";
import "../Css/AboutPage.css"; // Ensure this file matches the CSS provided

const AboutPage = () => {
  return (
    
      <div className="about wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
        <div className="row align-items-center">
            {/* Content Section */}
           {/* Content Section */}
<div className="content-section">
  {/* Left Side: Text Section */}
  <div className="text-section">
    <div className="text-image-container">
      {/* Image above the text */}
      <img
        src="images/IMG_4254.png" // Replace with the actual image path
        alt="Training Illustration"
        className="text-image"
      />
      <div className="section-header">
        <h1>Welcome to Online Construction Courses</h1>
        <h2>Best Training Provider</h2>
      </div>
      <div className="about-text">
        <p>
          At Online Construction Courses, we take pride in delivering an outstanding training experience, supported by over three thousand 5-star reviews on Trustpilot.
        </p>
        <p>
          Looking to enhance your skills, expand your knowledge, or prepare for a new role? Whether you’re aiming for career growth or a complete career change, Online Construction Courses offers the training you need to succeed today!
        </p>
        <p>
          If your company has specific training requirements, we provide tailored courses and packages to meet your needs.
        </p>
      </div>
    </div>
  </div>

  {/* Right Side: Form Section */}
  <div className="form-section">
    <div className="form-container">
      <h2>Enquire Now</h2>
      <form className="enquiry-form">
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" required />
        </div>
        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        {/* Date and Time Input */}
        <div className="form-group">
          <label htmlFor="date-time">Select a Date and Time:</label>
          <input
            type="datetime-local"
            id="date-time"
            required
            min="2024-12-21T00:00"
            max="2025-01-25T23:59"
          />
          <small>(GMT+05:30) Asia - Calcutta</small>
        </div>
        {/* Phone Number Input */}
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" placeholder="Enter your phone number" required />
        </div>
        {/* Nature of Enquiry Select */}
        <div className="form-group">
          <label htmlFor="enquiry">Nature of Enquiry:</label>
          <select id="enquiry">
            <option value="">Select an option</option>
            <option value="course">Course Details</option>
            <option value="pricing">Pricing</option>
            <option value="other">Other</option>
          </select>
        </div>
        {/* Questions Textarea */}
        <div className="form-group">
          <label htmlFor="questions">Do You Have Any Questions?</label>
          <textarea id="questions" placeholder="Type your questions here"></textarea>
        </div>
        {/* Submit Button */}
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  </div>
</div>


          </div>
        </div>
     
               {/* FAQs Start */}
  <div className="faqs">
    <div className="container">
      <div className="section-header text-center">
        <h1>Frequently Asked Question</h1>
        <h2>You May Ask</h2>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div id="accordion-1">
            <div className="card wow fadeInLeft" data-wow-delay="0.1s">
              <div className="card-header">
                <a
                  className="card-link collapsed"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                 What is SSSTS?
                </a>
              </div>
              <div
                id="collapseOne"
                className="collapse"
                data-parent="#accordion-1"
              >
                <div className="card-body">
                SSSTS stands for Site Supervisor Safety Training Scheme. 
                It is a CITB-accredited course for supervisors in the construction industry, 
                focusing on health and safety practices.
                </div>
              </div>
            </div>
            <div className="card wow fadeInLeft" data-wow-delay="0.2s">
              <div className="card-header">
                <a
                  className="card-link collapsed"
                  data-toggle="collapse"
                  href="#collapseTwo"
                >
                  Can I take the SSSTS course online?
                </a>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                data-parent="#accordion-1"
              >
                <div className="card-body">
                Yes, many providers offer SSSTS training online, allowing flexible learning options.
                </div>
              </div>
            </div>
            <div className="card wow fadeInLeft" data-wow-delay="0.3s">
              <div className="card-header">
                <a
                  className="card-link collapsed"
                  data-toggle="collapse"
                  href="#collapseThree"
                >
                  Are there SSSTS weekend courses?
                </a>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                data-parent="#accordion-1"
              >
                <div className="card-body">
                Yes, SSSTS weekend courses are available for those with weekday commitments.
                </div>
              </div>
            </div>
            <div className="card wow fadeInLeft" data-wow-delay="0.4s">
              <div className="card-header">
                <a
                  className="card-link collapsed"
                  data-toggle="collapse"
                  href="#collapseFour"
                >
                  What does the SSSTS course cover?
                </a>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                data-parent="#accordion-1"
              >
                <div className="card-body">
                It includes
	,Health and safety legislation
	,Risk assessments,
	Supervisory responsibilities and
	Accident prevention.
                </div>
              </div>
            </div>
            <div className="card wow fadeInLeft" data-wow-delay="0.5s">
              <div className="card-header">
                <a
                  className="card-link collapsed"
                  data-toggle="collapse"
                  href="#collapseFive"
                >
                 What is the cost of the SSSTS course?
                </a>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                data-parent="#accordion-1"
              >
                <div className="card-body">
                Prices vary but typically range from £250 to £400, depending on the provider and format.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div id="accordion-2">
            <div className="card wow fadeInRight" data-wow-delay="0.1s">
              <div className="card-header">
                <a
                  className="card-link collapsed"
                  data-toggle="collapse"
                  href="#collapseSix"
                >
                  What is SMSTS?
                </a>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                data-parent="#accordion-2"
              >
                <div className="card-body">
                SMSTS is a training course for construction site managers, covering health and safety, risk management, and compliance.
                </div>
              </div>
            </div>
            <div className="card wow fadeInRight" data-wow-delay="0.2s">
              <div className="card-header">
                <a
                  className="card-link collapsed"
                  data-toggle="collapse"
                  href="#collapseSeven"
                >
                  Can I take SMSTS training online?
                </a>
              </div>
              <div
                id="collapseSeven"
                className="collapse"
                data-parent="#accordion-2"
              >
                <div className="card-body">
                Yes, many providers offer online SMSTS courses.
                </div>
              </div>
            </div>
            <div className="card wow fadeInRight" data-wow-delay="0.3s">
              <div className="card-header">
                <a
                  className="card-link collapsed"
                  data-toggle="collapse"
                  href="#collapseEight"
                >
                  Are there SMSTS weekend courses?
                </a>
              </div>
              <div
                id="collapseEight"
                className="collapse"
                data-parent="#accordion-2"
              >
                <div className="card-body">
                Yes, weekend courses are available for those with busy schedules.
                </div>
              </div>
            </div>
            <div className="card wow fadeInRight" data-wow-delay="0.4s">
              <div className="card-header">
                <a
                  className="card-link collapsed"
                  data-toggle="collapse"
                  href="#collapseNine"
                >
                  What does the course cover?
                </a>
              </div>
              <div
                id="collapseNine"
                className="collapse"
                data-parent="#accordion-2"
              >
                <div className="card-body">
                It includes health and safety laws, risk assessments, accident prevention, and site management.
                </div>
              </div>
            </div>
            <div className="card wow fadeInRight" data-wow-delay="0.5s">
              <div className="card-header">
                <a
                  className="card-link collapsed"
                  data-toggle="collapse"
                  href="#collapseTen"
                >
                  What is the cost of the course?
                </a>
              </div>
              <div
                id="collapseTen"
                className="collapse"
                data-parent="#accordion-2"
              >
                <div className="card-body">
                Costs range from £400 to £600, depending on the provider.
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* FAQs End */}

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
                <i className="fab fa-facebook-f" />
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
            Designed By <a href="https://github.com/Bhaskar517-ux">♦♜  Ｂℍค𝐒ķ𝐚ｒ  ✌☺ </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
    </div>
      
  );
};

export default AboutPage;
