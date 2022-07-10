import { Component } from 'react';
import logo from '../Images/logo.png';
import ScrollDown from '../ScrollDown/ScrollDown';
import "./Header.css";


class Header extends Component {
  render() {
    return (
        <header>
          <img src={logo} alt='logo' />
            <h1>Leanna Lucas</h1>
            <ScrollDown />
        </header>
    )
  }
}

export default Header;
