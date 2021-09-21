import React, { useEffect, useState } from 'react'
import { getProducts } from '../actions/action'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Home = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const data = [];
        const resp = getProducts();
        resp.then(r=>r.forEach((d,i)=>{
            d.cart=false
            data.push(d)
        }))
        localStorage.setItem('prodcuts',JSON.stringify(data))
        setProducts(data)
    }, [])

    const loadItem = (id) => {
        const product = products.filter(p => p.id === id)
        dispatch(loadItem(product[0], history))
    }

    return (
        <div className="home-container">
            {
                products?.map(p => {
                    return (
                        <button className="home-item" key={p.id} onClick={(e) => loadItem(e.target.id)}>
                            <img className="home-image" src={p.image} alt="" />
                            <div className="home-title">{p.title}</div>
                            {/* <div className="home-desc">{p.description}</div> */}
                            <div className="home-rate">{p.rating.rate}</div>
                            <div className="home-count">{p.rating.count}</div>
                        </button>
                    )
                })
            }
        </div>
    )
}
export default Home;