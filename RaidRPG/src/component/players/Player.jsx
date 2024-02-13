// https://www.w3schools.com/react/react_class.asp
import React from 'react';
import CreatePlayer from '../../assets/utils/createPlayer';
export default function Player(props) {
  const [playerStats, setPlayerStats] = React.useState(
    new CreatePlayer()
  );

    const battle = playerStats.battle


  const { name, hp, att, def, spd, img } = playerStats;
  return (
    <div>
      <h1>Name: {name}</h1>
      <img src={img} alt="" />
      <h2>HP: {hp}</h2>
      <h2>Att: {att}</h2>
      <h2>Def: {def}</h2>
      <h2>Speed: {spd}</h2>
      <button onClick={battle}>Fight</button>
    </div>
  );
}
