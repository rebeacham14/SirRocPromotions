import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import {useEffect, useState} from 'react';
import {Row, Col, Button} from 'react-bootstrap';


function TicketSectionSelection ({ onSectionChange, setSeat, rowType, isAtEnd, needInfo, setPrice}){
    
    const handleChange = (e) => {

        const val = e.target.value;

        onSectionChange(val);
        
        rowType("");
        isAtEnd(false);
        needInfo(true);
        

        switch(val){
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
                rowType("full")
                break;
                
            case "F1":
            case "G1":
            case "G2":
            case "G3":
            case "G4":
                rowType("single")
                break;
                
            case "S":
                isAtEnd(true)
                setPrice(60.00)
                break;


            case "F2":
            case "F3":
            case "F4":
                setPrice(800.00)
                isAtEnd(true)
                break;

        }


        setSeat("");

    };

    
    return (

        <div className='container-fluid'>
                      
            <div className='horizontal sroll window' style={{overflowX:"scroll", height:"", alignContent:"center"}} >

                <center>
                <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", height:"50vh", maxHeight:"500px", minHeight:"300px", width:"900px", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                    
                    <Col xs="12" sm="12" md="12">
                        <h2 style={{color:'white'}}>
                            Choose Section:
                        </h2>
                    </Col>
                    
                    <Col className='left_map' xs="3" sm="3" md="3" style={{backgroundColor:"", padding:""}}>

                        <Row className='top_left' style={{height:"", padding:""}}>
                            <Col className='left' style={{backgroundColor:"", padding:"10px", border: '1px solid black'}}>
                                <center>
                                <Button variant="secondary" style={{width:"100%", height:"60px", marginBottom:"5px"}} disabled>
                                    Tent
                                </Button>
                                </center>

                                <Button className='standing' variant="outline-warning" value="S" onClick={(e) => handleChange(e)} style={{width:"100%"}}>
                                    Standing
                                </Button>
                            </Col>

                            <Col className=' right' style={{backgroundColor:"", alignContent:"end", justifyContent:""}}>
                                <Button className='section_A' variant="outline-warning" value="A" onClick={(e) => handleChange(e)} style={{width:"100%", height:"80%"}}>
                                    Section A
                                </Button>
                            </Col>
                        </Row>
                        
                        <Row className='center_left_map' style={{height:"30%", padding:"10px"}}>
                            <Col  style={{backgroundColor:"#ffc107", padding:"", alignContent:"center", borderRadius:"10px" }}>
                                <Row style={{textAlign:"center"}}>
                                    <h1>Ramp</h1>
                                </Row>
                            </Col>
                        </Row>
                        
                        <Row className='bottom_left_map' style={{height:"30%"}}>
                            
                            <Col md="6" className='left' style={{border: '1px solid black'}}>
                                <Button className='standing' variant="outline-warning" value="S" onClick={(e) => handleChange(e)} style={{width:"100%"}}>
                                    Standing
                                </Button>
                                <Button variant="secondary" style={{width:"100%", height:"60px", marginTop:"5px"}} disabled>
                                    Tent
                                </Button>
                            </Col>

                            <Col md="6" className='right'>
                                <Button className='section_B' variant="outline-warning" value="B" onClick={(e) => handleChange(e)} style={{width:"100%", height:"80%"}}>
                                    Section B
                                </Button>
                            </Col>
                        </Row>


                    </Col>

                    <Col className='center_map' xs="4" sm="4" md="4" style={{margin:"0 5% 0 5%"}}>
                        
                        <Row className='top_center'>
                            <Col md="12" style={{backgroundColor:"", padding:"5px"}}>
                                <center>
                                <Button variant="outline-warning" value="F1" onClick={(e) => handleChange(e)} style={{width:"80%"}}>
                                    F1
                                </Button>
                                </center>

                            </Col>
                        </Row>

                        <Row className='center_center' style={{backgroundColor:"", height:"60%", margin:"",  border:"3px solid #ffc107", borderRadius:"10px"}}>
                            
                            <Col xs="4"s="4"md="4" style={{backgroundColor:"", height:"100%", alignContent:"center"}}>
                                
                                <Button variant="outline-warning" value="G1" onClick={(e) => handleChange(e)} style={{width:"60%", height:"80%", padding:""}}>
                                    G1
                                </Button>
                            
                            </Col>

                            <Col xs="4"s="4"md="4" style={{backgroundColor:"", height:"100%", display:"", alignContent:"center"}}>
                                
                                {/* G2 row */}
                                <Row style={{backgroundColor:""}}>
                                        <Button variant="outline-warning" value="G2" onClick={(e) => handleChange(e)} style={{width:"100%", padding:""}}>
                                        G2
                                        </Button>
                                </Row>
                                
                                {/* Ring row */}
                                <Row style={{backgroundColor:"#ffc107", height:"40%", marginBottom:"20%", marginTop:"20%", alignContent:"center", borderRadius:"10px"}}>
                                    <div>
                                        <h2>
                                            Ring
                                        </h2>
                                    </div>

                                </Row>
                                
                                {/* G3 row */}
                                <Row>
                                    <Button variant="outline-warning" value="G3" onClick={(e) => handleChange(e)} style={{width:"100%", padding:""}}>
                                        G3
                                    </Button>
                                    
                                </Row>

                            </Col>


                            <Col xs="4"s="4"md="4" style={{backgroundColor:"", height:"100%", alignContent:"center"}}>
                                
                                <Button variant="outline-warning" value="G4" onClick={(e) => handleChange(e)} style={{width:"60%", height:"80%", padding:""}}>
                                    G4
                                </Button>
                            
                            </Col>


                        </Row>

                        <Row className='bottom_center_' style={{padding:"10px", backgroundColor:"", height:"20%"}}>
                            <Col xs="4" sm="4" md="4" style={{backgroundColor:"", height:"100%"}}>
                                <Button variant="outline-warning" value="F2" onClick={(e) => handleChange(e)} style={{width:"100%", height:"100%"}}>
                                    F2
                                </Button>
                            </Col>

                            <Col xs="4" sm="4" md="4" >
                                <Button variant="outline-warning" value="F3" onClick={(e) => handleChange(e)} style={{width:"100%", height:"100%"}}> 
                                    F3
                                </Button>
                            </Col>

                            <Col xs="4" sm="4" md="4" >
                                <Button variant="outline-warning" value="F4" onClick={(e) => handleChange(e)} style={{width:"100%", height:"100%"}}>
                                    F4
                                </Button>
                            </Col>

                        </Row>


                    </Col>

                    <Col className='right_map' xs="3" sm="3" md="3" style={{backgroundColor:"", alignContent:"center"}}>
                    
                        <Row style={{height:"30%"}}>
                            <Col>
                                <Button variant="outline-warning" value="C" onClick={(e) => handleChange(e)} style={{height:"80%", width:"100%"}}>
                                    Section C
                                </Button>
                            </Col>
                        </Row>



                        <Row style={{height:"30%"}}>
                            <Col>
                                <Button variant="outline-warning" value="D" onClick={(e) => handleChange(e)} style={{height:"80%", width:"100%"}}>
                                    Section D
                                </Button>
                            </Col>
                        </Row>



                        <Row style={{height:"30%"}}>
                            <Col>
                                <Button variant="outline-warning" value="E" onClick={(e) => handleChange(e)} style={{height:"80%", width:"100%"}}>
                                    Section E
                                </Button>
                            </Col>
                        </Row>


                    </Col>
                
                </Row>
                </center>
            
            
            
            </div>
        </div>
    );

}

export default TicketSectionSelection;
            
            
            
            
            
