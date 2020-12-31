import React from 'react'
import CompanyCardRight from '../companyCard/CompanyCardRight.js'
import CompanyCardLeft from '../companyCard/CompanyCardLeft.js'
import styled from "styled-components"

const CompanyWrapper = styled.div``
const TextWrap = styled.div`
text-align:center;

h2{
  text-transform: uppercase;
}

h4{
  font-style: italic;
  color:#E9A3A6;
  margin:1em auto;
  font-weight:400;

}
`

const CompanyCards = styled.div`
max-width:800px;
margin:0 auto;

@media screen and (min-width:768px){
display:flex;
justify-content:space-betweeen;

}`




const Company = () => {
    return (
        <CompanyWrapper>
            <TextWrap>
            <h2>Company</h2>
            <h4>Services</h4>
            </TextWrap>
<CompanyCards>
    <CompanyCardRight />
            <CompanyCardLeft />
</CompanyCards>
        </CompanyWrapper>
    )
}

export default Company;
