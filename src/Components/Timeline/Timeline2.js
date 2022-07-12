import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// APP function

const Timeline2 = () => {
  return (

    <VerticalTimeline>
 
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<i className="fa fa-briefcase" />}
  >
    <h3 className="vertical-timeline-element-title">Senior Editorial Researcher</h3>
    <h4 className="vertical-timeline-element-subtitle">CMB Media, Norwich</h4>
    <ul>
      <li>Building long lasting relationships with CEOs and decision making members across a wide range of companies</li>
      <li>Researching, qualifying and finding new project and sales leads</li>
      <li>Setting up and carrying out interviews with executive board members</li>
      <li>Handling all operations and administrative duties</li>
      <li>Handling a pipeline with over 200 leads</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<i className="fa fa-briefcase" />}
  >
    <h3 className="vertical-timeline-element-title">Community Associate</h3>
    <h4 className="vertical-timeline-element-subtitle">Regus, Norwich</h4>
    <ul>
      <li>Running a centre of flexible office space</li>
      <li>Daily contact for 68 businesses</li>
      <li>Manning reception for the whole centre</li>
      <li>Handling all operations and administrative duties</li>
      <li>Dealing with customer queries and complaints</li>
      <li>Covering Sales Manager</li>
      <li>Selling and designing offices</li>
    </ul>
  </VerticalTimelineElement>


</VerticalTimeline>
  );
}







export default Timeline2;
