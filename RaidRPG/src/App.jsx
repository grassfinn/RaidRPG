import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Start from './component/Start';
import Player from './component/players/Player';

export default function App() {
  // three modes battle, start/menu, gameover
  const [mode, setMode] = useState('start');

// styles.main / styles.startButton ?

class newToon extends Player {
  constructor() {
    super()
    }
  }

let bob = new newToon()

  return (
    <div>
      {mode === 'start' && <Start startGame={() => setMode('battle')}/>}
      {mode === 'battle' && bob.render()}
      {mode === 'gameOver' && <h1>YOU SUCK!</h1>}

    </div>
    // mode === 'battle' && <Battle/>,
    // mode === 'gameOver' && <gameOver/>
  )
}

