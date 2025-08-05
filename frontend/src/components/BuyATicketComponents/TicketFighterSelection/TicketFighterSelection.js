import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability
import './TicketFighterSelection.css';


import { useEffect, useState, useRef} from 'react';

import placeholderPic from './placeholder_fighter.png'

import JesusPic from './fighters/Chiquito.png';
import AngelPic from './fighters/Angel Chavez.png';
import BrianPic from './fighters/Brian Ramos.png';
import CruzPic from './fighters/Cruz Becerra.png';
import SandraPic from './fighters/Sandra Magallon.png';
import KaranveerPic from './fighters/Karanveer Singh.png';
import ChristianPic from './fighters/Christian Palacios.png';
import IsaiahPic from './fighters/Isaiah Oresco.png';
import DannyPic from './fighters/Danny Haro.png';
import JessiePic from './fighters/Jessie Guerrero.png';
import randomFighter from './placeholder_fighter.png'



import {Row, Col, Button, Card} from 'react-bootstrap';



function TicketSelectFighter ({ isMobile, fighter, onFighterChange}){    
    
    const [currentImage, changePic] = useState(placeholderPic);

    const fighterNames = [
        'Jesus "Chiquito" Haro',
        'Angel Chavez "Firme" Cavazos',
        'Brian "Gallo" Giro Ramos',
        'Cruz Becerra Monteon',
        'Sandra Magallon',
        'Karanveer "Shikari" Singh',
        'Christian Palacios',
        'Isaiah "Pantera" Oresco',
        'Danny "Manitas De Piedra" Haro',
        'Jessie James "Outlaw" Guerrero'
    ]
    
    const fighterImages = [
        JesusPic, 
        AngelPic, 
        BrianPic, 
        CruzPic, 
        SandraPic,
        KaranveerPic,
        ChristianPic,
        IsaiahPic,
        DannyPic,
        JessiePic
    ]

           

    const handleFighterChange = (val) => {
        console.log("changing fighter")
        onFighterChange(val);

    };



    const DesktopView = () => {
        return(

            <center>
            <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", alignContent:"center", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                
                {/* Choose Fighter */}
                <Col>
                    <Row style={{backgroundColor:"", marginBottom:"10px"}}>
                        <Col>
                            <h2 style={{color:'white'}}>
                                Select Your Fighter:
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                        <div className='horizontal sroll window' style={{overflowY:"scroll", height:"40vh",  alignContent:"center", border:"1px solid #ffc107", borderRadius:"10px"}} >
                            {/* Fighters Cards */}
                            <Col>
                                <Row>
                                    {fighterNames.map((name, idx) => (
                                    <Col key={idx} xs={12} sm={12} md={4} lg={3} style={{padding:"10px"}}>
                                        <Card id="fighter_card" onClick={() => handleFighterChange(name)} style={{width:""}}> 
                                            <Card.Img src={fighterImages[idx]}/>
                                            <Card.Body style={{}}>
                                                <Card.Text>
                                                    {name}
                                                </Card.Text>

                                            </Card.Body>

                                        </Card>
                                        
                                    </Col>
                                    ))}

                                    <Col xs={12} sm={12} md={4} lg={3} style={{padding:"10px"}}>
                                        <Card id="fighter_card" onClick={() => handleFighterChange("random")} style={{width:""}}> 
                                            <Card.Img src={randomFighter}/>
                                            <Card.Body style={{}}>
                                                <Card.Text>
                                                    Random
                                                </Card.Text>

                                            </Card.Body>

                                        </Card>
                                    </Col>


                                </Row>
                            
                            </Col>
                            
                        </div>
                    </Row>

                </Col>
                
                {/* Fighter Image Display */}
                {/* <Col style={{ backgroundColor:"rgb(0, 0, 0)", maxWidth: '300px', minWidth: '200px', maxHeight:"500px", minHeight:"300px", padding:"10px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                    
                    <Card style={{backgroundColor:"rgba(100, 90, 90, 0.0)"}}>
                        <div>
                            <img src={currentImage} alt='' style={{width:"100%", height:"100%"}}/>
                        </div>
                    </Card>
                </Col> */}

            </Row>
            </center>


        )

    };




    const MobileView = () => {
        return(

            <center>

            {/* Fighter */}
            <Row style={{color:"white"}}>
                <Col xs="5"s="5"md="5" style={{padding:"20px 0 0 20px"}}>
                    <h2>
                        Fighter:
                    </h2>
                </Col>

                <Col xs="7"s="7"md="7">
                    <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", padding:"15px", marginBottom:"10px", border:"2px solid #ffc107"}}>
                        <Row style={{color:"#ffc107"}}>
                            <Col md="" className='fighterTracker' >
                                <h5>{fighter}</h5>
                            </Col>
                        </Row>
                    </Card>
                </Col>


            </Row>



            <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", alignContent:"center", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                
                {/* Choose Fighter */}
                <Col>
                    <Row style={{backgroundColor:"", marginBottom:"10px"}}>
                        <Col>
                            <h2 style={{color:'white'}}>
                                Select Your Fighter:
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                        <div className='horizontal sroll window' style={{overflowY:"scroll", height:"40vh",  alignContent:"center", border:"1px solid #ffc107", borderRadius:"10px"}} >
                            {/* Fighters Cards */}
                            <Col>
                                <Row>
                                    {fighterNames.map((name, idx) => (
                                    <Col key={idx} xs={6} sm={6} md={4} lg={3} style={{padding:"10px"}}>
                                        <Card id="fighter_card" onClick={() => handleFighterChange(name)} style={{width:""}}> 
                                            <Card.Img src={fighterImages[idx]}/>
                                            <Card.Body style={{}}>
                                                <Card.Text>
                                                    {name}
                                                </Card.Text>

                                            </Card.Body>

                                        </Card>
                                        
                                    </Col>
                                    ))}

                                    <Col xs={12} sm={12} md={4} lg={3} style={{padding:"10px"}}>
                                        <Card id="fighter_card" onClick={() => handleFighterChange("random")} style={{width:""}}> 
                                            <Card.Img src={randomFighter}/>
                                            <Card.Body style={{}}>
                                                <Card.Text>
                                                    Random
                                                </Card.Text>

                                            </Card.Body>

                                        </Card>
                                    </Col>


                                </Row>
                            
                            </Col>
                            
                        </div>
                    </Row>

                </Col>
                
                {/* Fighter Image Display */}
                {/* <Col style={{ backgroundColor:"rgb(0, 0, 0)", maxWidth: '300px', minWidth: '200px', maxHeight:"500px", minHeight:"300px", padding:"10px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                    
                    <Card style={{backgroundColor:"rgba(100, 90, 90, 0.0)"}}>
                        <div>
                            <img src={currentImage} alt='' style={{width:"100%", height:"100%"}}/>
                        </div>
                    </Card>
                </Col> */}

            </Row>
            </center>


        )

    };


    return (

        <div className='container-fluid' style={{backgroundColor:""}}>

            {isMobile ? <MobileView /> : <DesktopView />}

                
        </div>
    );

}

export default TicketSelectFighter;         
            
            
            
            
            
            
