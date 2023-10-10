import React, { useEffect } from 'react'
import "./ProductSection.css"
import { ProductCard } from '..'
import { connect } from "react-redux"
import { getProducts, setSearchFilter } from "../../redux/action"
import  {useNavigate} from "react-router-dom"
import { BsSearch } from "react-icons/bs"
const ProductSection = ({ products, loading, getProducts, setSearchFilter }) => {
    useEffect(() => getProducts(), [getProducts])
    const navigate = useNavigate()

    const handleOnClick = (id) => {
        navigate(`/store/${id}`)
    }
    const handleOnChange = (e) => {
        setSearchFilter(e.target.value)
    }
    return (
        <section className='product-section'>
            <div className="header">
                <h2>SHOES</h2>
                <div className="header-filter">
                    <input onChange={handleOnChange} type="search" placeholder='Search' />
                    <BsSearch />
                </div>
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

const ConnectedProductSection = connect(mapStateToProps, { getProducts, setSearchFilter })(ProductSection);

export { ConnectedProductSection as ProductSection };