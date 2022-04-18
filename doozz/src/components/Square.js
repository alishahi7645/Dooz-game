import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Circle from './Circle';
import Cros from './Cros';
const Square = ({position,value , takeTurn}) => {
    const handleClick = () =>{
        if(value === 'EMPTY') {
            takeTurn(position)
        }    
    }
    return (
        <Squarediv onClick={handleClick}>
            {/* {position} */}
            {value === 'CIRCLE' && <Circle/>}
            {value === 'CROS' && <Cros/>}
        </Squarediv>
    );
};

const Squarediv = styled(motion.div)`
    width:110px;
    height:110px;
    display:flex;
    align-items:center;
    justify-content:center;
    background:white;
`

export default Square;