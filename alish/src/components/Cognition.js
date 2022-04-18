import React,{useContext} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Darkcontext } from '../context/darkmode';

const Cognition = () => {
    const darkmodecontext = useContext(Darkcontext)
    const {Lightteme , dark , light } = darkmodecontext;
    const theme = Lightteme ? light : dark;
    return (
        <Cognitiondiv>
            <div className='cocnit'>
                <img className='img' src='https://noornegar.com/wp-content/uploads/2021/06/CA-2.jpg' />
                <h2>Ali Shahi</h2>
                <p className='webp'>Web developer</p>
                <div className='social'>
                    <p><i className='fab fa-instagram' style={{color:theme.syntax}}></i></p>
                    <p><i className='fab fa-linkedin' style={{color:theme.syntax}}></i></p>
                    <p><i className='fab fa-twitter' style={{color:theme.syntax}}></i></p>
                    <p><i className='fab fa-github' style={{color:theme.syntax}}></i></p>
                </div>
            </div>
            <div className='project'>
                <div className='projects'>
                    <div className='projects-item'>
                        <p style={{color:theme.syntax}}>1</p>
                        <p className='projects-item-p'>Years of work</p>
                    </div>
                    <div className='projects-item'>
                        <p style={{color:theme.syntax}}>0</p>
                        <p className='projects-item-p'>Completed projects</p>
                    </div>
                    <div className='projects-item'>
                        <p style={{color:theme.syntax}}>+99</p>
                        <p className='projects-item-p'>Completed mini projects</p>
                    </div>
                </div>
                <div className='resume'>
                    <li>Download cv <i className='fas fa-download'></i></li>
                </div>
            </div>
        </Cognitiondiv>
    );
};

const Cognitiondiv = styled(motion.div)`
    width:100%;
    height:70vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    .resume{
        width:100%;
        height:30%;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;

        li{
            width: 18rem;
            height: 4.5rem;
            background-color: #2F9BF4;
            margin: auto;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content:center;
            margin-top: 2rem;
            border-radius: 15px;
            text-decoration:none;
            list-style:none;
            color:#fff;
            font-size:1.5rem;
            cursor:pointer;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

            i{
                margin-left:14px;
                
            }
        }
    }

    .project{
        width:100%;
        height:30%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;

        .projects{
            width:100%;
            height:50%;
            display:flex;
            align-items:center;
            justify-content:center;

            .projects-item{
                width:8%;
                margin-left:2rem;
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;
                @media(max-width:963px){
                    margin-right:2rem;
                    width:15%;
                }
                p{
                    color:#000;
                    font-size:1.5rem;
                    font-weight:900;

                }
                .projects-item-p{
                    font-size:0.8rem;
                    color:#9d9fa0;
                    text-align:center;
                }
            }
        }
    }

    .cocnit{
        width:80%;
        height:70%;
        margin:auto;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;

        .img{
            width:10rem;
            height:10rem;
            border-radius:50%;
            border: 5px solid aqua;
            object-fit:cover;
        }

        h2{
            margin-top:1rem;
            font-size:2rem;
            font-weight:bold;
        }

        .webp{
            font-size:0.8rem;
            color:#9d9fa0;
        }

        .social{
            display:flex;
            margin-top:1rem;
            p{
                margin-left:0.5rem;
                
                i{
                    font-size:1.2rem;
                    cursor:pointer;
                    color:#161616;

                    :hover{
                        color:#83bfe7;
                    }
                }
            }
        }


    }
`

export default Cognition;