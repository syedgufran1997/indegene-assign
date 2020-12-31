import React from 'react'
import SearchBar from '../common/SearchBar'
import styled from "styled-components"

const FooterWrap = styled.div`
background-color:black;
text-align:center;
padding:5em 1em;
h1{
    color:white;
    text-transform: uppercase;
    font-weight:400;
}
`

const CopyRights = styled.div`
color:white;
font-size:0.7em;
max-width:600px;
margin:0 auto;

p{
cursor:pointer;

}

@media screen and (min-width:768px){
    display:flex;
    justify-content:space-around;
}
`



const Footer = () => {
    return (
        <>
        <FooterWrap>
            <h1>NewsLetter</h1>
            <SearchBar placeholder="Enter email address" />
            <CopyRights>
                <p>© 2019 Indegene. All rights reserved	</p>
                <p>|</p>
                <p>Contact Us	</p>
                <p>|</p>

                <p>Privacy Policy	</p>
                <p>|</p>

                <p>CSR Policy</p>
            </CopyRights>
        </FooterWrap>
        </>
    )
}

export default Footer
