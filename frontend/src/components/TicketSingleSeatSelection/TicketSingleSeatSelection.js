import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import {useEffect, useState} from 'react';
import {Row, Col, Button, Card} from 'react-bootstrap';


export function TicketSingleSeatSelection ({ onSeatChange, isAtEnd }){
    

    const rowLetter = Array.from({ length: 15 }, (_, i) => String.fromCharCode(97 + i)); // Generate alphabet a-o(15)
    const seatsPerRowCount = Array.from({ length: 10 }, (_, i) => i + 1);
    

    const handleClick = (e) => {

        onSeatChange(e);
        isAtEnd(true);
    };

    
    return (

        <div className='container-fluid' style={{width:"100%"}}>
                      
            <div className='horizontal sroll window' style={{overflowX:"scroll", height:"", alignContent:"center"}} >
                <center>
                <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", display:"flex", justifyContent:"space-evenly", width:"900px", height:"400px", maxHeight:"", minHeight:"", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                    
                    <Col xs="12"s="12"m="12" style={{}}>
                        <h2 style={{color:'white'}}>
                            Choose Seat:
                        </h2>
                    </Col>
                    

                    <Col xs=""s=""m="" style={{height:"200px", border:"1px solid #ffc107", borderRadius:"10px", alignContent:"center"}}>

                        <Row style={{marginBottom:"40px"}}>
                            <center>
                            <Card style={{width:"70%", backgroundColor:"#ffc107"}}>
                                <h4>Ring</h4>
                            </Card>
                            </center>

                        </Row>

                        <Row style={{width:"800px"}}>
                            {seatsPerRowCount.map((num) => (
                                <Col key={num} style={{height:""}}>
                                    <Button variant='outline-warning' value={num} onClick={(e) => handleClick(e)} style={{margin:"", height:"50px", width:"40px"}}>
                                        {num}
                                    </Button>
                                </Col>
                            ))}

                        </Row>
                        
                    </Col>

                </Row>
                </center>
            </div>
        </div>
    );

}

export default TicketSingleSeatSelection;
            
            
            
            
            
