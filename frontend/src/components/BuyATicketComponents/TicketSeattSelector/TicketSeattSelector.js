import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability

import SeatMap from "./SeatMap.png"


import { useEffect, useState, useRef} from 'react';


import {Row, Col, Button, Card} from 'react-bootstrap';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';


function TicketSeatSelector ({isMobile, seatsTaken, setSeats, setSection, setTotalPrice, setSeatPriceData }){



    const rowLetter = Array.from({ length: 15 }, (_, i) => String.fromCharCode(97 + i)); // Generate alphabet a-o(15)

    const seatsPerRowCountABT = Array.from({ length: 13 }, (_, i) => i + 1);
    const seatsPerRowCountRing = Array.from({ length: 20 }, (_, i) => i + 1);
    const seatsPerRowCountFTables = Array.from({ length: 4 }, (_, i) => i + 1);
    const seatsPerRowCountCDE = Array.from({ length: 10 }, (_, i) => i + 1).reverse();
    

    const continueRef = useRef(null);
    const seatsRef = useRef(null);
    const priceRef = useRef(null);
    
    let targetedSeats = [];

    let targetPrices = [];

    let totalPrice = 0;


    // ---------- End ------------


    function handleContinueSeats(){

        console.log("clicked")

        // submit all target seats to seats in BAT
        setSeats(targetedSeats.join("!-"))

        // set section
        if(targetedSeats.includes("!-")){
            setSection("Multi")

        }
        else{
            setSection(targetedSeats[0][0])
        }


        // submit price
        setTotalPrice(totalPrice)


        setSeatPriceData(targetPrices);
        console.log(targetPrices)

    };


    // ---------- Prices ------------


    function calculatePrice(val){
        
        let price = 0;
        const targetSection = val.charAt(0)
            

        switch(targetSection){

            case "S":

                price = 41.00;
                break;

            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
                
                const targetRow = val.charAt(1)

                if(targetRow=="A"||targetRow=="B"){price = 93.50}
                else{price = 68.50}
                break;
            case "G":
                price = 116.00
                break;
            case "F":                
                if (val.charAt(1) > 1){
                    price = 801.00
                }else{
                    price = 93.50
                }

                break;

        }


        return price;
    };


    // ---------- Seats ------------

        

    
    function checkListEpmty(){
        
        // if empty, disable continue
        if(targetedSeats.length === 0){
            // enable continue
            continueRef.current.disabled=true;
        }
        else{
            continueRef.current.disabled=false;

        }

        // show list in view
        seatsRef.current.value = targetedSeats;

        // show price
        priceRef.current.value = totalPrice;

        
    };


    
    function toSeatList(val, price){

        // check if value is already targeted
        if(targetedSeats.includes(val)){

            // if selected standing ... 
            if((val == "S"))
            {
                // promt if wants to add or remove
                const isConfirmed = window.confirm('Add another standing ticket? \n If not, it will be removed');
                
                if (isConfirmed) {

                    // add seat
                    targetedSeats.push(val)

                    // add price
                    totalPrice += price;

                    // update seat-price data
                    targetPrices.push(price)

                }
                else{

                    // find index of the seat in the list 
                    const idx = targetedSeats.indexOf(val)
                    // remove one item from the list
                    targetedSeats.splice(idx, 1);

                    // subtract price
                    totalPrice -= price;

                    // update seat data
                    // find index of the seat in the list 
                    const priceidx = targetPrices.indexOf(price)
                    // remove one item from the list
                    targetPrices.splice(priceidx, 1);

                }                
            }

            // if selected any other seat... 
            else{

                // find index of the seat in the list 
                const idx = targetedSeats.indexOf(val)
                // remove one item from the list
                targetedSeats.splice(idx, 1);

                // subtract price
                totalPrice -= price;

                // update seat data
                // find index of the seat in the list 
                const priceidx = targetPrices.indexOf(price)
                // remove one item from the list
                targetPrices.splice(priceidx, 1);

            }
        }
        else{

            // add seat
            targetedSeats.push(val)

            // add price
            totalPrice += price;

            // update seat data
            targetPrices.push(price)
        }

    };




    const handleClick = (e) => {

        // create seat object
        let seat = {"seat":e.target.value}

        // calculate price
        seat["price"] = calculatePrice(seat["seat"])



        // send to list
        toSeatList(seat["seat"], seat["price"])

        // check if list is empty
        checkListEpmty();            


        // show seats on view
        seatsRef.current.value = targetedSeats;

        // if select seat...
        if(seat["seat"] != "S"){
            
            // interactive change color
            if(e.target.style.backgroundColor == 'purple'){
                e.target.style.backgroundColor = ''
            }
            else{
                e.target.style.backgroundColor = 'purple';
            }

        }

        console.log(targetedSeats)
        console.log(targetPrices)
    
    };



    const renderSeats = () => {
        return(
            <div style={{}}>

                <TransformWrapper initialScale={0.4} minScale={0.1} maxScale={2} limitToBounds={false}>
                    <TransformComponent>

                        <Row style={{ backgroundColor:"", height:"200px", width:"4300px"}}>           

                            {/* Standing section */}
                            <Col xs="1"sm="1"md="1"lg="1" style={{backgroundColor:"", padding:"", width:"", display:"flex", flexDirection:"column"}}>
                                <Button 
                                    id={"S"} 
                                    variant='outline-warning' 
                                    value="S" 
                                    onClick={(e)=> {handleClick(e)}} 
                                    style={{backgroundColor:"", width:"85px", height:"100%", marginTop:""}}>
                                    
                                    <p>Standing</p>
                                </Button>
                            </Col>

                            {/* A - B sections */}
                            <Col xs="3"sm="3"md="3"lg="3" style={{backgroundColor:"", height:"750px", padding:"10px 0", margin:"20px 0 20px -100px", border:"2px solid gold" }}>

                                {/* A  */}
                                <Row style={{backgroundColor:"", height:"", padding:"", marginBottom:"100px"}}>

                                    <Col style={{backgroundColor:"", display:"", alignContent:"", justifyContent:""}}>
                                        <Row>
                                            {rowLetter.reverse().map((letter) => (
                                                <Col key={letter} style={{backgroundColor:"", width:""}}>
                                                    <Row>
                                                        <h6 style={{color:"white", }}>
                                                            {letter.toUpperCase()}
                                                        </h6>

                                                    </Row>

                                                    <div style={{ backgroundColor:"rgba(255, 193, 7, 0.1)", margin:"", height:"270px", width:"80%", border:"1px solid gold", borderRadius:"10px"}}>
                                                        
                                                        {seatsPerRowCountABT.map((num) => (
                                                        <Row key={num} style={{backgroundColor:"", height:"20px"}}>
                                                            <Col style={{backgroundColor:"", height:""}}>
                                                                <Button 
                                                                    id={"A"+letter.toUpperCase()+num}
                                                                    variant={((seatsTaken != null)&&(seatsTaken.includes("A"+letter.toUpperCase()+num)))? "outline-warning" :"warning"} 
                                                                    value={"A"+letter.toUpperCase()+num} 
                                                                    disabled={((seatsTaken != null)&&(seatsTaken.includes("A"+letter.toUpperCase()+num)))? true :false} 
                                                                    onClick={(e) => handleClick(e)} 
                                                                    style={{margin:"10px", height:"10px", width:"20px"}}>

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
                            
                                {/* B  */}
                                <Row style={{backgroundColor:"", height:"", padding:"", marginBottom:""}}>

                                    <Col style={{backgroundColor:"", display:"", alignContent:"", justifyContent:""}}>
                                        <Row>
                                            
                                            {rowLetter.map((letter) => (
                                                <Col key={letter} style={{backgroundColor:"", width:""}}>
                                                    <Row>
                                                        <h6 style={{color:"white", }}>
                                                            {letter.toUpperCase()}
                                                        </h6>

                                                    </Row>

                                                    <div style={{ backgroundColor:"rgba(255, 193, 7, 0.1)", margin:"", height:"270px", width:"80%", border:"1px solid gold", borderRadius:"10px"}}>
                                                        
                                                        {seatsPerRowCountABT.map((num) => (
                                                        <Row key={num} style={{backgroundColor:"", height:"20px"}}>
                                                            <Col style={{backgroundColor:"", height:""}}>
                                                                <Button 
                                                                    id={"B"+letter.toUpperCase()+num} 
                                                                    variant={((seatsTaken != null)&&(seatsTaken.includes("B"+letter.toUpperCase()+num)))? "outline-warning" :"warning"} 
                                                                    value={"B"+letter.toUpperCase()+num} 
                                                                    disabled={((seatsTaken != null)&&(seatsTaken.includes("B"+letter.toUpperCase()+num)))? true :false} 
                                                                    onClick={(e) => handleClick(e)} style={{margin:"10px", height:"10px", width:"20px"}}>
                                                                    

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

                            </Col>



                            {/* Ringside seats */}
                            <Col xs="4"sm="4"md="4"lg="4" style={{backgroundColor:"", padding:"", width:""}}>
                                
                                {/* behind the ring */}
                                <Row style={{backgroundColor:"", display:"flex", alignContent:"center", width:"80%", height:"100px", marginTop:"", border:"2px solid gold"}}>
                                    
                                    {/* top left */}
                                    <Col xs="5"sm="5"md="5"lg="5">
                                        <Row>
                                            {seatsPerRowCountABT.map((num) => (
                                                <Col key={num} style={{height:""}}>
                                                    <Button 
                                                        id={"F1-"+num} 
                                                        variant={((seatsTaken != null)&&(seatsTaken.includes("F1-"+num)))? "outline-warning" :"warning"} 
                                                        value={"F1-"+num} disabled={((seatsTaken != null)&&(seatsTaken.includes("F1-"+num)))? true :false} 
                                                        onClick={(e) => handleClick(e)} 
                                                        style={{margin:"0 -8px", height:"20px", width:"20px"}}>

                                                    </Button>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>

                                    {/* empty fill */}
                                    <Col xs="2"sm="2"md="2"lg="2">

                                    </Col>
                                    
                                    {/* top right */}
                                    <Col xs="5"sm="5"md="5"lg="5">
                                        <Row>
                                            {seatsPerRowCountABT.map((num) => (
                                                <Col key={num} style={{height:""}}>
                                                    <Button variant={((seatsTaken != null)&&(seatsTaken.includes("F1-"+(num+13))))? "outline-warning" :"warning"} value={"F1-"+(num+13)} disabled={((seatsTaken != null)&&(seatsTaken.includes("F1-"+(num+13))))? true :false} onClick={(e) => handleClick(e)} style={{margin:"0 -8px", height:"20px", width:"20px"}}>

                                                    </Button>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                                </Row >


                                {/* ring */}
                                <Row style={{backgroundColor:"", display:"flex", alignContent:"center", width:"80%", height:"600px", marginBottom:"20px", border:"2px solid gold"}}>
                                    
                                    {/* Left */}
                                    <Col xs="2"sm="2"md="2"lg="2">
                                        <Row style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
                                            {seatsPerRowCountRing.reverse().map((num) => (
                                                <Col key={num} style={{backgroundColor:"rgba(255, 0, 0, 0.5)", height:"", width:"50%", borderRadius:"5px"}}>
                                                    <Button variant={((seatsTaken != null)&&(seatsTaken.includes("G"+(num+60))))? "outline-warning" :"warning"} value={"G"+(num+60)} disabled={((seatsTaken != null)&&(seatsTaken.includes("G"+(num+60))))? true :false} onClick={(e) => handleClick(e)} style={{margin:"", height:"10px", width:"20px"}}>

                                                    </Button>
                                                </Col>
                                            ))}

                                        </Row>
                                    
                                    
                                    </Col>

                                    {/* Center (top + bottom) */}
                                    <Col xs="8"sm="8"md="8"lg="8">

                                        {/* top */}
                                        <Row style={{ backgroundColor:"", height:"30%"}}>
                                            {seatsPerRowCountRing.reverse().map((num) => (
                                                <Col key={num} style={{backgroundColor:"rgba(255, 0, 0, 0.5)", alignContent:"center", height:"50%", borderRadius:"5px"}}>
                                                    <Button variant={((seatsTaken != null)&&(seatsTaken.includes("G"+(num))))? "outline-warning" :"warning"} value={"G"+num} disabled={((seatsTaken != null)&&(seatsTaken.includes("G"+num)))? true :false} onClick={(e) => handleClick(e)} style={{margin:"0 -12px", height:"20px", width:"20px"}}>
                                                    </Button>
                                                </Col>
                                            ))}
                                        </Row>

                                        {/* Ring */}
                                        <Row style={{display:"flex", alignItems:"flex-end", height:"40%"}}>
                                            <Col>
                                                <Card style={{ backgroundColor:"#ffc107", height:"200px", width:"80%", padding:"10%", color:"black", alignContent:"center"}}>
                                                    <h1>
                                                        Ring
                                                    </h1>
                                                </Card>
                                                
                                            </Col>
                                        </Row>

                                        {/* bottom */}
                                        <Row style={{display:"flex", alignItems:"flex-end", height:"30%"}}>
                                            {seatsPerRowCountRing.reverse().map((num) => (
                                                <Col key={num} style={{backgroundColor:"rgba(0, 0, 255, 0.5)", height:"50%", alignContent:"center", borderRadius:"5px"}}>
                                                    <Button variant={((seatsTaken != null)&&(seatsTaken.includes("G"+(num+40))))? "outline-warning" :"warning"} value={"G"+(num+40)} disabled={((seatsTaken != null)&&(seatsTaken.includes("G"+(num+40))))? true :false} onClick={(e) => handleClick(e)} style={{margin:"0 -12px", height:"20px", width:"20px"}}>

                                                    </Button>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>

                                    {/* Right */}
                                    <Col xs="2"sm="2"md="2"lg="2">
                                        <Row style={{display:"flex", flexDirection:"column", alignContent:"center"}}>
                                            {/* for each seat, make {col-button} */}
                                            {seatsPerRowCountRing.reverse().map((num) => (
                                                <Col key={num} style={{backgroundColor:"rgba(0, 0, 255, 0.5)", width:"50%", borderRadius:"5px"}}>
                                                    <Button variant={((seatsTaken != null)&&(seatsTaken.includes("G"+(num+20))))? "outline-warning" :"warning"} value={"G"+(num+20)} disabled={((seatsTaken != null)&&(seatsTaken.includes("G"+(num+20))))? true :false} onClick={(e) => handleClick(e)} style={{margin:"", height:"10px", width:"20px"}}>

                                                    </Button>
                                                </Col>
                                            ))}

                                        </Row>
                                    
                                    
                                    </Col>
                                </Row>


                                {/* Individual tables */}
                                <Row  style={{backgroundColor:"", display:"flex", alignContent:"center", width:"80%", height:"100px", marginBottom:"20px", border:"2px solid gold"}}>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <center>
                                                    <h6 style={{color:"white"}}>
                                                        Individual Tables: $800
                                                    </h6>
                                                </center>
                                            </Col>
                                        </Row>
                                        <Row>
                                            {seatsPerRowCountFTables.map((num) => (
                                                <Col key={num} style={{height:""}}>
                                                    <Button variant={((seatsTaken != null)&&(seatsTaken.includes("F"+(num+1)+"T")))? "outline-warning" :"warning"}  value={"F"+(num+1)+"T"} disabled={((seatsTaken != null)&&(seatsTaken.includes("F"+(num+1)+"T")))? true :false} onClick={(e) => handleClick(e)} style={{margin:"", height:"50px", width:"50px"}}>

                                                    </Button>
                                                </Col>
                                            ))}
                                        </Row>
                                    </Col>
                                </Row >


                                


                            </Col>
                            

                            {/* C - E sections */}
                            <Col xs="4"sm="4"md="4"lg="4" style={{backgroundColor:"", height:"900px", padding:"10px 0", margin:"20px 0",  border:"2px solid  gold" }}>

                                {/* C  */}
                                <Row style={{backgroundColor:"", height:"", padding:"", marginBottom:"50px"}}>

                                    <Col style={{backgroundColor:"", display:"", alignContent:"", justifyContent:""}}>
                                        <Row>
                                            {rowLetter.reverse().map((letter) => (
                                                <Col key={letter} style={{backgroundColor:"", width:""}}>
                                                    <Row>
                                                        <h6 style={{color:"white", }}>
                                                            {letter.toUpperCase()}
                                                        </h6>

                                                    </Row>

                                                    <div style={{ backgroundColor:"rgba(255, 193, 7, 0.1)", margin:"", height:"220px", width:"80%", border:"1px solid gold", borderRadius:"10px"}}>
                                                        
                                                        {seatsPerRowCountCDE.map((num) => (
                                                        <Row key={num} style={{backgroundColor:"", height:"20px"}}>
                                                            <Col style={{backgroundColor:"", height:""}}>
                                                                <Button variant={((seatsTaken != null)&&(seatsTaken.includes("C"+letter.toUpperCase()+num)))? "outline-warning" :"warning"} value={"C"+letter.toUpperCase()+num} disabled={((seatsTaken != null)&&(seatsTaken.includes("C"+letter.toUpperCase()+num)))? true :false} onClick={(e) => handleClick(e)} style={{margin:"10px", height:"10px", width:"20px"}}>

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
                            
                                {/* D  */}
                                <Row style={{backgroundColor:"", height:"", padding:"", marginBottom:"50px"}}>

                                    <Col style={{backgroundColor:"", display:"", alignContent:"", justifyContent:""}}>
                                        <Row>
                                            
                                            {rowLetter.map((letter) => (
                                                <Col key={letter} style={{backgroundColor:"", width:""}}>
                                                    <Row>
                                                        <h6 style={{color:"white", }}>
                                                            {letter.toUpperCase()}
                                                        </h6>

                                                    </Row>

                                                    <div style={{ backgroundColor:"rgba(255, 193, 7, 0.1)", margin:"", height:"220px", width:"80%", border:"1px solid gold", borderRadius:"10px"}}>
                                                        
                                                        {seatsPerRowCountCDE.map((num) => (
                                                        <Row key={num} style={{backgroundColor:"", height:"20px"}}>
                                                            <Col style={{backgroundColor:"", height:""}}>
                                                                <Button variant={((seatsTaken != null)&&(seatsTaken.includes("D"+letter.toUpperCase()+num)))? "outline-warning" :"warning"} value={"D"+letter.toUpperCase()+num} disabled={((seatsTaken != null)&&(seatsTaken.includes("D"+letter.toUpperCase()+num)))? true :false} onClick={(e) => handleClick(e)} style={{margin:"10px", height:"10px", width:"20px"}}>
                                                                    {/* disabled={seatsTaken.includes(letter.toUpperCase()+num)} */}
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


                                {/* E  */}
                                <Row style={{backgroundColor:"", height:"", padding:"", marginBottom:"50px"}}>

                                    <Col style={{backgroundColor:"", display:"", alignContent:"", justifyContent:""}}>
                                        <Row>
                                            
                                            {rowLetter.map((letter) => (
                                                <Col key={letter} style={{backgroundColor:"", width:""}}>
                                                    <Row>
                                                        <h6 style={{color:"white", }}>
                                                            {letter.toUpperCase()}
                                                        </h6>

                                                    </Row>

                                                    <div style={{ backgroundColor:"rgba(255, 193, 7, 0.1)", margin:"", height:"220px", width:"80%", border:"1px solid gold", borderRadius:"10px"}}>
                                                        
                                                        {seatsPerRowCountCDE.map((num) => (
                                                        <Row key={num} style={{backgroundColor:"", height:"20px"}}>
                                                            <Col style={{backgroundColor:"", height:""}}>
                                                                <Button variant={((seatsTaken != null)&&(seatsTaken.includes("E"+letter.toUpperCase()+num)))? "outline-warning" :"warning"} value={"E"+letter.toUpperCase()+num} disabled={((seatsTaken != null)&&(seatsTaken.includes("E"+letter.toUpperCase()+num)))? true :false} onClick={(e) => handleClick(e)} style={{margin:"10px", height:"10px", width:"20px"}}>

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


                            </Col>


                        </Row>

                    </TransformComponent>
                </TransformWrapper>




            </div>
        );
    };





    const DesktopView = () => {
        return(

            <div className='container-fluid'> 
                <center>

                <Row>


                    {/* price */}
                    <Col xs="6"s="6"md="6"lg="6">
                        {/* label */}
                        <Row style={{color:"white"}}>
                            <Col>
                                <h5>
                                    Price:
                                </h5>
                            </Col>
                        </Row>

                        <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", color:"white", width:"50%", padding:"10px", border:"2px solid #ffc107"}}>
                            <Row>
                                <Col style={{display:"flex", justifyContent:"center"}}>
                                    $<input 
                                        ref={priceRef}
                                        type="text" 
                                        value="" 
                                        disabled={true}
                                        style={{backgroundColor:"transparent", color:"white", width:"50%", fontSize:"15px", textAlign:"center"}}
                                    /> 
                                </Col>
                            </Row>
                        </Card>
                    </Col>


                    {/* seats */}
                    <Col xs="6"s="6"md="6"lg="6">
                        {/* label */}
                        <Row style={{color:"white"}}>
                            <Col>
                                <h5>
                                    Seats:
                                </h5>
                            </Col>
                        </Row>

                        <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", color:"white", width:"100%", padding:"10px", border:"2px solid #ffc107"}}>
                            <Row>
                                <Col md="" className='' style={{display:"flex", justifyContent:"center"}}>
                                    <input 
                                        ref={seatsRef}
                                        type="text" 
                                        value="" 
                                        disabled={true}
                                        style={{backgroundColor:"transparent", width:"80%", color:"white"}}
                                    /> 

                                </Col>
                            </Row>
                        </Card>
                    </Col>

                </Row>


                <Row style={{ backgroundColor:"rgba(100, 90, 90, 0.2)", height:"430px", width:"100%", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                    <Col style={{backgroundColor:"", height:""}}>
                        {/* Select Seat Label */}
                        <Row style={{marginBottom:"20px"}}>
                            
                            <Col xs="4"sm="4"md="2"lg="2">
                                <Button ref={continueRef} variant="warning" style={{width:""}} onClick={()=>{handleContinueSeats()}}>
                                    Continue
                                </Button>
                            </Col>
                            
                            <Col xs="5"sm="5"md="7"lg="7">
                                <h4 style={{color:'white'}}>
                                    Select Seat:
                                </h4>                        
                            </Col>
                            
                            {/* <Col xs="3"sm="3"md="2"lg="2">
                                <Button variant="outline-danger" style={{width:""}} onClick={()=>{handleSeatClear()}}>
                                    Clear
                                </Button>
                            </Col> */}
                            
                            <Col></Col>


                        </Row>

                        {/* Main View */}
                        <Row style={{ overflow:"scroll", height:"250px"}}>
                            
                            <Col style={{backgroundColor:"", height:"", width:""}}>
                                
                                {renderSeats()}

                            </Col>
                        </Row>
                        <Row>
                            <Col style={{border:"1px solid #ffc107"}}>
                            
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{border:"1px solid #ffc107", height:"5vh", padding:"10px" , margin:"20px 0 0 0", color:"white", fontSize:"0.8rem", textAlign:"center"}}>
                                <div>
                                    <h6>
                                        Drag and zoom the screen above!

                                    </h6>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </center>

            {/* Show seat map */}
            <Row style={{ backgroundColor:"rgba(100, 90, 90, 0.2)", height:"", width:"100%", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                <Col>
                    <Row>
                        <Col>
                            <center>
                            <h4 style={{color:'white'}}>
                                Seat Map
                            </h4>
                            </center>
                        </Col>
                    </Row>
                    <Row style={{ backgroundColor:"", backgroundImage: `url(${SeatMap})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height:"20vh"}}>


                    </Row>
                </Col>
            </Row>



            </div>

        );

    };


    const MobileView = () => {
        return(


            <div className='container-fluid'> 
                <center>

                <Row>


                    {/* price */}
                    <Col xs="6"s="6"md="6">
                        {/* label */}
                        <Row style={{color:"white"}}>
                            <Col>
                                <h5>
                                    Price:
                                </h5>
                            </Col>
                        </Row>

                        <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", color:"white", width:"80%", padding:"10px", border:"2px solid #ffc107"}}>
                            <Row>
                                <Col style={{display:"flex", justifyContent:"center"}}>
                                    $<input 
                                        ref={priceRef}
                                        type="text" 
                                        value="" 
                                        disabled={true}
                                        style={{backgroundColor:"transparent", color:"white", width:"80%"}}
                                    /> 
                                </Col>
                            </Row>
                        </Card>
                    </Col>





                    {/* seats */}
                    <Col xs="6"s="6"md="6">
                        {/* label */}
                        <Row style={{color:"white"}}>
                            <Col>
                                <h5>
                                    Seats:
                                </h5>
                            </Col>
                        </Row>

                        <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", color:"white", width:"80%", padding:"10px", border:"2px solid #ffc107"}}>
                            <Row>
                                <Col md="" className='' style={{display:"flex", justifyContent:"center"}}>
                                    <input 
                                        ref={seatsRef}
                                        type="text" 
                                        value="" 
                                        disabled={true}
                                        style={{backgroundColor:"transparent", color:"white"}}
                                    /> 

                                </Col>
                            </Row>
                        </Card>
                    </Col>

                </Row>


                <Row style={{ backgroundColor:"rgba(100, 90, 90, 0.2)", height:"350px", width:"100%", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                    <Col style={{backgroundColor:"", height:""}}>
                        {/* Select Seat Label */}
                        <Row style={{marginBottom:"10px", alignItems:"center"}}>

                            <Col xs="12"sm="4"md="4"lg="4">
                                <Button ref={continueRef} variant="warning" style={{width:""}} onClick={()=>{handleContinueSeats()}}>
                                    Continue
                                </Button>
                            </Col>
                            
                            <Col xs="12"sm="5"md="5"lg="5">
                                <h4 style={{color:'white'}}>
                                    Select Seat:
                                </h4>                        
                            </Col>                            

                        </Row>

                        {/* Main View */}
                        <Row style={{ overflow:"scroll"}}>
                         
                            <Col style={{backgroundColor:"", height:"", width:""}}>
                                
                                {renderSeats()}

                            </Col>
                        </Row>
                        <Row>
                            <Col style={{border:"1px solid #ffc107"}}>
                            
                            </Col>
                        </Row>
                        <Row style={{marginTop:"20px"}}>
                            <Col style={{border:"1px solid #ffc107", height:"40px", padding:"10px" , color:"white", fontSize:"13px", textAlign:"center"}}>
                                <div>
                                    <p>
                                        Drag and zoom the screen above!
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </center>


                {/* Show seat map */}
                <Row style={{ backgroundColor:"rgba(100, 90, 90, 0.2)", height:"300px", width:"100%", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
                    <Col>
                        <Row>
                            <Col>
                                <center>
                                <h4 style={{color:'white'}}>
                                    Seat Map
                                </h4>
                                </center>
                            </Col>
                        </Row>
                        <Row style={{backgroundImage: `url(${SeatMap})`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height:"200px", marginTop:""}}>


                        </Row>
                    </Col>
                </Row>
            </div>


        );
      
    };


    return (

        <div className='container-fluid'>


            {/* Contents */}
            {isMobile ? <MobileView /> : <DesktopView />}
                

                        
        </div>
    );

}

export default TicketSeatSelector;
