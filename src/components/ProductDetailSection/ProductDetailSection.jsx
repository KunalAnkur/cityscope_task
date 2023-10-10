import React, { useEffect, useState } from 'react'
import { IoIosArrowBack } from "react-icons/io"
import "./ProductDetailSection.css"
import { Button, Selectors } from '..'
import { getProduct, addToCart } from "../../redux/action"
import { useNavigate, useParams } from 'react-router-dom'
import { connect } from 'react-redux'

const ProductDetailSection = ({ product, loading, getProduct, addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [options, setOptions] = useState({});

  useEffect(() => {
    getProduct(id);
  }, [getProduct, id]);

  const handleOnClick = () => {
    const cartData = {
      ...product,
      options
    }
    addToCart(cartData);
  }
  const handleOnBack = () => {
    navigate(-1)
  }

  return (
    <section className='product-detail-section'>
      {Object.keys(product).length && <>
        <div onClick={handleOnBack} className="header">
          <IoIosArrowBack size={25} />
          <h1>Your design space</h1>
        </div>
        <div className="content">
          <div className="product-showcase">
            {<img className='main-image' src={product.mainImage} alt="" />}
            {product.imageList.map((img, id) => <img key={id} src={img} alt={product.title} />)}
          </div>
          <div className="product-details">
            <div className='heading'>
              <h1>{product.title}</h1>
              <h3>{product.description}</h3>
              <h4>Rs {product.price}/-</h4>
              <p>{product.offer}</p>
            </div>
            <div className="feature-selectors">
              {Object.keys(product.options).map((key, id) => (<Selectors key={id} title={key} selector={product.options[key]} setSelector={setOptions} />))}
            </div>
          </div>
        </div>
        <div className="button-list">
          <Button type='secondary' label='Share design' />
          <Button onClick={handleOnClick} label='Add to cart' />
        </div></>}

    </section>
  )
}
const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    loading: state.product.loading
  }
}

const connectedProductDetail = connect(mapStateToProps, { getProduct, addToCart })(ProductDetailSection)

export { connectedProductDetail as ProductDetailSection }