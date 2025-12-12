    <Row style={{backgroundColor:"rgba(100, 90, 90, 0.2)", height:"25vh", width:"50%", padding:"20px", margin:"20px", border:"2px solid #ffc107", borderRadius:"10px"}}>
        <Col>
            <Row style={{marginBottom:"20px"}}>



                <Col xs=""sm=""md=""lg="" style={{ backgroundColor:"", marginTop:""}}>
                    <input ref={inputRef1} type="email" placeholder="Enter email"  style={{backgroundColor:"", paddingLeft:"10px", border:"2px solid black", borderRadius:"5px"}}>

                    </input>
                </Col>
                
                <Col xs=""sm=""md=""lg="" style={{ backgroundColor:"", marginTop:""}}>
                    <input ref={inputRef2} type="email" placeholder="Re-type email" style={{backgroundColor:"", paddingLeft:"10px", border:"2px solid black", borderRadius:"5px"}}>
                        
                    </input>
                </Col>
            </Row>

            <Row style={{marginBottom:"20px"}}>
                <Col>
                    <center>
                    <Button variant="outline-warning" onClick={onSetEmail} style={{width:"50%"}}>
                        Set email
                    </Button>
                    </center>
                </Col>
            </Row>

        </Col>

        
        <Col xs="12"sm="12"md="12"lg="12" style={{ backgroundColor:"", paddingBottom:"", marginTop:""}}>
            
            <div style={{display:"block"}}>
                <p style={{color:"white"}}>
                    Email: {user}
                </p>
            </div>
        </Col>
        
    </Row>

