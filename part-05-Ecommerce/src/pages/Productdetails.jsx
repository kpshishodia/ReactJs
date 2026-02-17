// // import React, { useEffect, useState } from 'react'
// // import { useParams } from 'react-router-dom'
// // import { getProductById } from '../Data/Products'

// // const Productdetails = () => {
// //     const {id} = useParams()
// //     const [product ,setProduct] = useState(null)
    
// //     useEffect(() => {
// //         const foundProduct = getProductById(id);
// //         console.log(foundProduct)
// //     },[]);

// //   return (
// //     <div>Productdetails {id}</div>
// //   )
// // }

// // export default Productdetails




// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getProductById } from "../Data/Products";

// const Productdetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const foundProduct = getProductById(id);
//     setProduct(foundProduct);
//   }, [id]);

//   if (!product) {
//     return <h2>Product not found</h2>;
//   }

//   return (
//     <div className="container">
//       <div className="product-details">
//         <img
//           src={product.image}
//           alt={product.name}
//           style={{ width: "300px" }}
//         />

//         <div>
//           <h2>{product.name}</h2>
//           <p>${product.price}</p>
//           <p>{product.description}</p>

//           <button className="btn btn-primary">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Productdetails;







import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from '../Data/Products.js';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);
    console.log(foundProduct)

    if (!foundProduct) {
      navigate("/");
      return;
    }

    setProduct(foundProduct);
  }, [id, navigate]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">
              {product.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails