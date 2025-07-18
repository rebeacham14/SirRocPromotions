import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability
import './BuyATicket.css';

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';


import { useEffect, useState} from 'react';
import {Row, Col, Card, Button, } from 'react-bootstrap';

import TicketSectionSelection from '../../components/TicketSectionSelection/TicketSectionSelection.js';
import TicketFullSeatSelection from '../../components/TicketFullSeatSelection/TicketFullSeatSelection.js';
import TicketSingleSeatSelection from '../../components/TicketSingleSeatSelection/TicketSingleSeatSelection.js';
import TicketFighterSelection from '../../components/TicketFighterSelection/TicketFighterSelection.js';



function BuyATicket () {

    const [availableTickets, setSeatAvailability] = useState(null)
    
    const [rowType, setRowType] = useState("");

    const [isAtEnd, setAtEnd] = useState(false);
    const [needInfo, setNeedInfo] = useState(true);

    const [user, setUser] = useState("")
    const [checkUser1, setCheckUser1] = useState("")
    const [checkUser2, setCheckUser2] = useState("")

    const [section, setSection] = useState("");
    const [seat, setSeatNumber] = useState("");
    const [price, setPrice] = useState(0);
    const [fighter, setFighter] = useState("");
    
    
    const [error, setError] = useState(null);
    

    useEffect(() => {
        const fetchSeatAvailability = async () => {
            const response = await fetch('/api/ticket');
            const json = await response.json()
            if(response.ok){
                setSeatAvailability(json)
            }
        }
        fetchSeatAvailability();
    }, [])

    const handleSeatChange = (e) => {
        setError(null)

        setSeatNumber(e.target.value);
       
        // calculate price   
        const seatX = e.target.value;
        const row = seatX.charAt(0)
        
        if(section.length==2){
            
        }

        switch(section.charAt(0)){
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
                if(row=="A"||row=="B"){setPrice(92.50)}
                else{setPrice(67.50)}
                break;
            case "F":            
                setPrice(92.50)
                break;
            case "G":
                setPrice(115.00)
                break;
        }
    };
    
    const handleFighter = (e) => {
        setError(null)

        // user selects fighter
        // setFighter(e.target.value)
        
        // if(fighter==""){console.log("empty fighter")}else{
        //     return;
        // }        
    };


    function onSetEmail(){
        // check if emails match
        if(checkUser1!="" && checkUser1 == checkUser2 && checkUser2.includes('@') && checkUser1.includes('.com') ){
            setError(null)
            setUser(checkUser1)
        }
        else{setError("waiting to match")}        

    }

    function onBuyClick() {
        // if all items have been selected 
        // if(fighter!=""){
        //     handleBuy();
        // } else{setError("need more info")}


        // if all items have been selected & user verified, buy ticket
        if(fighter!="" && checkUser1!="" && checkUser1 == checkUser2){
            setError(null)
            handleBuy();

        } else{setError("need more info")}
        
    }

    const handleBuy = async () => {
        
        // set variables for backend request
        const purchaseSeat = {
            //req.body sent to back-end
            "user":user,
            "section":section, 
            "seat":seat,
            "price":price, 
            "fighter":fighter        
        }        


        // send post request to back end
        const response = await fetch('https://sirrocpromotions.onrender.com/api/ticket/', {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(purchaseSeat),

        })

        const json = await response.json();

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            console.log("new ticket added")
        }

      
        
        
        
        // connect to stripe 

        const row = seat.charAt(0)

        switch(section.charAt(0)){
            case "S":            
                window.location.href = 'https://buy.stripe.com/28E8wQ1GD973bks7pPgbm00'; 
                break;
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
                if(row=="A"||row=="B"){
                    window.location.href ="https://buy.stripe.com/eVq00k4SPab72NW8tTgbm01"
                }
                else{
                    window.location.href ="https://buy.stripe.com/eVq28s0Cz9736089xXgbm02"
                }
                break;
            case "F":            
                window.location.href ="https://buy.stripe.com/bJe00k0Czern3S0aC1gbm03"
                    if(section.charAt(1)>1){
                        window.location.href = "https://buy.stripe.com/4gM7sMclhab7agodOdgbm04"
                    }
                break;
            case "G":
                window.location.href ="https://buy.stripe.com/14AcN60Cz0AxfAI11rgbm05"
                break;
        }

    };

    function handleClear() {
        window.location.reload()

    };


    
    return (
        <div className="container-fluid" style={{backgroundColor:"black", paddingBottom:"30vh", width:"100%"}}>
            <Row >

                {/* Side Bar - Abs. Sticky */}
                <Col xs="2" s="2" md="2" style={{backgroundColor:"", height:"60vh", position:"sticky", top:"15vh"}}>
                    

                    {/* Selectoin Tracker */}
                    <center>
                    <Row style={{backgroundColor:"", justifyContent:"center", marginTop:"20px"}}> 
                        <Col>
                            
                            {/* section */}
                            <Row style={{color:"white"}}>
                                <Col>
                                    <h4>
                                        Section:
                                    </h4>
                                </Col>
                            </Row>

                            <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", color:"white", width:"80%", padding:"10px", marginBottom:"10px", border:"2px solid #ffc107"}}>
                                <Row>
                                    <Col md="" className='sectionTracker' style={{display:"flex", justifyContent:"center"}}>
                                        <p>{section}</p>
                                    </Col>
                                </Row>
                            </Card>


                            {/* seat */}
                            <Row style={{color:"white"}}>
                                <Col>
                                    <h4>
                                        Seat:
                                    </h4>
                                </Col>
                            </Row>

                            <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", color:"white", width:"80%", padding:"10px", marginBottom:"10px", border:"2px solid #ffc107"}}>
                                <Row>
                                    <Col md="" className='rowTracker' style={{display:"flex", justifyContent:"center"}}>
                                        <p>{seat}</p>
                                    </Col>
                                </Row>
                            </Card>


                            {/* Fighter */}
                            <Row style={{color:"white"}}>
                                <Col>
                                    <h4>
                                        Fighter:
                                    </h4>
                                </Col>
                            </Row>

                            <Card style={{backgroundColor:"rgba(100, 90, 90, 0.2)", width:"80%", padding:"10px", marginBottom:"10px", border:"2px solid #ffc107"}}>
                                <Row style={{textAlign:"left", paddingLeft:"20%", color:"white"}}>
                                    <Col md="" className='fighterTracker' >
                                        <p>{fighter}</p>
                                    </Col>
                                </Row>
                            </Card>

                            <Row style={{marginTop:"30px"}}>
                                <Col style={{}}>
                                    <Button variant='outline-danger' onClick={handleClear} >
                                        Clear
                                    </Button>
                                </Col>
                                
                            </Row>




                        </Col>
                    </Row>
                    </center>
                </Col>


                {/* Main View */}
                <Col xs="10"s="10"md="10" style={{backgroundColor:""}}>

                    {/* Buy A Ticket header */}
                    <Row >
                        <Col xs="12"s="12"md="12" style={{paddingBottom:"30px", marginTop:"5vh"}}>
                            <center>
                                <h1 style={{color: "white"}}>
                                    Buy A Ticket
                                   
                                </h1>
                            </center>
                        </Col>
                        

                        {/* Email Form */}
                        <Col xs="12"s="12"md="12" style={{ backgroundColor:"", paddingBottom:"30px", marginTop:"", }}>
                            <input type="email" placeholder="Enter email" value={checkUser1} onChange={(e) => setCheckUser1(e.target.value)} style={{backgroundColor:"", border:"1px solid golds", borderRadius:"5px"}}>

                            </input>
                        </Col>
                        
                        <Col xs="12"s="12"md="12" style={{ backgroundColor:"", paddingBottom:"30px", marginTop:"", }}>
                            <input type="email" placeholder="Re-type email" value={checkUser2} onChange={(e) => setCheckUser2(e.target.value)} style={{backgroundColor:"", borderRadius:"5px"}}>
                                
                            </input>
                        </Col>
                        
                        <Col xs="6"s="6"md="6" style={{ backgroundColor:"", paddingBottom:"30px", marginTop:"", }}>
                            <Button onClick={onSetEmail}>
                                Set email
                            </Button>
                            <div>
                                <p style={{color:"white"}}>
                                    Email: {user}
                                </p>
                            </div>
                        </Col>


                    </Row>
                    
                    {/* Buy Button / Price */}
                    <center>
                    <Row style={{backgroundColor:""}}>
                        <Col xs="4"s="4"md="4">
                            <Button variant='warning' style={{width:"50%"}} onClick={onBuyClick}>
                                Buy
                            </Button>
                            { error!="" ? <p style={{color:"red"}}>{error}</p> : ""}
                        </Col>
                        
                        <Col xs="4"s="4"md="4" style={{backgroundColor:"", color:"white"}}>
                            <h1>${price}</h1>
                        </Col>


                    </Row>
                    </center>
                

                    <Row>
                        {availableTickets && availableTickets.map((seat) => {
                            <p key={seat}> {seat} </p>

                        })}


                    </Row>


                    {/* Insert Ticket Fighter Selection */}
                    {(isAtEnd) ? <TicketFighterSelection onFighterChange={handleFighter} setFighter={setFighter} /> :""}

                    
                    {/* Insert full Ticket Seat Selection */}
                    {(rowType == "full") ? <TicketFullSeatSelection onSeatChange={handleSeatChange} isAtEnd={setAtEnd}/> :""}

                    {/* Insert single Ticket Seat Selection */}
                    {(rowType == "single") ? <TicketSingleSeatSelection onSeatChange={handleSeatChange} isAtEnd={setAtEnd}/> :""}



                    {/* Insert Ticket Section Selection */}
                    <TicketSectionSelection onSectionChange={setSection} setSeat={setSeatNumber} rowType={setRowType} isAtEnd={setAtEnd} needInfo={setNeedInfo} setPrice={setPrice}/>

                    

                </Col>
            </Row>
        </div>
    );
};

export default BuyATicket;



