import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

class Pokedex extends React.Component {
  render() {
    const { pokemonList } = this.props;
    const firstPokemon = pokemonList[0];

    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon key={ firstPokemon.id } pokemon={ firstPokemon } />
        </div>
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
