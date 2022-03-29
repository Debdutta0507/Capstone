import Navbar1 from './navbar';
import { withRouter, useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Alloperations from '../CRUD/Alloperations';
import { Card } from 'react-bootstrap';
import './prodDetails.css';

const ProdDetails = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState([]);
    const [counter, setCounter] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const proData = await Alloperations.getProductById(id);
            setProductData(proData.data);

            const incrementCount = await (proData.data.count) + 1;
            setCounter({ ...proData.data, count: incrementCount });
        };
        fetchData();
    }, [id])

    useEffect(() => {
        Alloperations.updateProductCountById(id, counter);
    }, [id, counter])

    return (
        <><Navbar1 />
            <div className='center3'>
                <Card style={{ width: '17rem' }} >
                    <Card.Header>{productData.proName}</Card.Header>
                    <Card.Img variant="top" src={productData.url} width="284px" height="207px" />
                    <Card.Body>
                        <Card.Title><b>Price</b> Rs. {(parseInt(productData.price) / parseInt(productData.quantity)).toFixed(2)}</Card.Title>
                        <Card.Title>Quantity {productData.quantity}</Card.Title>
                        <Card.Title>Total Price Rs. {productData.price}</Card.Title>
                        <Card.Footer>{productData.desc}
                            <br />
                            <Link to="/prodLog" style={{ textDecoration: 'none' }}>Back To Products Table</Link>

                        </Card.Footer>

                    </Card.Body>


                </Card>
            </div>
        </>
    );
}

export default withRouter(ProdDetails);
