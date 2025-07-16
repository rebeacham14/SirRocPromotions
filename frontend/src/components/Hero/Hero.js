import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability
import './Hero.css';


import logo from './SirRocPromotions_logo_trans.png'
import {Row, Col, Card, Button} from 'react-bootstrap';

import { useEffect, useState } from 'react';


function Hero (){



    return (
        <div>
            <Row style={{backgroundColor:"black",}}>
                <Col>
                    <Card border="warning" style={{
                        backgroundColor:"rgba(221, 221, 221, 0.25)", 
                        width: '50vw',
                        
                        margin:"10vw 0 10% 10%"

                        }}  >



                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body style={{color:"white"}}>
                            <Card.Title >Next Event </Card.Title>
                            <Card.Text>
                                <h1>
                                    Apocalypto The New Beginning
                                
                                    <span style={{display:"block", color:"gold"}}>
                                        May 24th
                                    </span>
                                </h1>
                                <p >
                                    Doors Open 6pm - First Bell 7pm
                                </p>
                            </Card.Text>
                            <div class="d-flex justify-content-end">
                                <Button variant="outline-dark" style={{
                                    width:"15vw",
                                    height:"2%",
                                    margin:"10px",
                                    color:"white"
                                    }}>
                                        Read More
                                </Button>
                                
                                <Link to='/buyaticket'>
                                <Button className="BaTButton" variant="light" style={{
                                    width:"18vw",
                                    height:"",
                                    margin:"10px"
                                }}>
                                    Buy a Ticket


                                </Button>
                                </Link>
                            </div>
                        </Card.Body>
                    </Card>                
                </Col>
                
                <Col>
                    <img src={logo} style={{height:"35vw", display:"block", marginLeft:"auto"}} alt="" />
                </Col>
                
            </Row>
        </div>
        
    );
    
}


export default Hero;
