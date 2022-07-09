import { Component } from 'react';
import { Animator } from 'react-scroll-motion';
import "./Header.css";


/*<Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>*/

class Header extends Component {
  render() {
    return (
        <header>
          
            <h1>
            <Animator >
              Leanna Lucas
            </Animator>
            </h1>
        </header>
    )
  }
}

export default Header;
