import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import './FighterView.css'; 


import { useEffect, useState} from 'react';

import {Row, Col, Button, Card} from 'react-bootstrap';

import image2 from './MID_Banner.jpeg';

import AngelPic from './fighters/Angel Chavez.png';
import BrianPic from './fighters/Brian Ramos.png';
import CruzPic from './fighters/Cruz Becerra.png';
import JesusPic from './fighters/Chiquito.png';
import SandraPic from './fighters/Sandra Magallon.png';
import KaranveerPic from './fighters/Karanveer Singh.png';
import ChristianPic from './fighters/Christian Palacios.png';
import IsaiahPic from './fighters/Isaiah Oresco.png';
import DannyPic from './fighters/Danny Haro.png';
import JessiePic from './fighters/Jessie Guerrero.png';



function FighterView ({ }){    


    return (

        <div className='container-fluid'>
            <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", height:"50vh", width:"100%", margin:"0 0 0 2vh", overflowY:"scroll", border:"2px solid #ffc107", borderRadius:"10px"}}>
                
                
                <Col style={{backgroundColor:"", paddingTop:"2vh" }}>
                    
                    {/* our Fighters LABEL*/}
                    <Row style={{marginBottom:"30px"}}>
                        <Col xs={12} sm={12} md={12} lg={12} style={{display:"flex", justifyContent:"center", color:"white"}}>
                            <h1> Our Fighters</h1>
                        </Col>
                    </Row>

                    {/* fighters */}
                    <Row style={{display:"flex", justifyContent:"center", marginBottom:"20px"}}>   
                        
                        {/* for as many fighters there are, make card */}
                        <Col id="card" xs={12} sm={12} md={6} lg={4} >
                            <Card style={{width:"30vh"}}>
                                <Card.Img variant="" src={AngelPic} style={{width:""}}/>
                                <Card.Title style={{backgroundColor:"black", color:"white", textAlign:"center"}}>
                                    Angel "El Original" Chavez
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col id="card" xs={12} sm={12} md={6} lg={4} >
                            <Card style={{width:"30vh"}}>
                                <Card.Img variant="" src={JesusPic} style={{width:""}}/>
                                <Card.Title style={{backgroundColor:"black", color:"white", textAlign:"center"}}>
                                    Jesus "Chiquito" Haro
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col id="card" xs={12} sm={12} md={6} lg={4} >
                            <Card style={{width:"30vh"}}>
                                <Card.Img variant="" src={BrianPic} style={{width:""}}/>
                                <Card.Title style={{backgroundColor:"black", color:"white", textAlign:"center"}}>
                                    Bryan "Gallo Giro" Ramos
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col id="card" xs={12} sm={12} md={6} lg={4} >
                            <Card style={{width:"30vh"}}>
                                <Card.Img variant="" src={ChristianPic} style={{width:""}}/>
                                <Card.Title style={{backgroundColor:"black", color:"white", textAlign:"center"}}>
                                    Christian Palacios
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col id="card" xs={12} sm={12} md={6} lg={4} >
                            <Card style={{width:"30vh"}}>
                                <Card.Img variant="" src={CruzPic} style={{width:""}}/>
                                <Card.Title style={{backgroundColor:"black", color:"white", textAlign:"center"}}>
                                    Cruz Becerra Monteon
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col id="card" xs={12} sm={12} md={6} lg={4} >
                            <Card style={{width:"30vh"}}>
                                <Card.Img variant="" src={DannyPic} style={{width:""}}/>
                                <Card.Title style={{backgroundColor:"black", color:"white", textAlign:"center"}}>
                                    Danny "Manitas de Piedra" Haro
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col id="card" xs={12} sm={12} md={6} lg={4} >
                            <Card style={{width:"30vh"}}>
                                <Card.Img variant="" src={IsaiahPic} style={{width:""}}/>
                                <Card.Title style={{backgroundColor:"black", color:"white", textAlign:"center"}}>
                                    Isaiah Oresco
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col id="card" xs={12} sm={12} md={6} lg={4} >
                            <Card style={{width:"30vh"}}>
                                <Card.Img variant="" src={JessiePic} style={{width:""}}/>
                                <Card.Title style={{backgroundColor:"black", color:"white", textAlign:"center"}}>
                                    Jessie James Outlaw Guerrero
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col id="card" xs={12} sm={12} md={6} lg={4} >
                            <Card style={{width:"30vh"}}>
                                <Card.Img variant="" src={KaranveerPic} style={{width:""}}/>
                                <Card.Title style={{backgroundColor:"black", color:"white", textAlign:"center"}}>
                                    Karanveer "SHIKARI" Singh
                                </Card.Title>
                            </Card>
                        </Col>
                        <Col id="card" xs={12} sm={12} md={6} lg={4} >
                            <Card style={{width:"30vh"}}>
                                <Card.Img variant="" src={SandraPic} style={{width:""}}/>
                                <Card.Title style={{backgroundColor:"black", color:"white", textAlign:"center"}}>
                                    Sandra Magallon
                                </Card.Title>
                            </Card>
                        </Col>




                    </Row>

                </Col>
                
                

            </Row>


        </div>

    );

}

export default FighterView;         
