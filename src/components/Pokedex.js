/* eslint-disable no-shadow */
import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';

import './Pokedex.css';

class Pokedex extends React.Component {
  state = {
    pokemonIndex: 0,
    pokemonTypes: [],
    pokemonType: 'All',
    // eslint-disable-next-line react/destructuring-assignment
    filteredPokemonList: this.props.pokemonList,
  };

  componentDidMount() {
    this.catchPokemonTypes();
  }

  catchPokemonTypes = () => {
    const { pokemonList } = this.props;
    const allTypes = pokemonList.map((pokemon) => pokemon.type);
    const uniqueTypes = [...new Set(allTypes)];
    this.setState({ pokemonTypes: uniqueTypes });
  };

  handlePokemonFilter = async (type) => {
    const { pokemonList } = this.props;
    const filteredPokemonList = type === 'All' ? pokemonList
      : pokemonList.filter((pokemon) => pokemon.type === type);

    this.setState({
      pokemonType: type,
      pokemonIndex: 0,
      filteredPokemonList,
    });
  };

  handleNextPokemon = () => {
    const { pokemonIndex, filteredPokemonList } = this.state;

    if (pokemonIndex === filteredPokemonList.length - 1) {
      this.setState({ pokemonIndex: 0 });
    } else {
      this.setState({ pokemonIndex: pokemonIndex + 1 });
    }
  };

  render() {
    // const { pokemonList } = this.props;
    // eslint-disable-next-line no-shadow
    const {
      pokemonIndex,
      pokemonTypes,
      pokemonType,
      filteredPokemonList,
    } = this.state;

    const numberOfPokemons = filteredPokemonList.length;
    const currentPokemon = filteredPokemonList[pokemonIndex];

    return (
      <>
        <h1> Pokédex </h1>
        <div className="type-buttons">
          {pokemonTypes.map((type) => (
            <button
              key={ type }
              type="button"
              // disabled={ filteredPokemonList.length === 1 }
              value={ type }
              className="type-button"
              onClick={ () => this.handlePokemonFilter(type) }
            >
              { type }
            </button>
          )) }
          <button
            className="type-button"
            value="All"
            onClick={ () => this.handlePokemonFilter('All') }
          >
            All

          </button>
        </div>
        <span className="pokemon-count">
          Total de Pokémons:
          {' '}
          {numberOfPokemons}
          {' '}
        </span>
        <div className="pokedex">
          {currentPokemon
          && <Pokemon
            key={ currentPokemon.id }
            pokemon={ currentPokemon }
            pokemonType={ pokemonType }
          />}
          {numberOfPokemons > 1 && (
            <button
              type="button"
              onClick={ this.handleNextPokemon }
              className="nextButton"
            >
              Próximo pokémon
            </button>
          )}
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
