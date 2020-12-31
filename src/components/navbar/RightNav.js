import React,{useState}  from 'react'
import styled from "styled-components"
import { HashLink as Link} from "react-router-hash-link";

const Ul = styled.ul`
    display: flex;
    padding:1em 0;
    list-style: none;
    flex-flow: row nowrap;
    z-index:5;
    transition:0.5s;
   border-top:1px solid lightgrey;
    li {
        padding: 0.6em 1em;
        font-weight: 800;
        font-size: 1.5em;
        color:Black;
      }
     li:hover{
        color:grey;
      }
      li:active{
        color:grey;
      }
          margin-top:65px;
          width:100%;
          flex-flow:column nowrap;
          position:fixed;
          top:0;
          right: 0;    
          background-color:white;
          
          li{
              display:flex;
              justify-content:left;
              width:100%;
          }
          li:hover{
            color:grey;
            background-color:whitesmoke;
          }
          
          li:active{
            color:grey;  
            background-color:whitesmoke;
          }
    `

const RightNav = () => {

  const[open,setOpen] = useState(false) 
 

  return (
  <>
 <Ul >
    <Link smooth to="#home">
    <li onClick={() => setOpen(!open)}>Home</li>
    </Link>
    <Link smooth to="#About">
      <li>About</li>
    </Link>
    <Link smooth to="#">
      <li>Product</li>
    </Link>
    <Link smooth to="#">
      <li>Calender</li>
    </Link>
    <Link smooth to="#">
      <li>Blog</li>
    </Link>
    <Link smooth to="#contacts">
      <li>Contacts</li>
    </Link>
  </Ul>

  </>
  )
}


export default RightNav