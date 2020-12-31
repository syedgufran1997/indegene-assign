import React from 'react'
import styled from "styled-components"
import Button from '../common/Button'
import BannerImage from "../../Assets/banner.png"


const Banner = styled.div`
background-color:lightgrey;
text-align:center;


`

const ContentWarpper = styled.div`
width:80%;
padding-top:8em;
padding-bottom:6em;
margin:0 auto;
@media screen and (min-width:1024px){
    padding-top:10em;
    padding-bottom:10em;
}


`


const Text = styled.div`
margin:0 auto;
color:white;
h3{
    margin:1em auto;
}
@media screen and (min-width:768px) {
    h3{
        font-size:1.8em;
    }
}
`
const ButtonWrapper = styled.div`
margin-top:1em;
display:flex;
justify-content:center;
`


const MarketBanner = styled.div`
background: url(${BannerImage})});
background-size: cover;
background-origin: border-box;
margin-bottom:5em;

`

const MarketContent = styled.div`
background-color:#B2A08C;
opacity:0.5;
padding:10em 0;

h3{
    opacity:1;
    color:black;
}
h4{
    margin:0.8em 0;
    color:white;
}

@media screen and (min-width:768px) {
    width:50%;
}
`

const TextWrap = styled.div`
width:85%;
margin:0 auto;
`

 const HomeBanner = () => {
    return (
        <>
        <Banner>
            <ContentWarpper>

            <Text>
            <h3>Enterprise Marketing and Customer Experience</h3>
            <h5>LEVERAGE DATA TO DRIVE PERSONALIZATION AT SCALE</h5>
            </Text>
            <ButtonWrapper>
                <Button  name="The Global Transition" />
                <Button  name="Explore" icon={<i class="fas fa-play-circle"></i>} />
            </ButtonWrapper>
            </ContentWarpper>

        </Banner>
        <MarketBanner>
            <MarketContent>
                <TextWrap>
                <h3>THE DIGITAL SAVVY PHARMA MARKETER 2020</h3>
                <h4>“Must have tool for every pharma marketer ”</h4>
                <Button name="Download"  icon={<i class="fas fa-play-circle"></i>}  />
                </TextWrap>

            </MarketContent>
        </MarketBanner>
        </>
    )
}
export default HomeBanner;