import React from 'react'
import { Col, Container,Image, Row } from 'react-bootstrap'
import Mint from '../images/mint.png';
import MintCloud from '../images/Mint-bubble.png'
import BuyNow from '../images/buynow.png';
import CloudMints from '../images/Cloud-Mint.png';
import Stork from '../images/stork.png';
import Monkeys from '../images/monkeys.jpeg'
import Img from '../images/img.jpeg';



const SectionMint = () => {
    return (
        <Row style={{height:"auto" , backgroundColor:"#3CAAEB" ,position:"relative"}}>
            <Col md={6}>
                <div className="d-flex justify-content-center" style={{position:"relative"}} >
            <Image src={Mint} style={{height:"80px", width:"148px" , zIndex:"1"}}   />
                </div>
                <div >
            <Image src={MintCloud} style={{height:"230px", width:"405px", position:"absolute" , left:"4%" , top:"0" , zIndex:"0"}}  />
                <div style={{position:"absolute" , left:"20%" , top:"75px" , zIndex:"0"}}>10,000  / 10,000</div>
                </div>

            </Col>
            <Col md={6}></Col>
        </Row>
      
    )
}

export default SectionMint