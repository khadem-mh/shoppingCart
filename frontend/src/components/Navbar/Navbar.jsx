import ReactDOM from 'react-dom'
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import './Navbar.css'
import Modal from '../Modal/Modal'
import CartProduct from '../CartProduct/CartProduct';
import { Container, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap'
import { TfiShoppingCart, TfiShoppingCartFull } from "react-icons/tfi";

const Navbare = () => {
    const [show, setShow] = useState(false)
    const cart = useContext(CartContext)

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

    const hideModal = () => setShow(false)

    async function checkout() {
        const responce = await fetch('http://localhost:3003/api', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items: cart.items })
        })
        const data = await responce.json()
        data.url && window.location.assign(data.url)
    }

    return (
        <>
            <Navbar className="mt-3 mb-5 shadow rounded-3">
                <Container fluid>
                    <Navbar.Brand href="#" className='d-flex align-items-center'>
                        <img src="/Images/logo-website/logo-site.png" alt="logo-website" width={70} />
                        <p className='m-0 fw-bold'>Shopping Cart</p>
                    </Navbar.Brand>

                    <div className='basket shadow shaow-lg rounded-2 p-3 justify-content-start' onClick={() => cart.items.length > 0 && setShow(true)}>
                        {
                            cart.items.length > 0 ?
                                <div>
                                    {`(${productsCount}) `}
                                    <TfiShoppingCartFull fontSize={'1.4rem'} />
                                </div>
                                :
                                <TfiShoppingCart fontSize={'1.4rem'} />
                        }
                    </div>
                </Container>
            </Navbar>

            {
                ReactDOM.createPortal(
                    <Modal statusModal={show} onHideModal={hideModal} >
                        {productsCount > 0 ?
                            <>
                                {
                                    cart.items.map(item => (
                                        <CartProduct key={item.id} id={item.id} quantity={item.quantity} />
                                    ))
                                }
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='m-0'>Total Prices Bascket: {cart.getTotalAmount()}$</p>
                                    <Button onClick={checkout}>Pay</Button>
                                </div>
                            </>
                            :
                            <p className='text-center'>Shopping Cart Empty!</p>
                        }
                    </Modal>,
                    document.getElementById('modal')
                )
            }


        </>
    );
}

export default Navbare;