import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import { useEffect, useState} from 'react';

import placeholderPic from './placeholder_fighter.png'
import AngelPic from './Angel Firme Cavazos.JPG';
import BrianPic from './Brian Gallo Giro Ramos.JPG';
import CruzPic from './Cruz Bercerra Monteon.JPG';



import {Row, Col, Button, Card} from 'react-bootstrap';



function TicketSelectFighter ({ onFighterChange, setFighter}){    
    
    const [currentImage, changePic] = useState(placeholderPic);


    const handlePicChange = (e) => {
        const newFighter = e.target.value;
        
        switch(newFighter){
            case "Angel": 
                changePic(AngelPic)

            break;
            case "Brian":
                changePic(BrianPic)

            break;
            case "Cruz":
                changePic(CruzPic)
            break;
        }
    };
        

    const handleFighterChange = (e) => {
        
        onFighterChange(e);

        setFighter(e.target.value);

        handlePicChange(e)

    };


    return (

        <div className='container-fluid'>

            <center>
            <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", alignContent:"center", maxWidth: '800px', minWidth: '500px', maxHeight:"800px", minHeight:"500px", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                
                {/* Choose Fighter */}
                <Col>
                    <Row style={{backgroundColor:"", marginBottom:"10px"}}>
                        <Col>
                            <h2 style={{color:'white'}}>
                                Your Fighter:
                            </h2>
                        </Col>
                    </Row>

                    <Row>
                        <div className='horizontal sroll window' style={{overflowX:"scroll", minHeight:"200px", maxHeight:"250px",  alignContent:"center"}} >
                                                        
                            <Col style={{backgroundColor:""}}>
                                <Button className='' variant="outline-warning" value="Angel" onClick={(e)=> handleFighterChange(e)} style={{ width:"80%", fontSize:"80%", margin:"5px"}}>
                                    Angel                         
                                                                
                                </Button>                    
                                                                    
                            </Col>
                            <Col style={{backgroundColor:""}}>
                                <Button className='' variant="outline-warning" value="Brian" onClick={(e)=> handleFighterChange(e)} style={{ width:"80%", fontSize:"80%", margin:"5px"}}>
                                    Brian                     
                                                                
                                </Button>                    
                                                                    
                            </Col>
                            <Col style={{backgroundColor:""}}>
                                <Button className='' variant="outline-warning" value="Cruz" onClick={(e)=> handleFighterChange(e)} style={{ width:"80%", fontSize:"80%", margin:"5px"}}>
                                    Cruz                           
                                                                
                                </Button>                    
                                                                    
                            </Col>
                            
                        </div>
                    </Row>

                </Col>
                
                {/* Fighter Image Display */}
                <Col style={{ backgroundColor:"rgb(0, 0, 0)", maxWidth: '300px', minWidth: '200px', maxHeight:"500px", minHeight:"300px", padding:"10px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                    
                    <Card style={{backgroundColor:"rgba(100, 90, 90, 0.0)"}}>
                        <div>
                            <img src={currentImage} alt='' style={{width:"220px"}}></img>
                        </div>
                    </Card>
                </Col>

            </Row>
            </center>
                
        </div>
    );

}

export default TicketSelectFighter;         
            
            
            
            
            
            
