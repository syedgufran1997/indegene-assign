import React from 'react'
import Button from './Button'
import styled from "styled-components"

const SearchWrap = styled.div`
display:flex;
justify-content:center;
width:90%;
margin:2em auto;
max-width:450px;


input{
    font-size:0.7em;
    width:100%;
    padding:1.4em;
    outline:none;
    color:black;
    font-weight:600;
}
Button{
    margin-left:-0.2em;
}

@media screen and (min-width:768px){


}
`

const SearchBar = (props) => {
    return (
        <>
        <SearchWrap>
          <input type="text" placeholder={props.placeholder} />
          <Button name="Subscribe" />
          </SearchWrap>

        </>
    )
}

export default SearchBar
