import React, { Component } from 'react';
import data from '../data';

export class Main extends Component {
  state = {
    ships: [],
  };

  componentDidMount() {
    this.mapDataToState();
  }

  mapDataToState = () => {
    this.setState({ ships: data });
  };

  render() {
    const { ships } = this.state;

    return (
      <main>
        {ships.map((ship) => (
          <a key={ship.id} href={`/${ship.id}`}>
            <img src={ship.image} alt={ship.name} />
          </a>
        ))}
      </main>
    );
  }
}

export default Main;
