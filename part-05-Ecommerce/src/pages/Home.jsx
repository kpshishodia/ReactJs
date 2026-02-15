import React from 'react'
import { getProducts } from '../Data/Products'

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
        <div className='products-grid'>

          {/* Loop through products array */}
          {products.map((product) => {
            return (
              // Each product card
              <div className='product-card' key={product.id}>

                {/* Product Image */}
                <img src={product.image} alt={product.name} />

                {/* Product Info */}
                <div className='product-info'>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                </div>

              </div>
            )
          })}

        </div>
      </div>

    </div>
  )
}

export default Home
