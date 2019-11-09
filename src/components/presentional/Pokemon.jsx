import React, {Component} from 'react';

class Pokemon extends Component{
    render(){
      const {pokemon,id} = this.props;
      return <div className="pokemon--species">
              <div className="pokemon--species--container">
                <div className="pokemon--species--sprite">
                </div>
                <div className="pokemon--species--name"> {pokemon.name} </div>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
                <div>{pokemon.count}</div>
                <button onClick={this.props.increment}>Rate me</button>
              </div>
            </div>
        ;
      }
  }

  export default Pokemon