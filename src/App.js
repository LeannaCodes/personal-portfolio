
import { Animator, batch, Fade, Move, ScrollContainer, ScrollPage, Sticky, MoveOut } from 'react-scroll-motion';
import './App.css';
import AboutMe from './Components/AboutMe/AboutMe';
import Education from './Components/Education/Education';
import Header from './Components/Header/Header';

import Timeline from './Components/Timeline/Timeline.js';
import EducationPt2 from './Components/Education/EducationPt2';
import Timeline2 from './Components/Timeline/Timeline2';

const FadeUp = batch(Fade(), Sticky(), Move())


const App = () => {
  return (
<>
    {/* <ScrollContainer>
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
    </ScrollContainer>  */}
<Header />
<AboutMe />

      <div className='tech-ed'>
          <Education />
      </div>


  
      <div className='tech-ed2'> 
          <EducationPt2 />
      </div>

      <div className='timelinebg backgroundColorUI'>  
        <h1 className='timeline-header'>EDUCATION</h1>
          <Timeline />
      </div>

      <div className='timelinebg backgroundColorUI'>  
        <h1 className='timeline-header'>WORK EXPERIENCE</h1>
          <Timeline2 />
      </div>
  

   
      <div className='thankyou'></div>
        </>
  



    
  );
}

export default App;
