import axios from 'axios'

export const getProducts = async () => {
    const url = 'https://fakestoreapi.com/products';
    const resp = await axios.get(url)
    const response = await resp.data
    return response;
}

export const loadItem = (product, history) => async (dispatch) => {
    dispatch({type:'LOAD_ITEM', payload: product})
    history.push(`/item/${product.id}}`)
}

export const viewCart = (products) => async(dispatch) => {
    dispatch({type:'VIEW_CART', payload: products})
}