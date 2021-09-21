import React, { useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'

const Item = () => {

    const dispatch = useDispatch()

    const p = useSelector(state => state.product)

    const [addedtoCart, setAddedtoCart] = useState(p.cart)

    const addToCart = () => {
        setAddedtoCart(true)
        const products = JSON.parse(localStorage.getItem('products'))
        products.forEach(pr=>{
            if(p.id===pr.id){
                products.cart=true;
            }
        })
        localStorage.setItem('prodcuts',JSON.stringify(products))
    }

    const viewCart = () => {
        let products = JSON.parse(localStorage.getItem('products'))
        products = products.filter(p=>p.cart)
        dispatch(viewCart(products))
    }

    return (
        <div>
            <img className="home-image" src={p.image} alt="" />
            <div className="home-title">{p.title}</div>
            <div className="home-desc">{p.description}</div>
            <div className="home-rate">{p.rating.rate}</div>
            <div className="home-count">{p.rating.count}</div>
            <button onClick={addToCart}>{addedtoCart ? 'Added' : 'Add to cart'}</button>
            <button viewCart={viewCart}>View Cart</button>
        </div>
    )
}
export default Item;