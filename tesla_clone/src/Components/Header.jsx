import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from './../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {

    const [burgerState, setBurgerState] =  useState(false);

    const cars = useSelector(selectCars);
    console.log("🚀 ~ file: Header.jsx ~ line 14 ~ Header ~ cars", cars)

    return (
        <Container>
            <a href="www.abc.com">
                <img src="/images/logo.svg" alt="logo"/>
            </a>
            <Menu>
                {cars && cars.map((cars, index)=> (
                    <p key={index}><a  href={cars}>{cars}</a></p>
                    ))}
                {/* <p><a href="www.abc.com">Model S</a></p>
                <p><a href="www.abc.com">Model 3</a></p>
                <p><a href="www.abc.com">Model X</a></p>
                <p><a href="www.abc.com">Model Y</a></p> */}
            </Menu>
            <RightMenu>
                <a href="www.abc.com">Shop</a>
                <a href="www.abc.com">tesla account</a>
                <BurgerMenu onClick={()=>setBurgerState(true)}/>
            </RightMenu>
            <BurgerNav show={burgerState}>
                <CloseWrapper>
                    <CloseButton onClick={()=>setBurgerState(false)}/>
                </CloseWrapper>
                {cars && cars.map((cars, index)=> (
                    <li key={index}><a  href="www.abc.com">{cars}</a></li>
                    ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Semi</a></li>
                <li><a href="#">Charging</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header


const Container = styled.div`
    z-index: 10;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    justify-content: space-between; //allow to have the RightMenu Component push to the right when Menu disapear on mobile size (under 768px)
`

const Menu = styled.div`
    display: flex;
    /*align-items: center;*/
    justify-content: center;
    flex: 1;

    p {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap; // always keep the padding condition despite the screen size
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: nowrap; // always keep the padding condition despite the screen size
    }
`

const BurgerMenu = styled(MenuIcon)`
    cursor: pointer

`

const BurgerNav = styled.div`
    z-index: 20;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px; 
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${ props => props.show ? `translateX(0)`: `translateX(100%)`};
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0 , 0, .2);
        font-weight: 600;
    }
`

const CloseButton = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
        display: flex;
        justify-content: flex-end;
`