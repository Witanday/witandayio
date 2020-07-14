import React from 'react';
import './project.style.scss'
import {  FaProjectDiagram, FaShoppingBasket, FaComments} from 'react-icons/fa';
import Header from '../header/header-component'
import Layout from '../../components/layout/layout.js'
const Projects=()=>(
    <Layout>
    <div className="header">
    <div className='header-content'>
        <div className='icon-box'><FaProjectDiagram/></div>
        <h2 >Take a look a our recent Projects...</h2>
    </div>
    <div className='content'>
        <div  className='projects-cards'>
        <div  className='project-card'>
        <img src="https://i.ibb.co/kg0C3Jh/swallow.jpg" alt="swallow" border="0"/>
        <div className='description'>
            <h3>Swallow-texting</h3>
            <ul className='detail-list'>
            <li className='list-item'>Share news</li>
            <li className='list-item'>Submit tweets</li>
            <li className='list-item'>Share your point of view on a particular tweet</li>
            <li className='list-item'>Comment and Like</li>
            </ul>
            <a href='https://swallowup.netlify.app'>View demo</a>
        </div>
        </div>

        <div  className='project-card'>
        <img src="https://i.ibb.co/6vFLbgp/dmnd.jpg" alt="dmnd" border="0"/>
        <div className='description'>
            <h3>Diamond-Clothing Store</h3>
            <ul className='detail-list'>
            <li className='list-item'>Used Business to consumer Model like supermarkets where costumers buy their shopping</li>
            <li className='list-item'>Administrator(Owner) can add items to sell to consumers</li>
            <li className='list-item'>Used Stripe for secure payment</li>
            </ul>
            <a href='https://dmnd-clothing.herokuapp.com/'>View demo</a>
        </div>
        </div>
        
        </div>
        <div  className='projects-list'>
            <h3>Quick links </h3>
            <div className='project-followup'>
                <div className='project-icon'><FaShoppingBasket/></div>
                <div className='project-link'>
                    <h4>Dmnd-Clothing</h4>
                    <h5>A business to consumer E-commerce</h5>
                    <a href='https://dmnd-clothing.herokuapp.com/'>Website demo</a>
                </div>
            </div>
            <div className='project-followup'>
            <div className='project-icon'><FaComments/></div>
            <div className='project-link'>
                <h4>Swallow-Texting</h4>
                <h5>Share your point of view on a tweet</h5>
                <a href='https://swallowup.netlify.app'>Underconstruction</a>
            </div>
        </div>
        </div>
        </div></div>
    </Layout>
 
    )


export default Projects;