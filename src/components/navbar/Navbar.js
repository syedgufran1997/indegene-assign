import React from 'react'
import Burger from "./Burger"
import styled from "styled-components"
// import NavMenu from "./NavMenu"


const Navbar = styled.div` 
  height: 65px;
  display: flex;
  justify-content: space-between;
  background-color:white;
  width:100%;
  -webkit-box-shadow: 2px 5px 10px 0px rgba(211, 211, 211, 1);
  -moz-box-shadow: 2px 5px 10px 0px rgba(211, 211, 211, 1);
  box-shadow: 2px 5px 10px 0px rgba(211, 211, 211, 1);
  z-index:5;
  position:fixed;
`

const Image = styled.img`
  width: 13em;
  cursor:pointer;
  padding:5px 1em;
  `

  const Ham = styled.div`
  display:flex;
  justify-content:space-between;
  `

  const Icons = styled.div`
  display:none;
  margin:auto 0em;
  i{
      padding:0.4em 0.5em;
      font-size:1.2em;
      margin:auto 0.1em;
      border-radius:50%;
      background-color:#C7B198;
      color:white;
      cursor:pointer;
  }
  @media screen and (min-width:768px){
      display:block;
  }
  `
  

const NavBar = () => {
  return (
<>
<Navbar>
    <Image src="/logo.png" alt="Logo" onClick={() => window.scrollTo({top:0,left:0, behavior:"smooth"})} />
   <Ham>
        <Icons>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-linkedin-in"></i>
        </Icons> 
        <Burger />
   </Ham>
</Navbar>
</>
  )
}


export default NavBar