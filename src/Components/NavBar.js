
// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "./NavBar.css";
// // import { Form, FormControl, Button } from "react-bootstrap";

// // const NavBar = () => {
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();

// //   const handleSearchChange = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   const handleSearchSubmit = (e) => {
// //     e.preventDefault();

// //     // Map search terms to routes
// //     const routes = {
// //       home: "/",
// //       aboutus: "/about",
// //       blog: "/blog",
// //       courses: "/service",
// //       citb: "/citb-courses",
// //     };

// //     const normalizedSearchTerm = searchTerm.trim().toLowerCase();

// //     if (normalizedSearchTerm in routes) {
// //       // Navigate to the mapped route
// //       navigate(routes[normalizedSearchTerm]);
// //     } else if (normalizedSearchTerm) {
// //       // Fallback: Navigate to the SearchResults component with the query
// //       navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
// //     } else {
// //       alert("Please enter a search term.");
// //     }
// //   };

// //   return (
// //     <nav className="navbar">
// //       <div className="navbar-container">
// //         <ul className="navbar-menu">
// //           <li className="navbar-item">
// //             <Link to="/" className="navbar-link">
// //               Home
// //             </Link>
// //           </li>
// //           <li className="navbar-item">
// //             <Link to="/about" className="navbar-link">
// //               About Us
// //             </Link>
// //           </li>
          
// //   <li>
// //   <div className="dropdown">
// //   <a
// //     href="#"
// //     className="navbar-link dropdown-toggle"
// //     id="dropdownMenuButton"
// //     data-bs-toggle="dropdown"
// //     aria-expanded="false"
// //   >
// //     Courses
// //   </a>
// //   <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
// //    <li className="navbar-item">
// //             <div className="dropdown-one">
// //               <div id="link1" className="dItem">
// //                 Courses
// //                 {/* Nested dropdown under Courses */}
// //                 <div className="dropdown-two">
// //                   <div className="dItem">
// //                     <Link to="/citb-courses" className="dropdown-item">
// //                       CITB Courses
// //                     </Link>
// //                     {/* Inside Nested Dropdown */}
// //                     <div className="dropdown-three">
// //                       <Link to="/citb-courses/smsts" className="dItem">
// //                         SMSTS
// //                       </Link>
// //                       <Link to="/citb-courses/sssts" className="dItem">
// //                         SSSTS
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </li>
// //     <li>
// //       <Link to="/courses/another-action" className="dropdown-item">
// //         Data Science
// //       </Link>
// //     </li>
// //     <li>
// //       <Link to="/courses/something-else" className="dropdown-item">
// //         UI/UX Design
// //       </Link>
// //     </li>
// //     <li>
// //       <Link to="/courses/artificial-intelligence" className="dropdown-item">
// //         Artificial Intelligence
// //       </Link>
// //     </li>
// //   </ul>
// // </div>

// // </li>

// //           <li className="navbar-item">
// //             <Link to="/contact" className="navbar-link">
// //               Contact
// //             </Link>
// //           </li>
// //           <li className="navbar-item">
// //             <Link to="/blog" className="navbar-link">
// //               Blog
// //             </Link>
// //           </li>
// //         </ul>
// //         <div className="search-container">
// //           <Form className="d-flex search-form" onSubmit={handleSearchSubmit}>
// //             <FormControl
// //               type="search"
// //               placeholder="Search"
// //               className="search-input"
// //               value={searchTerm}
// //               onChange={handleSearchChange}
// //               aria-label="Search"
// //             />
// //             <Button
// //               variant="outline-success"
// //               type="submit"
// //               className="search-button"
// //             >
// //               Search
// //             </Button>
// //           </Form>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default NavBar;
// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./NavBar.css";
// import { Form, FormControl, Button } from "react-bootstrap";

// const NavBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();

//     // Map search terms to routes
//     const routes = {
//       home: "/",
//       aboutus: "/about",
//       blog: "/blog",
//       courses: "/service",
//       citb: "/citb-courses",
//     };

//     const normalizedSearchTerm = searchTerm.trim().toLowerCase();

//     if (normalizedSearchTerm in routes) {
//       // Navigate to the mapped route
//       navigate(routes[normalizedSearchTerm]);
//     } else if (normalizedSearchTerm) {
//       // Fallback: Navigate to the SearchResults component with the query
//       navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
//     } else {
//       alert("Please enter a search term.");
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <ul className="navbar-menu">
//           <li className="navbar-item">
//             <Link to="/" className="navbar-link">
//               Home
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/about" className="navbar-link">
//               About Us
//             </Link>
//           </li>

//           <li>
//             <div className="dropdown">
//               <a
//                 href="#"
//                 className="navbar-link dropdown-toggle"
//                 id="dropdownMenuButton"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Courses
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                 <li className="navbar-item">
//                   <Link to="/citb-courses" className="dropdown-item">
//                     CITB Courses
//                   </Link>
//                   <div className="nested-links">
//                     <Link to="/citb-courses/smsts" className="dropdown-item">
//                       SMSTS
//                     </Link>
//                     <Link to="/citb-courses/sssts" className="dropdown-item">
//                       SSSTS
//                     </Link>
//                   </div>
//                 </li>
//                 <li>
//                   <Link to="/courses/another-action" className="dropdown-item">
//                     Data Science
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/courses/something-else" className="dropdown-item">
//                     UI/UX Design
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/courses/artificial-intelligence" className="dropdown-item">
//                     Artificial Intelligence
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </li>

//           <li className="navbar-item">
//             <Link to="/contact" className="navbar-link">
//               Contact
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/blog" className="navbar-link">
//               Blog
//             </Link>
//           </li>
//         </ul>
//         <div className="search-container">
//           <Form className="d-flex search-form" onSubmit={handleSearchSubmit}>
//             <FormControl
//               type="search"
//               placeholder="Search"
//               className="search-input"
//               value={searchTerm}
//               onChange={handleSearchChange}
//               aria-label="Search"
//             />
//             <Button
//               variant="outline-success"
//               type="submit"
//               className="search-button"
//             >
//               Search
//             </Button>
//           </Form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { Form, FormControl, Button } from "react-bootstrap";

const NavBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Map search terms to routes
    const routes = {
      home: "/",
      aboutus: "/about",
      blog: "/blog",
      courses: "/service",
      citb: "/citb-courses",
    };

    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    if (normalizedSearchTerm in routes) {
      // Navigate to the mapped route
      navigate(routes[normalizedSearchTerm]);
    } else if (normalizedSearchTerm) {
      // Fallback: Navigate to the SearchResults component with the query
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About Us
            </Link>
          </li>
          
  <li>
  <div className="dropdown">
  <a
    href="#"
    className="navbar-link dropdown-toggle"
    id="dropdownMenuButton"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Courses
  </a>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <li className="navbar-item">
  <div className="dropdown-one">
  <div id="link1" className="dItem">
    <Link to="/citb-courses" className="dropdown-item">
      CITB Courses
    </Link>
    {/* Nested dropdown under Courses */}
    <div className="dropdown-two">
      <div className="dItem">
        <Link to="/citb-courses/smsts" className="dropdown-item">
          SMSTS
        </Link>
      </div>
      <div className="dItem">
        <Link to="/citb-courses/sssts" className="dropdown-item">
          SSSTS
        </Link>
      </div>
    </div>
  </div>
</div>

                
              
          </li>
    <li>
      <Link to="/courses/another-action" className="dropdown-item">
        Data Science
      </Link>
    </li>
    <li>
      <Link to="/courses/something-else" className="dropdown-item">
        UI/UX Design
      </Link>
    </li>
    <li>
      <Link to="/courses/artificial-intelligence" className="dropdown-item">
        Artificial Intelligence
      </Link>
    </li>
  </ul>
</div>

</li>

          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/blog" className="navbar-link">
              Blog
            </Link>
          </li>
        </ul>
        <div className="search-container">
    <Form className="d-flex search-form" onSubmit={handleSearchSubmit}>
      <FormControl
        type="search"
        placeholder="Search"
        className="search-input"
        value={searchTerm}
        onChange={handleSearchChange}
        aria-label="Search"
      />
      <Button
        variant="outline-success"
        type="submit"
        className="search-button"
      >
        Search
      </Button>
    </Form>
  </div>
      </div>
    </nav>
  );
};

export default NavBar;