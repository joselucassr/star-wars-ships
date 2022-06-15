import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import data from '../data';

export class Details extends Component {
  state = {
    name: '',
    description: '',
    image: '',
  };

  componentDidMount() {
    const { shipId } = this.props.match.params;
    this.mapDataToState(shipId);
  }

  mapDataToState = (shipId) => {
    const ship = data.find((ship) => ship.id === shipId);
    this.setState(ship);
  };

  render() {
    const { name, description, image } = this.state;

    return (
      <>
        <section className='detailRow'>
          <img src={image} alt={name} />
          <div className='info'>
            <div className='name'>{name}</div>
            <div className='description'>{description}</div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Details);
