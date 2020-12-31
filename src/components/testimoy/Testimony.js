import React from 'react'
import styled from "styled-components"
import TestimonyCard from '../testimonayCard/TestimonyCard'
import Banner from "../../Assets/banner2.png"

const Wrapper = styled.div`
background:url(${Banner});
background-size: cover;
background-origin: border-box;
margin-bottom:5em;
color:white;
h1{
    padding-top:3em;
    font-weight:400;
    text-align:center;
}
.cardWrapper{
    margin:0 auto;
    padding-bottom:4em;

}

@media screen and (min-width:768px){
    .cardWrapper{
        display:flex;
        justify-content:center;
    }
}
`

const TestData = [
    {
        detail:"As the President, he is responsible for new strategic initiatives.",
        position:"President"
    },
    {
        detail:"As one of the cofounders and the CEO, He is responsible for the company’s strategy.",
        position:"CEO"
    },
    {
        detail:"Is responsible for global business development and strategic account management.",
        position:"Executive VP"
    }
]

const Testimony = () => {
    return (
        <>
            <Wrapper>
                <h1>INSPIRATIONAL TESTIMONY</h1>
                <div className="cardWrapper"> 
                {TestData.map((item) => 
                <TestimonyCard detail={item.detail} position={item.position} />
                )}                   
                </div>
            </Wrapper>
        </>  

    )
}

export default Testimony
