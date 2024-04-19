import React from 'react'
import logo from "../assets/logo.svg"
const Header = () => {
  return (
    <nav>
<NavContent/>
</nav>
  )
}

const NavContent =()=>{
  return(
    <>
  <div className="logo">
    <img src= {logo} alt="" />
    </div>
    <div>
      <a href="#taxi-cab">TAXI & CAB</a>
      <a href="#bus-ticket-booking">BUS TICKET BOOKING</a>
      <a href="#contact-us">CONTACT US</a>
      
    </div>
    <a href="mailto:tripathidiya673@gmail.com">
      <button>+91 9422607694</button>
    </a>
    </>
  )
}


export default Header
