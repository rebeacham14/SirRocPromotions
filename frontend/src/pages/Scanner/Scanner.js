import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability


import { useRef, useEffect, useState} from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


function Scanner () {


    // all tickets
    const [purchasedTickets, setPurchasedTickets] = useState([])    

    // all non-scanned tickets
    const [purchasedSeats, setPurchasedSeats] = useState([])    
    // all scanned tickets
    const [scannedSeats, setScannedSeats] = useState([])
    // all tickets purchased but not scanned
    const [remainingSeats, setRemainingSeats] = useState([])
    
    // error reader
    const [error, setError] = useState("");


    // set purchasedTickets, scannedTickets, and remainingTickets
    useEffect(() => {

        // load all tickets from mongo db
        const fetchSeatAvailability = async () => {
            const response = await fetch('https://sirrocpromotions.onrender.com/api/ticket');
            
            const json = await response.json()
            
            if(response.ok){

                //  initialize : tickets [purchased]
                let orderedTickets = [];
                
                //  initialize : seats 
                /*  1. [purchased]    */ let orderedSeats =[];
                /*  2. [scanned]      */ let alreadyScannedSeats =[];
                /*  3. [remaining]    */ let notScannedSeats =[];
                
                /////////////////////////////////////////////////
                /////////////////////////////////////////////////
                
                // seat:
                // 0:[user], 1:[seat], 2:[isScanned]

                //1. // per **Mongo-Obj** --> 
                json.forEach(ticket => {
                    // get: purchased tickets 
                    orderedTickets.push(ticket)
                    
                    // get: seats 1)[purchsed] +++ [user], [seats], [isScanned]
                    let isScanned = false;
                    if(ticket.section=="scanned"){isScanned=true}
                    orderedSeats.push([ticket.user, ticket.seat, isScanned]); 

                });
                // save : purchased tickets
                setPurchasedTickets(orderedTickets)
                // save : purchased seats 
                setPurchasedSeats(orderedSeats)

                // 2. // per [seat] --> 
                orderedSeats.forEach(ticket => {
                    // get: seats 2)[scanned] +++ [if recoreded as "scanned"...]
                    if(ticket[2] === true){
                        alreadyScannedSeats.push(ticket);
                    }
                    console.log(ticket.section==true)
                });
                // save : scanned seats
                setScannedSeats(alreadyScannedSeats)

                // 3. // per [ seat ] -->
                orderedSeats.forEach((tixPurchased) => {

                    let isScanned = false;
                    // notScannedSeats.push(tixPurchased)

                    alreadyScannedSeats.forEach((tixScanned) => {
                        
                        if(tixPurchased[1] == tixScanned[1]){
                            isScanned = true
                        }

                    });

                    if(isScanned == false){
                        notScannedSeats.push(tixPurchased)
                    }
                                    
                })
                // remaining seats
                setRemainingSeats(notScannedSeats)


            } else {
                setError("Error fetching all tickets");
            }
        }
        fetchSeatAvailability();
    }, []);


    // control input
    const inputRef = useRef(null);

    useEffect(() => {
        // Example: Focus the input when the component mounts
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);   


    function handleClear() {
        window.location.reload()

    };


    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            let input = event.target.value;
            
            if( input !="" || input.length > 1){
                onScanSeat(input)
                event.target.value = ""
            }
            else if (input == "S"){
                onScanStanding(input)
                event.target.value = ""
            }
        }        
    };


    async function onScanStanding (val) {
        console.log("standing scanned")
    };


    async function onScanSeat (currentSeat) {

        let scannedRecord = "";

        // make scanned record
        try{

            // search purchased seats for scanned seat
            try{
                // search purchased tickets, does a seat match with current barcode?
                scannedRecord = purchasedTickets.find(ticket => ticket.seat === currentSeat) 
                
                // modify record to send to backend
                scannedRecord.section = "scanned"
                scannedRecord.seats = currentSeat

            }catch{
                scannedRecord = "";
                setError("seat not found")
            }


            // send record of scanned seat to backend
            // if ticket successfully found
            if(scannedRecord!==""){

                // send found-ticket to mongo db
                const response = await fetch('https://sirrocpromotions.onrender.com/api/ticket/', {
                    method:"POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify(scannedRecord),
                });

                // refresh view
                handleClear();
            }
            else{
                setError("scan unsuccessful")
            }

        }
        catch(e){
            setError(e)
        }

    };


    return (

        <div className="container-fluid" style={{backgroundColor:"black", height:"", width:"", paddingTop:"50px"}}>

            <Row>

                <Col>


                    {/* header */}
                    <Row>
                        <Col style={{justifyItems:"center"}}>
                            <h1 style={{color:"gold"}}>
                                Scanner
                            </h1>
                        
                        </Col>

                    </Row>
                
                

                    {/* input bar */}
                    <Row style={{backgroundColor:"red", padding:"20px 0 20px 0", marginBottom:"20px", display:"flex"}}>

                        <Col style={{}}>
                            <input 
                            id="input"
                            type="text" 
                            ref={inputRef}
                            placeholder="scan barcode"
                            // onChange={(e)=>{onScan(e)}}
                            onKeyDown={handleKeyDown}
                            style={{width:"30%"}}
                            />
                        </Col>

                    </Row>

                    {/* error */}
                    <Row style={{marginBottom:"40px", color:"red"}}>
                        <Col>
                            {error}
                        </Col>
                    </Row>


                    {/* data */}
                    <Row>


                        {/* Left side */}
                        <Col xs="6"sm="6" md="6" lg="6" style={{marginBottom:"50px"}}>
                            
                            {/* Scanned seats header */}
                            <Row>
                                <Col>
                                    <h1 style={{color:"white"}}>
                                        Scanned seats
                                    </h1>
                                </Col>
                            </Row>

                            {/* Scanned seats display */}
                            <Row>
                                {scannedSeats.map((ticket, idx) => (
                                    <Col xs="12"sm="12" md="12" lg="12" key={idx} style={{backgroundColor:"", height:"", textAlign:""}}>
                                            {/* if ticket exists, show it */}
                                            { ticket ? 
                                                <Row>
                                                    <Col xs="6"sm="6" md="6" lg="6" style={{overflow:"scroll"}}>
                                                        <p style={{fontSize:"15px", color:"white"}}>
                                                            {ticket[0]}
                                                        </p>
                                                    </Col>

                                                    <Col>
                                                        <p style={{fontSize:"15px", color:"white"}}>
                                                            {ticket[1]}
                                                        </p>
                                                    </Col>
                                                </Row>

                                                : ""
                                            }
                                            
                                    </Col>                                
                                ))}
                            </Row>

                        </Col>


                        {/* right side */}
                        <Col xs="6"sm="6" md="6" lg="6">
                        
                            {/* remaining seats header */}
                            <Row>
                                <Col>
                                    <h1 style={{color:"white"}}>
                                        Remaining seats
                                    </h1>
                                </Col>
                            </Row>



                            {/* remaining seats display */}
                            <Row>
                                {remainingSeats.map((ticket, idx) => (
                                    <Col xs="12"sm="12" md="12" lg="12" key={idx} style={{backgroundColor:"", height:"", textAlign:""}}>
                                            {/* if ticket exists, show it */}
                                            { ticket ? 
                                                <Row>
                                                    <Col xs="6"sm="6" md="6" lg="6" style={{overflow:"scroll"}}>
                                                        <p style={{fontSize:"15px", color:"white"}}>
                                                            {ticket[0]}
                                                        </p>
                                                    </Col>

                                                    <Col>
                                                        <p style={{fontSize:"15px", color:"white"}}>
                                                            {ticket[1]}
                                                        </p>
                                                    </Col>
                                                </Row>

                                                : ""
                                            }
                                            
                                    </Col>                                
                                ))}
                            </Row>



                        </Col>


                    </Row>
                
                
                </Col>


            </Row>

        </div>

    );

};


export default Scanner;
