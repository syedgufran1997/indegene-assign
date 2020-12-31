import React from 'react'
import styled from "styled-components"
import Image1 from "../../Assets/company/Layer 1.png"
import Image2 from "../../Assets/company/Layer 2.png"
import Image3 from "../../Assets/company/Layer 3.png"

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
    text-align:left;
}
p{
    margin-top:0.8em;
  color:#E9A3A6;
font-size:0.7em;
}

@media screen and (min-width:1024px){
    p{
    margin-top:1.5em;
    }
}
`

const companyCardLeft = () => {
    return (
<>
<Wrapper>

        <CardWrapper>
           <img src={Image1} alt="example" />
            <ContentWrapper>
                <h4>Co-commercialization</h4>
                <p>A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization</p>
            </ContentWrapper>

        </CardWrapper>


        <CardWrapper>
           <img src={Image2} alt="example" />
            <ContentWrapper>
                <h4>R&D / Medical Transformation</h4>
                <p>A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization</p>
            </ContentWrapper>

        </CardWrapper>



        <CardWrapper>
           <img src={Image3} alt="example" />
            <ContentWrapper>
                <h4>Omnipresence CXM Platform</h4>
                <p>A must have tool for pharma marketers to gain insights into the latest channel preferences, marketing budget allocations, technology utilization</p>
            </ContentWrapper>

        </CardWrapper>
</Wrapper>
</>
    )
}
export default companyCardLeft;