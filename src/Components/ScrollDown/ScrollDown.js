import React, { Component } from 'react'
import downarrow from '../Images/downarrow.png';
import './ScrollDown.css'

class ScrollDown extends Component {
  render() {
    return (
      <div>
        <p className='scroll-text'>Scroll Down!</p>
        <img className='arrow-pic'src={downarrow} alt='downarrow' />
      </div>
    )
  }
}

export default ScrollDown