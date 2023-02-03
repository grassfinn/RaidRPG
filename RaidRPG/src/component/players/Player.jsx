import React from 'react';
// https://www.w3schools.com/react/react_class.asp
export default class Player extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'default',
      hp: 10,
      att: 10,
      def: 10,
      spd: 10,
      img: 'https://ouch-cdn2.icons8.com/VWDqAw-xDDkHWfpoqnkswJH32BK6lZtpzKBxgJvVT8U/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDUy/L2M0ZDY5OGRkLWE0/MmItNDMwYS1hY2Uy/LTI3YjkwYzEzNmNl/ZC5zdmc.png',
    };
  }

  

  render() {
    const {name, hp, att, def, spd, img} = this.state
    return (
        <div>
            <h1>Name: {name}</h1>
            <img src={img} alt="" />
            <h2>HP: {hp}</h2>
            <h2>Att: {att}</h2>
            <h2>Def: {def}</h2>
            <h2>Speed: {spd}</h2>
        </div>
    )
  }
}
