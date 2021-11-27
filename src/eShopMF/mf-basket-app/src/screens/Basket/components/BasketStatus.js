import React, { useState } from "react";
import styled from 'styled-components';

const BasketStatusLink = styled.a`
    cursor: pointer;
    display: inline-block;
    float: right;
    position: relative;
    transition: all .35s;
    
    :hover -badge {
        transform: scale(1.2) rotate(20deg);
    }
`;

const BasketStatusImageWrapper = styled.div`
    height: auto;
    width: 1.5rem;
`;

const BasketStatusBadge = styled.div`
    background-color: #f66f61;
    border-radius: 50%;
    bottom: 0;
    color:#fff;
    display: block;
    font-size: .75rem;
    line-height: 1.2rem;
    height: 1.2rem;
    right: 0;
    position: absolute;
    text-align: center;
    transition: all .15s;
    width: 1.2rem;
    transform: scale(1.2) rotate(20deg);
`;

const BasketStatus = ({badge}) => 
{
    return (<BasketStatusLink href="/basket">
    <BasketStatusImageWrapper >
        <img src="./src/assets/images/cart.svg" />
    </BasketStatusImageWrapper>
    <BasketStatusBadge>{badge}</BasketStatusBadge>
    </BasketStatusLink>);
}

function useBadge(badge)
{
    return badge;
}

export default BasketStatus;