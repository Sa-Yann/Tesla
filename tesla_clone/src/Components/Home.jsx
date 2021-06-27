import React from 'react';
import styled from 'styled-components';
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description="Order online for touchless delivery"
                backgroundImg="model-s.jpg"
                topBottomText="Custom order"
                bottomButtonText="Existing Inventory"
            />
            <Section 
                title="Model Y"
                description="Order online for touchless delivery"
                backgroundImg="model-y.jpg"
                topBottomText="Custom order"
                bottomButtonText="Existing Inventory"
            />
            <Section 
                title="Model 3"
                description="Order online for touchless delivery"
                backgroundImg="model-3.jpg"
                topBottomText="Custom order"
                bottomButtonText="Existing Inventory"/>

            <Section 
                title="Model X"
                description="Order online for touchless delivery"
                backgroundImg="model-x.jpg"
                topBottomText="Custom order"
                bottomButtonText="Existing Inventory"/>
            
            <Section 
                title="Lowest cost Solar Panel in America"
                description="Money-back Guarantee"
                backgroundImg="solar-panel.jpg"
                topBottomText="Order Now"
                bottomButtonText="Learn More"/>

            <Section 
                title="Solar for New Roofs"
                description="Solar Roofs Cost Less Tan a new Rouf Plus Solar Panel"
                backgroundImg="solar-roof.jpg"
                topBottomText="Order Now"
                bottomButtonText="Learn More"/>

            <Section 
                title="Accesories"
                description=""
                backgroundImg="accessories.jpg"
                topBottomText="Shop Now"
            />
            
        </Container>
    )
}

export default Home

const Container = styled.div`heigh:100vh`
