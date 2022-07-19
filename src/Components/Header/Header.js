import { Component } from 'react';
import logo from '../Images/logo.png';
import "./Header.css";


class Header extends Component {
  render() {
    return (
        <header className='header'>
          <a href='https://www.linkedin.com/in/leanna-lucas' rel='click me'>
          <img className='logo' src={logo} alt='logo' />
          </a>
          <h1 className='header-title'>LEANNA LUCAS</h1>
          <h2 className='header2-title'>JavaScript, Node.js, React, Express, Mongo, Tailwind, HTML, CSS.</h2>
        </header>
    )
  }
}

export default Header;
