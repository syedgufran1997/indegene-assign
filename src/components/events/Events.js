import React from 'react'
import EventCards from '../eventCards/EventCards'
import styled from "styled-components"

const EventWrapper = styled.div`

margin:0 auto;
width:90%;
max-width:1000px;

h2{
text-transform: uppercase;
font-weight:500;
}
@media screen and (min-width:768px){
h2{

font-size:2em;

}
}

`

const EventsData = [
    {heading:"Global Pharmaceutical Regulatory Affairs Summit"},
    {heading:"World Drug Safety Congress Europe"},
    {heading:"Real World Data and Analytics Centers of Excellence"},
    {heading:"4th Promotional Review Committee Compliance & Best Practice"},

]

const Events = () => {
    return (
        <>
        <EventWrapper>
            <h2>Upcoming Events</h2>
            {EventsData.map((item) => 
            
            <EventCards heading={item.heading} />
            )}
           

        </EventWrapper>
        </>
    )
}

export default Events
