import React from 'react';
import {Link} from 'react-router-dom';
import './about.scss'


const AboutPage =()=>(

    <div className='about-page'>
  
          <Link
          className='about-avatar'
          ></Link>
          <div className='about-details'>
            <h3>Witanday Kyanga — Software Developer</h3>
            <ul>
                <li>I acquired project and time management skills, as well as Developed interpersonal skills by pair programming for all coding challenges while effectively meeting milestones and deadlines</li>
                <li>Made practical and effective use of Agile ,iterative approach to software development and Git version control system</li>
                <li>Acquired testing experience by evaluating functionality of clients and servers side web applications</li>
            </ul>
            <Link className='about-to-projects' to='/projects'>Take a look at our recent projects...</Link>
          </div>
       
    </div>
);



export default AboutPage;