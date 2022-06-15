import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Header extends Component {
  render() {
    return (
      <Link to='/'>
        {' '}
        <h1>Star Wars Ships</h1>
      </Link>
    );
  }
}

export default Header;
