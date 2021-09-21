const productsReducer = (product = null, action) => {
    switch (action.type) {
        case "LOAD_ITEM":
            return action.payload
        case "VIEW_CART":
            return action.payload
        default:
            return product;
    }
}
export default productsReducer