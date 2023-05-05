import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  state = {
    pokemonIndex: 0,
  };

  handleNextPokemon = () => {
    const { pokemonIndex } = this.state;
    const { pokemonList } = this.props;
    if (pokemonIndex === pokemonList.length - 1) {
      this.setState({ pokemonIndex: 0 });
    } else {
      this.setState({ pokemonIndex: pokemonIndex + 1 });
    }
  };

  render() {
    const { pokemonList } = this.props;
    const { pokemonIndex } = this.state;
    const currentPokemon = pokemonList[pokemonIndex];

    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon key={ currentPokemon.id } pokemon={ currentPokemon } />
        </div>
        <button type="button" onClick={ this.handleNextPokemon }>Próximo pokémon</button>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
