// import React from "react";
// import { useLocation } from "react-router-dom";

// const SearchResults = () => {
//   const query = new URLSearchParams(useLocation().search)
//     .get("query")
//     ?.toLowerCase();

//   // Example data for each page
//   const data = {
//     home: "Welcome to the Home page. This is the main landing area.",
//     aboutus: "About Us: Learn more about our mission, vision, and team.",
//     blog: "Blog: Explore our latest posts, news, and updates.",
//     courses: "Courses: Browse our online and offline course offerings.",
//   };

//   // Match the query to the data
//   const result = data[query];

//   return (
//     <div>
//       <h1>Search Results</h1>
//       {result ? <p>{result}</p> : <p>No results found for: {query}</p>}
//     </div>
//   );
// };

// export default SearchResults;
