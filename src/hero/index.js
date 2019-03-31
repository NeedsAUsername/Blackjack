import React from 'react'; 
import './style.css';

class Hero extends React.Component { 

  attackEnemy = (event) => {
    event.preventDefault(); 
    this.props.attack({
      damage: this.props.hero.attack
    })
  }

  render () { 
    let hero = this.props.hero; 
    return (
      <div className="hero">  
        <h2>Hero: {hero.name} </h2> 

        <ul className="attacks-list"><h3>Attacks</h3> 
          <li className="button attack" onClick={this.attackEnemy}>Basic Attack</li>
        </ul>

        <ul className="stat-list"><h3>Hero Stats</h3>
          <li className="stat">Level: {hero.level}</li>
          <li className="stat">Exp: {hero.exp} / {hero.expToLevel}</li> 
          <li className="stat">Gold: {hero.gold}</li>
          <li className="stat">Hp: {hero.currentHp} / {hero.totalHp} </li>
          <li className="stat">Mp: {hero.currentMp} / {hero.totalMp} </li>
          <li className="stat">Attack: {hero.attack}</li>
          <li className="stat">Auto-attack: {hero.autoAttack}</li> 
        </ul>
      </div>
    )
  }
}

export default Hero;
