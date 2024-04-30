import { useContext } from 'react';
import './Product.css'
import { CartContext } from '../../context/CartContext';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiOutlineDelete } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";

const Product = ({ title, details, pathImg, price, id }) => {

    const cartContext = useContext(CartContext)

    const productQuantity = cartContext.getProductQuantity(id)


    return (
        <Card className='rounded-5 overflow-hidden shadow-lg'>
            <Card.Img variant="top" src={pathImg} />
            <Card.Body>
                <div className='d-flex align-items-center justify-content-between'>
                    <Card.Title>{title}</Card.Title>
                    {productQuantity > 0 &&
                        <Card.Subtitle>
                            {price}$
                        </Card.Subtitle>
                    }
                </div>
                <Card.Text className='card-text'>
                    {details}
                </Card.Text>
                <Card.Footer className='d-flex align-items-center justify-content-between'>
                    {
                        productQuantity > 0
                            ?
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <p className='m-0'>count: {productQuantity}</p>
                                <div>
                                    <Button variant="dark text-white" onClick={() => cartContext.addItemToCart(id)}><FaPlus fontSize={'.6rem'} /></Button>
                                    <Button variant="dark text-white mx-1" onClick={() => cartContext.removeItemFromCart(id)}><FaMinus fontSize={'.6rem'} /></Button>
                                    <Button variant="danger  text-white" onClick={() => cartContext.deleteFromCart(id)}><AiOutlineDelete /></Button>
                                </div>
                            </div>
                            :
                            <>
                                <p className='m-0'>
                                    {price}$
                                </p>
                                <Button variant="dark text-white" onClick={() => cartContext.addItemToCart(id)}>Buy Course</Button>
                            </>
                    }
                </Card.Footer>
            </Card.Body>
        </Card >
    );
}

export default Product