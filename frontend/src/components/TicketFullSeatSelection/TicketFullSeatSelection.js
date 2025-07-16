import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import {useEffect, useState} from 'react';
import {Row, Col, Button, Card} from 'react-bootstrap';


export function TicketFullSeatSelection ({onSeatChange, isAtEnd }){
    

    const rowLetter = Array.from({ length: 15 }, (_, i) => String.fromCharCode(97 + i)); // Generate alphabet a-o(15)
    const seatsPerRowCount = Array.from({ length: 10 }, (_, i) => i + 1);
    

    const handleClick = (e) => {

        onSeatChange(e);
        isAtEnd(true);
    };

    
    return (

        <div className='container-fluid' style={{width:"100%"}}>
                      

            <center>
            <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", display:"flex", justifyContent:"space-evenly", width:"", height:"1000px", maxHeight:"", minHeight:"", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                
                <Col xs="12"s="12"m="12" style={{}}>
                    <h2 style={{color:'white'}}>
                        Choose Row & Seat:
                    </h2>
                </Col>
                

                 <Col xs=""s=""m="" style={{height:"850px", border:"1px solid #ffc107", borderRadius:"10px", alignContent:"center", overflow:"scroll"}}>
                    <Row style={{display:"flex", alignItems:"center", width:"2000px"}}>
                        
                        
                        <Col style={{}}>
                            <Card style={{height:"500px", backgroundColor:"#ffc107", display:"block", alignContent:"center"}}>
                                <h4 style={{}}>
                                    Ring
                                </h4>
                            </Card>
                        </Col>
                        
                        
                        
                        {rowLetter.map((letter) => (
                            <Col key={letter} style={{backgroundColor:""}}>
                                <Row>
                                    <h4 style={{color:"white"}}>
                                        {letter.toUpperCase()}
                                    </h4>

                                </Row>

                                <div value={letter} onClick={(e) => handleClick(e)} style={{margin:"10px", height:"700px", width:"70%", border:"1px solid gold", borderRadius:"10px", alignContent:"center"}}>
                                    
                                    {seatsPerRowCount.map((num) => (
                                       <Row key={num}>
                                            <Col style={{height:""}}>
                                                <Button variant='outline-warning' value={letter.toUpperCase()+num} onClick={(e) => handleClick(e)} style={{margin:"10px", height:"50px", width:"50px"}}>
                                                    {num}
                                                </Button>
                                            </Col>
                                       </Row>
                                    ))}
                                    
                                </div>                                
                            </Col>
                        ))}




                    </Row>

                </Col>

            
            </Row>
            </center>
            
        </div>
    );

}

export default TicketFullSeatSelection;
            
            
            
            
            
