import React from 'react'
import styled from "styled-components"
import BlogCards from '../blogCards/BlogCards'

const BlogWrapper = styled.div`
background-color:lightgray;

.heading{
    h2
    {
    text-align:center;
    text-transform: uppercase;
    font-weight:500;
    }

    p{
    text-align:center;
    color:#C7B199;
    font-style: italic;

    }}

    @media screen and (min-width:768px){
        .heading{
            h2{
            font-size:2em;  
        }
        }
        .cardsWrapper{
            display:flex;
            justify-content:center;
        }
    }

        
`

const Blog = () => {
    return (
        <>
        <BlogWrapper>
            <div className="heading">
            <h2>Recent Blog</h2>
            <p>Our Blog</p>
            </div>
            <div className="cardsWrapper">
            <BlogCards />
            <BlogCards />
            <BlogCards />
            </div>

        </BlogWrapper>
        </>
    )
}

export default Blog
