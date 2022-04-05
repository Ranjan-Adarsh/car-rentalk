import {Card} from 'react-bootstrap';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { render } from 'react-dom';
//import { render } from 'react-dom';


function CarCardComponent(props){

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Some quick example text to build on the card title and make up the bulk of
         the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card> 
    );
}
export default CarCardComponent;