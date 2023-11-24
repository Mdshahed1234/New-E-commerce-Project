// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Practice = () => {
//   const [data, setData] = useState([]);
//   const apiData = async () => {
//     const resp = await axios.get("https://fakestoreapi.com/products");
//     setData(resp.data);
//     console.log(resp.data);
//   };
//   useEffect(() => {
//     apiData();
//   }, []);
//   return (
//     <div>
//       <h1>
//         {data.map((id) => {
//           return (
//             <div>
//               <img src={id.image} alt="" />
//               <p>{id.title}</p>
//               <h4>${id.price}</h4>
//             </div>
//           );
//         })}
//       </h1>
//     </div>
//   );
// };

// export default Practice;
