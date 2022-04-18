import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Result = ({Winner,reset}) => {
    return (
        <Resultdiv>
            {Winner === 'CIRCLE' && 'Circle won the game'}
            {Winner === 'CROS' && 'CROS won the game'}
            {Winner === 'it is a tie' && 'it is a tie'}

            <div><i className='fas fa-refresh' onClick={reset}></i></div>
        </Resultdiv>
    );
};

const Resultdiv = styled(motion.div)`
    width:100%;
    height:100%;
    margin:auto;
    background-color:rgba(0,0,0,0.7);
    color:white;
    position:absolute;
    top:0;
    right:0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    font-size:4rem;
    font-weight:bold;

    i{
        cursor:pointer;
    }
`

export default Result;