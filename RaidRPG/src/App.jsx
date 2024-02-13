import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Start from './component/Start';
import CreatePlayer from './assets/utils/createPlayer';
import CreateEnemy from './component/players/Enemy';
import Player from './component/players/Player';
import Enemy from './component/players/Enemy';
export default function App(props) {
  // three modes battle, start/menu, gameover
  const [mode, setMode] = useState('start');
  // styles.main / styles.startButton ?

  class NewToon extends CreatePlayer {
    constructor(name) {
      super();
      this.name = name;
      this.att = 15;
      this.hp = 15;
    }
  }


  return (
    <main>
      {mode === 'start' && <Start startGame={() => setMode('battle')} />}
      {mode === 'battle' && (
        <div>
          <section className="battle-ground">
            <Player />
            <h2>VS</h2>
            <CreateEnemy/>
          </section>
          {/* <button onClick={() => console.log(Player)}>Fight!</button> */}
        </div>
      )}
      {mode === 'gameOver' && <h1>YOU SUCK!</h1>}
    </main>
    // mode === 'battle' && <Battle/>,
    // mode === 'gameOver' && <gameOver/>
  );
}
