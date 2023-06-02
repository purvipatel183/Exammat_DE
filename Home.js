import React from "react";
import {Container,Row ,Col,Button} from 'react-bootstrap'
import Navbar from "./Componets/Navbar";
import './home.css'
import { useNavigate } from "react-router-dom";
const Home = () =>{
    const navigate =useNavigate();

    
    return (
    <>
        <Navbar/>
        <div className="homebg" style={{width:'100%',height:'500px'}}>
            <h2>Welcome to Exam_material.edu </h2>
            <h4>here we are providing class notes ,Videos and events of college and gtu also External events. </h4>
            <div style={{height:'300px'}}></div>
            <div className="button" style={{background:'none',textAlign:'center'}}>
                    <Button onClick={()=>navigate('Signin.js')} >Get started</Button>
    
            </div>
            </div>
            <div className="foothome" style={{backgroundColor:'blue'}}>
                <Container>
                    <Row>
                        <Col md={1}></Col>
                        <Col md={5}>
                            <h2>Here just look at the Events and take a note of that </h2>
                            <p>Events are given of GTU , University and other university's extrenal events which include hackthons,quiz etc.</p>
                        </Col>
                        <Col md={5}>
                            <h2>Here we are giving video lectures .</h2>
                            <p></p>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Container>
            </div>
    </>
    );
};
export default Home;