import React from 'react'
import topImage from '../images/top-image.png';
import Image from 'react-bootstrap/Image'
import Monkey from '../images/ape-popUp.png'
import Cloud from '../images/top-cloud.png';
const Header = () => {
    return (
        <div style={{backgroundColor:"black"}}>
        <div style={{display:"flex" , flexDirection:"column", position:"relative"}} >
            <Image src={topImage}  fluid/>
            <Image  style={{height:"60%", width:"28%", margin:"0 auto" ,position:"absolute",  bottom:"-23%" , left:"39.2%" }} src={Monkey}  />
            <Image  style={{height:"30%", width:"100%", margin:"0 auto" ,position:"absolute",  bottom:"-11%" , left:"0" }} src={Cloud}  />

            {/* <div style={{color:"white", margin:"0 auto" ,position:"absolute",  bottom:"-29px" , left:"33%"}}><Img src={Cloud}/></div>  */}
            </div>
           
            </div>
    )
}

export default Header
