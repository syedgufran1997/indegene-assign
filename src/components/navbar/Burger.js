import React, { useState } from 'react'
import RightNav from "./RightNav"
import styled from 'styled-components'


const BurgerWrapper = styled.div`
display:flex;
justify-content:space-between;
cursor:pointer;
`


const Text = styled.h2`
margin:auto 1em;
`

const BurgerMenu = styled.div`
    width: 2rem;
    height: 2rem;
    position: relative;
    top: 20px;
    right: 20px;
  
   
    div{
        width:2rem;
        margin:0.3em 0;
        height:0.2rem;
        background-color: ${({ open }) => open ? "#ccc" : "#333" }; 
        border-radius:20px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1){
            transform: ${({open}) => open ? "rotate(45deg)" : "rotate(0)"}
        }
        &:nth-child(2){
            transform:$ {({open}) => open ? "translateX(100%)" : "translateX(0)" }
            opacity : ${({open}) => open ? 0 : 1}
        }
        &:nth-child(3){
            transform: ${({open}) => open ? "rotate(-45deg)" : "rotate(0)"   }
        }
    }
`


const Burger = () => {

  const[open,setOpen] = useState(false) 

  return (
    <>
    <BurgerWrapper open={open} onClick={() => setOpen(!open)}>
    <Text>
        Menu
    </Text>
    <BurgerMenu open={open} onClick={() => setOpen(!open)} >
        <div />
        <div /> 
        <div />
    </BurgerMenu>
    </BurgerWrapper>

   
        {open && <RightNav />}
    </>
  )
}

export default Burger;