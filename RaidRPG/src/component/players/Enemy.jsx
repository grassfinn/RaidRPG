// https://www.w3schools.com/react/react_class.asp
import React from 'react';
import CreateEnemy from '../../assets/utils/createEnemy';

export default function Enemy() {
  const [enemyStats, setEnemyStats] = React.useState(new CreateEnemy('Kyle'));

  const { name, hp, att, def, spd, img } = enemyStats;
  return (
    <div>
      <h1>Name: {name}</h1>
      <img src={img} alt="" />
      <h2>HP: {hp}</h2>
      <h2>Att: {att}</h2>
      <h2>Def: {def}</h2>
      <h2>Speed: {spd}</h2>
    </div>
  );
}
