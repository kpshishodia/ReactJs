import React from 'react'
import { getProducts } from '../Data/Products'
import ProductCard from '../components/ProductCard'
// import { Link } from 'react-router-dom'

const Home = () => {
  // Get all products from data file
  const products = getProducts()

  return (
    <div className='page'>

      {/* Hero Section */}
      <div className='home-hero'>
        <h1 className='home-title'>Welcome to Shophub</h1>
        <p className='home-subtitle'>
          Discover amazing products at great prices.
        </p>
      </div>

      {/* Products Section */}
      <div className='container'>
        <h2 className='page-title'>Our Products</h2>

        {/* Products Grid */}
        <div className='product-grid'>

          {/* Loop through products array */}
          {products.map((product) => {
            return (

                <ProductCard product ={product} key={product.id} />
            //   // Each product card
            //   <div className='product-card' key={product.id}>

            //     {/* Product Image */}
            //     <img className='product-card-image' src={product.image} alt={product.name} />

            //     {/* Product Info */}
            //     <div className='product-card-content'>
            //       <h3 className='product-card-name'>{product.name}</h3>
            //       <p className='product-card-price'>${product.price}</p>
            //     </div>
            //     <div className='product-card-actions'>
            //         <Link className='btn btn-secondary'>View Details</Link>
            //         <button className='btn btn-primary'>Add to Cart</button>
            //     </div>

            //   </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default Home
