import React from 'react'
import styled from "styled-components"
import Event2 from "../../Assets/event.png"
import Button from '../common/Button'

const CardWrapper = styled.div`
display:flex;
justify-content:space-between;
width:90%;
margin:2em auto;

img{
    width:30%;
   
}

@media screen and (min-width:768px){
    width:100%;

    img{
        width:28%;
        max-height:200px;
    }
}

`

const ContentWrapper = styled.div`
width:65%;
margin-left:5%;
text-align:left;
display:flex;
flex-direction:column;
justify-content:space-between;

h4{
    font-weight:500;    
}

.datewrap,
.location,
.address{
    display:flex;
    color:grey;
    margin:0.5em 1em 0.5em 0 ;
}

.location p{
color:#C7B198;
}

.datewrap p,
.location p,
.address p{
    font-size:0.7em;
    margin-left:1em;
  font-style: italic;
  cursor:pointer;

}

Button{
    width:110px;
}


@media screen and (min-width:768px){

width:68%;
margin-left:3%;

}

@media screen and (min-width:1024px){

    h4{
    font-size:1.4em;
    }
    .datewrap,
    .location,
    .address{
        margin:0em 1em 0em 0 ;
    }

    .datewrap p,
.location p,
.address p{
    font-size:0.9em;
    margin-left:1em;

}
}
`

const eventCards = (props) => {
    return (
        <>
            <CardWrapper>
                <img src={Event2} alt="example" />
                <ContentWrapper>
                    <h4>{props.heading}</h4>
                    <div className="datewrap">
                    <i class="far fa-calendar-alt"></i>
                        <p>Monday, 8:00 AM - Tuesday, 8:00 PM</p>
                    </div>
                    <div className="location">
                    <i class="fas fa-globe"></i>
                        <p>Madisson Hotel</p>
                    </div>
                    <div className="address">
                    <i class="fas fa-city"></i>
                        <p>203 St. Mountain View, San Franciso, California, USA</p>
                    </div>
                    <Button name="Read more" />
                </ContentWrapper>
            </CardWrapper>
        </>
    )
}

export default eventCards
