import { Animator, batch, Fade, Move, ScrollContainer, ScrollPage, Sticky, StickyIn, Zoom, ZoomIn, MoveOut } from 'react-scroll-motion';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Education from './Components/Education/Education';
import Header from './Components/Header/Header';
import WorkExp from './Components/WorkExp/WorkExp';

 
/*const ZoomInScrollOut = batch(StickyIn(), ZoomIn(), FadeIn());*/
const FadeUp = batch(Fade(), Sticky(), Move())

function App() {
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
      <div className='education'>
        <Animator animation={FadeUp}>
          <Education />
        </Animator>
      </div>
     </ScrollPage>


     <ScrollPage page={3}>
      <div className='work-exp'>
        <Animator animation={FadeUp}>
          <WorkExp />
        </Animator>
        </div>
     </ScrollPage>
    </ScrollContainer> 
  );
}

export default App;
