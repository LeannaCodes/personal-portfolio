// IMPORTS

import { Animator, batch, Fade, Move, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn, MoveOut } from 'react-scroll-motion';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Education from './Components/Education/Education';
import Header from './Components/Header/Header';
import WorkExp from './Components/WorkExp/WorkExp';
import { useState } from 'react';

import Timeline from './Timeline';

 
/*const ZoomInScrollOut = batch(StickyIn(), ZoomIn(), FadeIn());*/
const FadeUp = batch(Fade(), Sticky(), Move())

// APP function

const App = () => {

  // Hooks
  const [name,setName] = useState('Leanna ;)');

  // Methods

  const contentChanged = (event) => {

    setName(event.target.value);

  }
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <div className='header'>
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <Header />
          </Animator>
        </div>
     </ScrollPage>

     <ScrollPage page={1}>
      <div className='about-me'>
        <Animator animation={FadeUp}>
          <AboutMe />
        </Animator>
      </div>
     </ScrollPage>

     <ScrollPage page={2}>
      <div className='none backgroundColorUI'>
        <Animator animation={FadeUp}>
          
          
        </Animator>
      </div>
     </ScrollPage>

     <ScrollPage page={3}>
      <div className='education backgroundColorUI'>
        <Animator animation={FadeUp}>
          
          <Timeline />
        </Animator>
      </div>
     </ScrollPage>

     <ScrollPage page={4}>
      <div className='none backgroundColorUI'>
        <Animator animation={FadeUp}>
          
          
        </Animator>
      </div>
     </ScrollPage>


     <ScrollPage page={5}>
      <div className='work-exp'>
        <Animator animation={FadeUp}>
          <WorkExp />
          <input type="text" placeholder="Enter your requirements" onKeyUp={(e) => contentChanged(e)}/><br/>
          <h1>You entered:</h1>
          {name}
        </Animator>
        </div>
     </ScrollPage>



    </ScrollContainer> 
    
  );
}

export default App;
