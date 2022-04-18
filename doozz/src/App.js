import React, { useState } from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Square from './components/Square'
import Result from './components/Result';
function App() {
  const [state, setstate] = useState({
    player: 'CIRCLE',
    positions: [
      'EMPTY', 'EMPTY', 'EMPTY',
      'EMPTY', 'EMPTY', 'EMPTY',
      'EMPTY', 'EMPTY', 'EMPTY'
    ]
  })

  function takeTurn(position) {
    const positions = [...state.positions];
    positions[position] = state.player;

    setstate({
      player: state.player === 'CIRCLE' ? 'CROS' : 'CIRCLE',
      positions,
    })
    detectWinner()
  }
  const detectWinner = (p) => {
    if (p[0] === 'CIRCLE' && p[1] === 'CIRCLE' && p[2] === 'CIRCLE') return 'CIRCLE';
    if (p[3] === 'CIRCLE' && p[4] === 'CIRCLE' && p[5] === 'CIRCLE') return 'CIRCLE';
    if (p[6] === 'CIRCLE' && p[7] === 'CIRCLE' && p[8] === 'CIRCLE') return 'CIRCLE';

    if (p[0] === 'CIRCLE' && p[3] === 'CIRCLE' && p[6] === 'CIRCLE') return 'CIRCLE';
    if (p[1] === 'CIRCLE' && p[4] === 'CIRCLE' && p[7] === 'CIRCLE') return 'CIRCLE';
    if (p[2] === 'CIRCLE' && p[5] === 'CIRCLE' && p[8] === 'CIRCLE') return 'CIRCLE';

    if (p[0] === 'CIRCLE' && p[4] === 'CIRCLE' && p[8] === 'CIRCLE') return 'CIRCLE';
    if (p[2] === 'CIRCLE' && p[4] === 'CIRCLE' && p[8] === 'CIRCLE') return 'CIRCLE';



    if (p[0] === 'CROS' && p[1] === 'CROS' && p[2] === 'CROS') return 'CROS';
    else if (p[3] === 'CROS' && p[4] === 'CROS' && p[5] === 'CROS') return 'CROS';
    else if (p[6] === 'CROS' && p[7] === 'CROS' && p[8] === 'CROS') return 'CROS';

    else if (p[0] === 'CROS' && p[3] === 'CROS' && p[6] === 'CROS') return 'CROS';
    else if (p[1] === 'CROS' && p[4] === 'CROS' && p[7] === 'CROS') return 'CROS';
    else if (p[2] === 'CROS' && p[5] === 'CROS' && p[8] === 'CROS') return 'CROS';

    else if (p[0] === 'CROS' && p[4] === 'CROS' && p[8] === 'CROS') return 'CROS';
    else if (p[2] === 'CROS' && p[4] === 'CROS' && p[6] === 'CROS') return 'CROS';

    else if (p.every(position => position !== 'EMPTY')) return 'it is a tie';
  }
  const Winner = detectWinner(state.positions);

  const reset = () => {
    setstate({
      player: 'CIRCLE',
      positions: [
        'EMPTY', 'EMPTY', 'EMPTY',
        'EMPTY', 'EMPTY', 'EMPTY',
        'EMPTY', 'EMPTY', 'EMPTY'
      ]
    })
  }
  return (
    <Appdiv>
      <div className="grid">
        <Square position={0} value={state.positions[0]} takeTurn={takeTurn} />
        <Square position={1} value={state.positions[1]} takeTurn={takeTurn} />
        <Square position={2} value={state.positions[2]} takeTurn={takeTurn} />
        <Square position={3} value={state.positions[3]} takeTurn={takeTurn} />
        <Square position={4} value={state.positions[4]} takeTurn={takeTurn} />
        <Square position={5} value={state.positions[5]} takeTurn={takeTurn} />
        <Square position={6} value={state.positions[6]} takeTurn={takeTurn} />
        <Square position={7} value={state.positions[7]} takeTurn={takeTurn} />
        <Square position={8} value={state.positions[8]} takeTurn={takeTurn} />
      </div>
      {Winner && <Result Winner={Winner} reset={reset}/>}
    </Appdiv>
  );
}

const Appdiv = styled(motion.div)`
  display:flex;
  align-items:center;
  justify-content:center;
  width:100vw;
  height:100vh;
  overflow:hidden;

  .grid{
    display:grid;
    grid-template-columns:auto auto auto;
    grid-template-rows:auto auto auto;
    gap:10px;
    background-color:lightgrey;
  }
`

export default App;
