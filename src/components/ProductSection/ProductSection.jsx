import React, { useEffect } from 'react'
import "./ProductSection.css"
import { ProductCard } from '..'
import { connect } from "react-redux"
import { getProducts } from "../../redux/action"
import  {useNavigate} from "react-router-dom"

const ProductSection = ({ products, loading, getProducts }) => {
    useEffect(() => getProducts(), [getProducts])
    const navigate = useNavigate()
    const handleOnClick = (id) => {
        navigate(`/store/${id}`)
    }
    return (
        <section className='product-section'>
            <div className="header">
                <h2>SHOES</h2>
            </div>
            <div className="product-list">
                {!loading && products.map(product => <ProductCard onClick={() => handleOnClick(product.id)} key={product.id} imageSource={product.imageSource} price={product.price} rating={product.rating} title={product.title} />)}
            </div>
        </section>
    )
}
const mapStateToProps = (state) => {
    return {
        products: state.product.products,
        loading: state.product.loading
    }
}

const ConnectedProductSection = connect(mapStateToProps, { getProducts })(ProductSection);

export { ConnectedProductSection as ProductSection };