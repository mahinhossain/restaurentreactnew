// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { baseUrl } from "./Data/DataServices";
// export default function Tst() {
//   const [Data, setData] = useState([]);
//   useEffect(() => {
//     axios
//       .get(`${baseUrl}/Data`)
//       .then((res) => setData(res.data))
//       .catch((err) => console.log(`err`, err));
//   }, []);

//   // console.log(`ater data`, arr);

//   const handleMerge = (Data1) => {
//     console.log(`Data1`, Data1);
//     const comment1 = "very nice";
//     const Arr = [
//       {
//         id: Data1.id,
//         title: Data1.title,
//         category: Data1.category,
//         desc: Data1.desc,
//         img: Data1.img,
//         price: Data1.price,
//         comment: comment1,
//       },
//     ];
//     console.log(`Arr`, Arr);

//     setData(Arr);
//   };
//   return (
//     <div>
//       {Data.map((item) => (
//         <div className="bg-info p-4 m-5" key={item.id}>
//           <p>{item.id}</p>
//           <p>{item.title}</p>
//           <p>{item.category}</p>
//           <p>{item.price}</p>
//           <p>coment:{item.comment}</p>
//           <img
//             className="w-25"
//             src={item.img}
//             onClick={() => handleMerge(item)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// }
import React from "react";

export default function Tst() {
  return <div></div>;
}
