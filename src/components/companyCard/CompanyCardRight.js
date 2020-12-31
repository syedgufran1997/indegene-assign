import React from 'react'
import styled from "styled-components"
import Image1 from "../../Assets/company/Layer 4.png"
import Image2 from "../../Assets/company/Layer 5.png"
import Image3 from "../../Assets/company/Layer 6.png"

const Wrapper = styled.div`
display:flex;
flex-direction:column;
`


const CardWrapper = styled.div`
display:flex;
justify-content:space-between;
width:90%;
margin:2em auto;
max-width:380px;

img{
  width:30%;
    height:5.5em;
    width:5.5em;
    background-color:#E9A3A6;
    padding:0.2em 0.5em 0.6em;
    border-radius:50%;
}`
const ContentWrapper = styled.div`

display:flex;
flex-direction:column;
justify-content:space-between;
width:70%;
h4{
    text-align:right;
}
p{
    margin-top:0.5em;
  color:#E9A3A6;
font-size:0.7em;
}
@media screen and (min-width:1024px){
    p{
    margin-top:1.5em;
    }
}

`

const CompanyCardRight = () => {
    return (
        <>
        <Wrapper>
        <CardWrapper>
            <ContentWrapper>
                <h4>Customer Experience</h4>
                <p>A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization</p>
            </ContentWrapper>
           <img src={Image1} alt="example" />
        </CardWrapper>
        <CardWrapper>
        <ContentWrapper>
            <h4>Data and Analytics </h4>
            <p>A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization</p>
        </ContentWrapper>
       <img src={Image2} alt="example" />
    </CardWrapper>
    <CardWrapper>
    <ContentWrapper>
        <h4>Digital Transformation </h4>
        <p>A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization</p>
    </ContentWrapper>
   <img src={Image3} alt="example" />
</CardWrapper>
</Wrapper>

</>
    )
}
export default CompanyCardRight;