import { Component } from 'react';
import './Education.css'
import tech from '../Images/tech.png';
import arrow from '../Images/arrow.png';
import clickhere from '../Images/clickhere.png';


class Education extends Component {
  render() {
    return (
      <div className='education'>

        <div className='img-grp'>
       <img className='tech-logo' src={tech} alt='tech' />
 

       <img className='arrow' src={arrow} alt='arrow' />
        

       <img className='clickhere' src={clickhere} alt='clickhere' />
       

       </div>

       <h2 className='subtitle'>Full Stack MERN Bootcamp</h2>

       <h2 className='education-title2'>Key Achievements:</h2>

       <ul className='content'>
        <li>Awarded full scholarship to study the full stack MERN bootcamp</li>
        <li>Awarded Student Liason position to help mentor and teach other students</li>
       </ul>

        <h2 className='education-title2'>I Can Now:</h2>
        <ul className='content'>
          <li>Collaboratively design and create web applications from scratch using MVC patterns, built with professional-grade HTML, CSS, and JavaScript using the React JavaScript library.</li>
          <li>Work with string, array, and object data structures and algorithms to solve code challenges with pure JavaScript programming.</li>
          <li>Build dynamic front-end and back-end applications deployed to cloud platforms.</li>
          <li>Utilize dependency management techniques to build with third-party libraries such as ExpressJS and React-Bootstrap
          Persist data in a NoSQL database, sourced from third-party APIs or user-generated content.</li>
          <li>Follow agile software development practices during week-long sprints.</li>
        </ul>
        </div>
        )
      }
    }


export default Education;