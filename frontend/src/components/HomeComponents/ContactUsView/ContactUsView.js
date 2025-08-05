import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import './ContactUsView.css'; 


import { useEffect, useState} from 'react';

import {Row, Col, Button, Card} from 'react-bootstrap';

function ContactUsView ({}){    

    // const [currentImage, changePic] = useState(placeholderPic);

    // const handleFighterChange = (e) => {

    // };

    return (

        <div className='container-fluid'>

            <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", height:"50vh", width:"100%", margin:"0 0 0 2vh", border:"2px solid #ffc107", borderRadius:"10px"}}>

                <Col style={{display:"flex", justifyContent:"center", alignItems:"center" }}>
                    <Row style={{backgroundColor:"", width:"100%", height:"20vh", display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center" }}>

                        <Col xs={12}sm={12}md={2}lg={2}>
                            <Card>
                                <Card.Title>
                                    <a href="https://www.instagram.com/sirrocpromotions/?hl=en">

                                        Instagram
                                    </a>
                                </Card.Title>
                            </Card>
                        </Col>



                        {/* <Col xs={2}sm={2}md={2}lg={2}>
                            <Card>
                                <Card.Title>
                                    YouTube
                                </Card.Title>
                            </Card>
                        </Col> */}



                        {/* <Col xs={2}sm={2}md={2}lg={2}>
                            <Card>
                                <Card.Title>
                                    Patreon
                                </Card.Title>
                            </Card>
                        </Col> */}


                        <Col xs={12}sm={12}md={2}lg={2}>
                            <Card>
                                <Card.Title>
                                    Email
                                </Card.Title>
                                <Card.Text>


                                </Card.Text>
                            </Card>
                        </Col>


                        <Col xs={12}sm={12}md={2}lg={2}>
                            <Card>
                                <Card.Title>
                                    Phone
                                </Card.Title>
                                <Card.Text>

                                    
                                </Card.Text>
                            </Card>
                        </Col>



                    </Row>
                
                </Col>


            </Row>

        </div>

    );

}

export default ContactUsView;         
