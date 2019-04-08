import React from 'react';

class Home extends React.Component {

  render () {
    return (
      <div>
        <h1 className="title">Welcome to Idle Game</h1>  
        <a href='/game' className="link">Play</a>
        <p>Check out the Github source code <a href="https://github.com/NeedsAUsername/idle-game">here</a></p> 
        <p>Characters from Maplestory</p> 
        <ul>Dev version 2.20 4/7/2019</ul> 
          <li>Adds CSS animations for character, attacking, and damage numbers</li> 
          <li>Styles the layout for desktop and mobile view</li> 
          <li>Adjusts damage and exp system</li>
        <ul>Dev version 2.10 4/2/2019</ul>  
          <li>Adds CSS animations for enemy sprite walking/taking damage/dying</li> 
          <li>Designs state management system for animations and hero attack speed</li>
        <ul>Dev version 2.00 3/31/2019</ul> 
          <li>Creates basic gameplay functionality</li>
          <li>Hero is able to attack and defeat the enemy, gain exp/gold, and level up</li>
        <ul>Dev version 1.00 3/30/2019</ul> 
          <li>Sets up React/Redux template</li> 
          <li>Creates game, user, and enemy components</li>
      </div>
    )
  }
}

export default Home;