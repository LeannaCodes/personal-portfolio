import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// APP function

const Timeline = () => {
  return (
    <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#FABAE5', color: '#ff69b4' }}
    contentArrowStyle={{ borderRight: '#FABAE5' }}
    date="May 2022 - present"
    iconStyle={{ background: '#FABAE5', color: '#ffffff' }}
    icon={<i className="fa fa-briefcase" />}
  >
    <h3 className="vertical-timeline-element-title">Tech Educators</h3>
    <h4 className="vertical-timeline-element-subtitle">Full Stack Bootcamp, Norwich</h4>
    <ul className='descriptions'>
      <li>Awarded full scholarship to study Full MERN Stack Bootcamp</li>
      <li>JavaScript, HTML & CSS focused </li>
      <li>Using Git to manage workflow</li>
      <li>Pair-programming and merging conflicts with GitHub</li>
      <li>Experience working to project briefs and deadlines </li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#FABAE5', color: '#ff69b4' }}
    date="2010 - 2011"
    iconStyle={{ background: '#FABAE5', color: '#ff69b4' }}
    icon={<i className="fa fa-briefcase" />}
  >
    <h3 className="vertical-timeline-element-title">Film and Moving Image Production BA(Hons)</h3>
    <h4 className="vertical-timeline-element-subtitle">Norwich University of Arts, 2:1</h4>
  </VerticalTimelineElement>

</VerticalTimeline>
  );
}

export default Timeline;
