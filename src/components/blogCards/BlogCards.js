import React from 'react'
import styled from "styled-components"
import Lap from "../../Assets/lap.png"

const CardsWrapper = styled.div`
width:95%;
margin:2em auto 6em;
max-width:340px;
background-color:white;

img{
    width:100%;
  object-fit: fill;

}
`

const BlogContent = styled.div`
display:flex;
justify-content:space-between;
width:100%;
margin-top:-0.5em;
.dateWrap{
    background-color:#ddcdb8bb;
    display:flex;
    flex-direction:column;
    text-align:center;
    width:30%;
    padding-top:2em;
    padding-bottom:7em;
    height:100%;

    h1{
        font-size:3em;
    }
    h1,h4,h4{
        color:#B69874;
        font-weight:400;
    }
}
.contentWrap{
    display:flex;
    flex-direction:column;
    width:70%;
    padding:2em 1em 5em;

    h3{
        font-weight:500;
    }
    p{
        color:#999999;
        font-size:0.8em;
        font-weight:500;
        margin-top:1em;
    }
}
`

const BlogCards = (props) => {
    return (
        <>
            <CardsWrapper>
                <img src={Lap} alt="example" />
                <BlogContent>
                    <div className="dateWrap">
                    <h1>18</h1>
                    <h4>January</h4>
                    <h4>2019</h4>
                    </div>
                    <div className="contentWrap">
                        <h3>{props.heading}</h3>
                        <p>{props.content}</p>
                    </div>
                </BlogContent>
            </CardsWrapper>
        </>
    )
}

export default BlogCards;
