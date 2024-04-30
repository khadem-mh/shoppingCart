import React from 'react'
import Product from '../../components/Product/Product'
import { Row, Col } from 'react-bootstrap'
import { productsList } from '../../data/item'

const Shop = () => {
    return (
        <Row xs={1} md={2} lg={4} className='g-4'>
            {
                productsList.length ?
                    productsList.map(item => (
                        <Col key={item.id}>
                            <Product id={item.id} pathImg={item.image} title={item.title} details={item.description} price={item.price} />
                        </Col>
                    ))
                    :
                    <Col>
                        No products are currently posted on the website
                    </Col>
            }
        </Row>
    )
}

export default Shop