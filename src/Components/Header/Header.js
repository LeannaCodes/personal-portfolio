import { Component } from 'react';
import logo from '../Images/logo.png';
import "./Header.css";


class Header extends Component {
  render() {
    return (
        <header>
          <img className='logo' src={logo} alt='logo' />
          <h1 className='header-title'>LEANNA LUCAS</h1>
          <h2 className='header2-title'>JavaScript, Node.js, React, Express, Mongo, Tailwind, HTML, CSS.</h2>
        </header>
    )
  }
}

export default Header;
