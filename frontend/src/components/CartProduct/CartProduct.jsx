import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { getProduct } from '../../data/item'
import { Button } from 'react-bootstrap'
import { AiOutlineDelete } from "react-icons/ai";

export default function CartProduct({ id, quantity }) {
    console.log(id, quantity);
    const cart = useContext(CartContext)
    const productData = getProduct(id)

    return (
        <div>
            <div className='d-flex align-items-center mb-5' style={{ fontSize: '.9rem' }}>
                <img src={productData.image} alt="product" width={'50%'} className='rounded-3 me-3' />
                <div className='w-50 d-flex flex-column align-items-between'>
                    <div>
                        <p>{productData.title}</p>
                        <div className='d-flex align-items-center justify-content-between'>
                            <p>Price: {productData.price}$ </p>
                            <p>Total: {productData.price * quantity}$</p>
                        </div>
                    </div>
                    <div className='d-flex align-items-center justify-content-between'>
                        <p className='m-0'>Count: {quantity}</p>
                        <Button className='text-danger bg-transparent border-0 py-0 px2' onClick={() => cart.deleteFromCart(id)}><AiOutlineDelete fontSize={'1.2rem'} /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
