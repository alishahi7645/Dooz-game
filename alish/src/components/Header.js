import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Darkcontext } from '../context/darkmode';
const Header = () => {
    const darkmode = useContext(Darkcontext);
    const {changedtheme , Lightteme} = darkmode;
    return (
        <Headerdiv>
            <div className='dark'>
                {
                    <p onClick={changedtheme}>{Lightteme ? <i className='fa-solid fa-sun sun'></i> : <i class="fas fa-moon moon"></i>}</p>
                }
            </div>
        </Headerdiv>
    );
};

const Headerdiv = styled(motion.div)`
    width:100%;
    height:3rem;
    display:flex;
    align-items:center;
    justify-content:space-around;
    text-align:right;
    p{
        width:20px;
        height:2rem;
        

        .sun{
            color:white;
        }
    }
    i{
        font-size:2rem;
        color:black;
        
        cursor:pointer;
    }
`

export default Header;