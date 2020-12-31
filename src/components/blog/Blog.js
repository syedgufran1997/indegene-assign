import React from 'react'
import styled from "styled-components"
import BlogCards from '../blogCards/BlogCards'


const Wrapper = styled.div`
background-color: rgba(240, 240, 240, 0.945);
`



const BlogWrapper = styled.div`
max-width:1100px;
margin:0 auto;
background-color: rgba(240, 240, 240, 0.945);

.heading{
    padding-top:5em;
    padding-bottom:1em;
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

const BlogData = [
    {
        heading:"Press Release",
        content:"Indegene Acquires DT Associates, Provides End-To-End Enterprise Solution for Customer Excellence — from Consulting to Operations"

    },
    {
        heading:"Webinars",
        content:"Healthy Workplaces Conference & Awards 2019 - Indegene enters Platinum League of Healthy Workplaces"

    },
    {
        heading:"Press Release",
        content:"Exemplary PV solution to augment efficiency in small and medium size pharma companies"

    }
]
const Blog = () => {
    return (
        <>
        <Wrapper>

        <BlogWrapper>
            <div className="heading">
            <h2>Recent Blog</h2>
            <p>Our Blog</p>
            </div>
            <div className="cardsWrapper">
                {BlogData.map((item) => 
            <BlogCards heading={item.heading} content={item.content} />
                )}
           
            </div>
        </BlogWrapper>
        </Wrapper>

        </>
    )
}

export default Blog
