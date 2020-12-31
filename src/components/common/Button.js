import React from 'react'
import styled from "styled-components"

const ButtonWrap = styled.button`
padding: 0.8em 1.5em;
display:flex;
align-items:center;
outline:none;
margin-right:0.5em;
border:1px solid lightgrey;
border:none;
cursor:pointer;
background-color:#C7B198;
    color:white;
    
&:hover{
    background-color:lightgrey;
    color:black;

}

p{
margin-left:0.5em;
text-wrap:nowrap;
}

@media screen and (min-width:768px){
    p{
font-size:0.8em;
    }
}
`


const Button = (props) => {
    return (
       <ButtonWrap onClick={props.onClick}>
           {props.icon}
          <p> {props.name}</p>
       </ButtonWrap>
    )
}
export default Button;
