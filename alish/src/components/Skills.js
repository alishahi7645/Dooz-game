import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Darkcontext } from '../context/darkmode';

const Skills = () => {
    const [project, setproject] = useState(true);
    const projecthandler = () => {
        setproject(!project)
    }
    console.log(project);
    const [projects, setprojects] = useState(true);
    const projectshandler = () => {
        setprojects(!projects)
    }
    const darkmodecontext = useContext(Darkcontext)
    const {Lightteme , dark , light } = darkmodecontext;
    const theme = Lightteme ? light : dark;
    return (
        <Skilldiv>
            <div className='skillactive'>
                <div className={project ? 'active' : 'skillactiveitems'} onClick={projecthandler}><p>Skills</p></div>
                <div className={project ? 'skillactiveitems' : 'active'} onClick={projecthandler}><p>Projects</p></div>
            </div>
            <div className='skillitems'>
                <div className='skill'>
                    <div className='skillh2'>
                        <h4>Frontend Developer</h4>
                    </div>
                    <div className={project ? 'projectactive' : 'project'}>
                        <div className='project-items' style={{color:theme.syntax}}>
                            <p style={{color:theme.syntax}}>Html</p>
                            <p style={{color:theme.syntax}}>Css</p>
                            <p style={{color:theme.syntax}}>Bootstrap</p>
                            <p style={{color:theme.syntax}}>JavaScript</p>
                        </div>
                        <div className='project-items'>
                            <p style={{color:theme.syntax}}>React</p>
                            <p style={{color:theme.syntax}}>Material UI</p>
                            <p style={{color:theme.syntax}}>Git</p>
                            <p style={{color:theme.syntax}}>StyledComponent</p>
                        </div>
                    </div>
                    <div className={project ? 'projects' : 'projectsactive'}>
                        <div className='projects-item'>
                            <li>
                                <a href='https://github.com/alishahi7645' >
                                    <img src='https://alideymeh-resume.netlify.app/assets/img/project3.jpg'/>
                                </a>
                            </li>
                        </div>
                        <div className='projects-item'>
                            <li>
                                <a href='https://github.com/alishahi7645'>
                                    <img src='https://alideymeh-resume.netlify.app/assets/img/project4.jpg'/>
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </Skilldiv>
    );
};

const Skilldiv = styled(motion.div)`
    width:100%;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

    .projectsactive{
        display: none;


    
    }
    .projects{
        width:50rem;
        height:inherit;
        display:flex;
        align-items:center;
        justify-content:space-around;
        margin-top:8rem;
        @media(max-width:963px){
            flex-direction:column;
            width:40rem;
        }
        @media(max-width:660px){
            flex-direction:column;
            width:30rem;
        }

        .projects-item{
            width:45%;
            height:15rem;

            @media(max-width:963px){
                margin-bottom:1rem;
                width:35%;
                height:12rem;
            }
            
            li{
                width:100%;
                height:100%;
                list-style:none;
                text-decoreition:none;


                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    border-radius:15px;
                }
            }
        }
        
    }

    .skillitems{
        width:100%;
        height:40vh;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        opacity:999;

        .skill{
            height: 100px;
            margin-top: -184px;
        }

        .skillh2{
            margin-top: 2rem;
            height: 19px;
            margin-bottom:3rem;
        }



        h4{
            margin-top:15px;
            margin-bottom:10px
        }
        .projectactive{
            display:none;
        }
        .project{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:center;


            .project-items{
                width:50%;
                margin-left:45px;
                display:flex;
                align-items:center;
                justify-content:center;
                flex-direction:column;
                text-align:justify;
                p{
                    color:#0009;
                    margin-top:9px;
                    margin-right:9px;
                }

                i{
                    color:#000;
                    margin-left:8px;
                    font-size:1.5rem;
                }
            }
        }
    }

    .skillactive{
        width:21rem;
        height:5rem;
        display:flex;
        align-items:center;
        justify-content:space-around;
        color:#000;
        border-radius:10px;
        background-color:#E9EBEC;
        opacity:1000;
        .active{
            width:45%;
            height:80%;
            border-radius:5px;
            text-align:center;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            
            background-color:white;
        }

        .skillactiveitems{
            width:45%;
            height:80%;
            border-radius:5px;
            text-align:center;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            border:1px solid silver;
            background-color:transparent;
        }
    }
`
export default Skills;