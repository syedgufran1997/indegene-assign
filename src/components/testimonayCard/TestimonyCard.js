import React from 'react'
import styled from "styled-components"
import Testimonial from "../../Assets/testimonial.png"

const CardWrapper = styled.div`
img{
    width:150px;
    height:150px;
    display:flex;
    justify-content:center;
    margin:1em auto;
}
width:320px;
padding:2em 1em;
display:flex;
justify-content:space-between;
flex-direction:column;
text-align:center;

p{
    margin:1em auto;
    font-size:1.2em;
}

h3{
    font-style:italic;
    margin:1em auto;
    letter-spacing:1px;

}
`

const TestimonyCard = (props) => {
    return (
        <>
            <CardWrapper>
                <img src={Testimonial} alt="Testimony" />
                <p>{props.detail}</p>
                <h3>{props.position}</h3>
            </CardWrapper>
        </>
    )
}

export default TestimonyCard
