import { createContext, useState } from "react";
import { getProduct } from "../data/item";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteFromCart: () => { },
    getTotalAmount: () => { }
})

export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])

    const getProductQuantity = ID => {
        const quantity = cartProducts.find(item => item.id === ID)?.quantity
        if (quantity === undefined) return 0
        return quantity
    }

    const addItemToCart = ID => {
        const quantity = getProductQuantity(ID)
        if (quantity === 0) setCartProducts([...cartProducts, { id: ID, quantity: 1 }])
        else setCartProducts(cartProducts.map(item => item.id === ID ? { ...item, quantity: item.quantity + 1 } : item))
    }

    const deleteFromCart = ID => setCartProducts(cartProducts.filter(item => item.id !== ID))

    const removeItemFromCart = ID => {
        const quantity = getProductQuantity(ID)
        quantity === 1 && deleteFromCart(ID)
        quantity > 1 && setCartProducts(cartProducts.map(item => item.id === ID ? { ...item, quantity: item.quantity - 1 } : item))
    }

    const getTotalAmount = () => {
        let totalPrice = 0
        cartProducts.map(item => {
            const productData = getProduct(item.id)
            totalPrice += productData.price * item.quantity
        })
        return totalPrice
    }

    const ContextValue = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCart,
        getTotalAmount
    }
    return <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
}