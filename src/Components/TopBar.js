// import React from "react";
// import "./TopBar.css";

// const TopBar = () => {
//   return (
//     <div className="top-bar">
//       <div className="container-fluid">
//         <div className="row align-items-center justify-content-between">
//           {/* Logo Section */}
//           <div className="col-lg-3 col-md-4 col-12">
//             <div className="logo">
//               <a href="/">
//                 <h1> Construction Courses</h1>
//               </a>
//             </div>
//           </div>

//           {/* Top Bar Info Section */}
//           <div className="col-lg-9 col-md-8 col-12">
//             <div className="row justify-content-between">
//               {/* Opening Hour */}
//               <div className="col-lg-4 col-md-4 col-12">
//                 <div className="top-bar-item d-flex align-items-center">
//                   <div className="top-bar-icon">
//                     <i className="flaticon-calendar"></i>
//                   </div>
//                   <div className="top-bar-text">
//                     <h3>Opening Hour</h3>
//                     <p>Mon - Fri, 8:00 - 9:00</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Call Us */}
//               <div className="col-lg-4 col-md-4 col-12">
//                 <div className="top-bar-item d-flex align-items-center">
//                   <div className="top-bar-icon">
//                     <i className="flaticon-call"></i>
//                   </div>
//                   <div className="top-bar-text">
//                     <h3>Call Us</h3>
//                     <p>+012 345 6789</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Email Us */}
//               <div className="col-lg-4 col-md-4 col-12">
//                 <div className="top-bar-item d-flex align-items-center">
//                   <div className="top-bar-icon">
//                     <i className="flaticon-send-mail"></i>
//                   </div>
//                   <div className="top-bar-text">
//                     <h3>Email Us</h3>
//                     <p>info@example.com</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;


import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      {/* Logo Section */}
      <div className="logo-container">
        <img
          src="images/logo1.webp" // Update the logo path as required
          alt="Logo"
          className="top-bar-logo"
        />
      </div>

      {/* Title Section */}
      <div className="logo">
        <h1>Construction Courses</h1>
      </div>

      {/* Sign In / Sign Up Section */}
      <div className="auth-container">
        <a href="/signin" className="auth-link">Log In</a>
        <a href="/signup" className="auth-link">Sign Up</a>
      </div>
    </div>
  );
};

export default TopBar;
