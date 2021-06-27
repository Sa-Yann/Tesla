import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';


function Header() {
    return (
        <Container>
            <a href="www.abc.com">
                <img src="/images/logo.svg" alt="logo"/>
            </a>
            <Menu>
                <p><a href="www.abc.com">Model S</a></p>
                <p><a href="www.abc.com">Model 3</a></p>
                <p><a href="www.abc.com">Model X</a></p>
                <p><a href="www.abc.com">Model Y</a></p>
            </Menu>
            <RightMenu>
                <a href="www.abc.com">Shop</a>
                <a href="www.abc.com">tesla account</a>
                <BurgerMenu />
            </RightMenu>
        </Container>
    )
}

export default Header


const Container = styled.div`
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