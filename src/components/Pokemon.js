import React from 'react';

import { pokemonType } from '../types';

import './Pokemon.css';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;

    return (
      <div
        className="pokemon"
      >
        <h3>{name}</h3>
        <img
          src={ image }
          alt={ `${name}` }
          className="pokemon-image"
        />
        <p>{type}</p>
        <p>
          Average weight:
          <span>
            {` ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </span>
        </p>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
};

export default Pokemon;
