import React from "react";
import styled from 'styled-components';

const HeaderWrapper = styled.section`
    height: 4rem;
`;

const HeaderContainer = styled.div`
`;

const Link = styled.a`
    color: rgba(#fff, .5);
    line-height: 4rem;
    text-decoration: none;
    text-transform: uppercase;
    transition: color .35s;

    &:hover {
        color: #fff;
        transition: color .35s;
    }
`;

const Header = ({component}) => 
<div className="container-fluid"><HeaderWrapper>
        <Link href="#">
            {component}
        </Link>
    </HeaderWrapper></div>;

export default Header;