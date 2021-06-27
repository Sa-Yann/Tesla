import React from 'react';
import styled from 'styled-components';
import './../index.css';
import Fade from 'react-reveal/Fade'; // Importing Fade effect

function Section({title, description, backgroundImg, topBottomText, bottomButtonText}) {
    return (
        <Wrap bckGrndImg={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <TopButton>
                            {topBottomText}
                        </TopButton>
                        {
                            bottomButtonText && 
                            // Only display BottomButton if it exist in the props declared in the Section Component in The Home Component
                                <BottomButton>
                                    {bottomButtonText}
                                </BottomButton>
                        }   
                </ButtonGroup>
                </Fade>

                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
            
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-s.jpg');
    background-image: ${ props => `url("/images/${props.bckGrndImg}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical alignment cause of the flex-direction: column
    align-items: center; //horizontal alignment cause of the flex-direction: column
    
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-Bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }

    
`

const TopButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width:256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 8px;
`

const BottomButton = styled(TopButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-Top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
    
`

const Buttons = styled.div`
`
