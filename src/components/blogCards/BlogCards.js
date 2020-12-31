import React from 'react'
import styled from "styled-components"
import Lap from "../../Assets/lap.png"

const CardsWrapper = styled.div`
width:95%;
margin:1em auto;
max-width:380px;
background-color:white;

img{
    width:100%;
    height:100%;
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
    justify-content:center;
    text-align:center;
    width:30%;


    h1,h4,h4{
        color:#B69874;
        font-weight:500;
    }
}
.contentWrap{
    display:flex;
    flex-direction:column;
    width:70%;

    h3{
        font-weight:500;
    }
    p{
        color:#999999;
        font-size:0.8em;
        font-weight:500;

    }
}
`

const BlogCards = () => {
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
                        <h3>Press Release</h3>
                        <p>Indegene Acquires DT Associates, Provides End-To-End Enterprise Solution for Customer Excellence — from Consulting to Operations</p>
                    </div>
                </BlogContent>
            </CardsWrapper>
        </>
    )
}

export default BlogCards;
