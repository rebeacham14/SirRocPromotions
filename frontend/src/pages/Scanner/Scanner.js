import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap capability


import { useRef, useEffect, useState} from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';


function Scanner () {



    // all non-scanned tickets
    const [purchasedSeats, setPurchasedSeats] = useState("")    
    // all scanned tickets
    const [scannedSeats, setScannedSeats] = useState([])
    // all tickets purchased but not scanned
    const [remainingSeats, setRemainingSeats] = useState([])
    

    const [purchasedTickets, setPurchasedTickets] = useState("")    

    const [scannedTickets, setScannedTickets] = useState("")

    const [remainingTickets, setRemainingTickets] = useState([])




    const [error, setError] = useState("");





    // set purchasedTickets, scannedTickets, and remainingTickets
    useEffect(() => {

        // load all tickets from mongo db
        const fetchSeatAvailability = async () => {
            const response = await fetch('https://sirrocpromotions.onrender.com/api/ticket');
            const json = await response.json()
            if(response.ok){


                // -------- create list of purchased/ scanned tickets
                let alreadyScannedTickets =[];
                let orderedTickets =[];

                // -------- create list of purchased/ scanned seats
                let alreadyScannedSeats =[];
                let orderedSeats =[];
                


                // for each ticket in the database
                json.forEach(ticket => {
                    

                    // ---------------- store Seats
                    // if scanned ? add to scanned list : add to purchased 
                    if(ticket.section == "scanned"){
                        alreadyScannedSeats.push(ticket.seat);
                    }
                    else{
                        orderedSeats.push(ticket.seat); 
                    }


                    // ---------------- store whole Tickets
                    if(ticket.section == "scanned"){
                        alreadyScannedTickets.push(ticket);
                    }
                    else{
                        orderedTickets.push(ticket); 
                    }



                });
                
                setPurchasedSeats(orderedSeats)
                setScannedSeats(alreadyScannedSeats)

                setPurchasedTickets(orderedTickets)
                setScannedTickets(alreadyScannedTickets)



                // -------- create list of remaining tickets
                let notScannedTickets =[];

                // -------- create list of remaining seats
                let notScannedSeats =[];



                // for each purchased seat
                notScannedSeats = orderedSeats.map(oSeat => {
                   
                    // if seat is not scanned, put in notscanned 
                    if(!alreadyScannedSeats.includes(oSeat)){
                        return oSeat
                    }
                    
                })

                
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



    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            
            let input = event.target.value;
            
            if( input !="" || input.length > 2){
                onScan(input)
                event.target.value = ""
            }
        }        
    };




    async function onScan (val) {
        let currentSeat = val

       
        // if already scanned
        if(scannedSeats.includes(currentSeat)){
            setError("this ticket has been scanned")
        }
        // else if hasnt been scanned  
        else if (remainingSeats.includes(currentSeat)){
            
            // make scanned record
            try{
                const scannedRecord = purchasedTickets.find(obj => obj.seat === currentSeat)
                scannedRecord.section = "scanned"

                // send record to mongo db
                const response = await fetch('https://sirrocpromotions.onrender.com/api/ticket/', {
                    method:"POST",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify(scannedRecord),
                });


                console.log("making new scan record")

            }
            catch(e){
                setError(e)
            }
            

            // refresh view

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




                    {/* data */}
                    <Row>
                        {/* Left side */}
                        <Col xs="12"sm="12" md="6" lg="6" style={{marginBottom:"50px"}}>
                            
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
                                {scannedSeats.map((seat, idx) => (
                                <Col xs="12"sm="12" md="12" lg="12" key={idx} style={{backgroundColor:"", height:"", textAlign:""}}>
                                
                                    <p style={{fontSize:"15px"}}>
                                        {seat}
                                    </p>
                                
                                </Col>                           
                                ))}
                                
                            </Row>


                        </Col>



                        {/* right side */}
                        <Col xs="12"sm="12" md="6" lg="6">
                        
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

                                {remainingSeats.map((seat, idx) => (
                                <Col xs="12"sm="12" md="12" lg="12" key={idx} style={{backgroundColor:"", height:"", textAlign:""}}>
                                
                                    <p style={{fontSize:"15px", color:"white"}}>
                                        {seat}
                                    </p>
                                
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
