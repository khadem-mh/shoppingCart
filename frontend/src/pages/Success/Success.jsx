import React from 'react'
import { Link } from 'react-router-dom'

export default function Success() {
    return (
        <div className='d-flex flex-column align-items-center justify-content-center text-center'>
            <h1>Your order has been successfully registered ☺</h1>
            <Link to={'/'} className='btn btn-lg btn-dark text-white mt-3'>Back to the store</Link>
        </div>
    )
}
