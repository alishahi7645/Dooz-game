import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Cognition from './components/Cognition';
import Skills from './components/Skills';
import Header from './components/Header';
import { Darkcontext } from './context/darkmode';
import Darkcontextprovider from './context/darkmode';
function App() {
  const darkmodecontext = useContext(Darkcontext);
  const {Lightteme , dark , light } = darkmodecontext;
  const theme = Lightteme ? light : dark;
  return (
    <Appdiv baseName="/vali/"  style={{ background: theme.bg, color: theme.syntax, width: '100%', height: '100%' }}>
      <Header/>
      <Cognition/>
      <Skills/>
    </Appdiv>
  );
}

const Appdiv = styled(motion.div)`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;


`
export default App;
