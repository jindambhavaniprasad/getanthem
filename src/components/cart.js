import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartProducts = useSelector(state => state.product)
    return (
        <div>
            {
                cartProducts?.map(c => {
                    return (
                        <div className="home-container">
                            <img className="home-image" src={c.image} alt="" />
                            <div className="home-title">{c.title}</div>
                            <div className="home-rate">{c.rating.rate}</div>
                            <div className="home-count">{c.rating.count}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Cart;