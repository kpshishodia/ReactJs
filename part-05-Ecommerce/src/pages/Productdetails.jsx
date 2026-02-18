
// 🔹 React hooks for state management and side effects
import { useEffect, useState } from "react";

// 🔹 Hooks from react-router for routing features
// useParams → to read dynamic URL values like /products/:id
// useNavigate → to redirect user programmatically
import { useNavigate, useParams } from "react-router-dom";

// 🔹 Function that returns a single product using its id
import { getProductById } from '../Data/Products.js';


const Productdetails = () => {

  // 🔹 Extract the dynamic id from URL
  // Example URL: /products/3  →  id = "3"
  const { id } = useParams();

  // 🔹 Debug log to confirm id is coming correctly
  console.log('param id :', id); 


  // 🔹 State to store the found product
  // Initially null because data is not loaded yet
  const [product, setProduct] = useState(null);


  // 🔹 Hook used to redirect user if product not found
  const navigate = useNavigate();


  // 🔹 useEffect runs whenever:
  // - component mounts first time
  // - id changes in URL
  useEffect(() => {

    // 🔹 Try to find product using id from URL
    const foundProduct = getProductById(id);

    // 🔹 Debug log to see returned product
    console.log(foundProduct);


    // 🔹 If no product exists with this id
    // redirect user to home page to avoid blank screen
    if (!foundProduct) {
      navigate("/");
      return; // stop further execution
    }

    // 🔹 If product found → store it in state
    setProduct(foundProduct);

  }, [id, navigate]); // dependencies → rerun when id or navigate changes



  // 🔹 While product is null (before loading)
  // show loading message to user
  if (!product) {
    return <h1>Loading...</h1>;
  }



  // 🔹 Main UI when product is successfully loaded
  return (
    <div className="page">
      <div className="container">

        <div className="product-detail">

          {/* 🔹 Product Image Section */}
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>


          {/* 🔹 Product Information Section */}
          <div className="product-detail-content">

            {/* Product Name */}
            <h1 className="product-detail-name">{product.name}</h1>

            {/* Product Price */}
            <p className="product-detail-price">${product.price}</p>

            {/* Product Description */}
            <p className="product-detail-description">
              {product.description}
            </p>

            <button className='btn btn-primary'>Add to Cart</button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Productdetails;
