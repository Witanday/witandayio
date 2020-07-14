import React from 'react';
import { Icon} from 'semantic-ui-react';
import './home.style.scss';

import CustomButton from '../../components/button/button.component'
import ParticleBg from '../../components/particles/particles.component'
import Layout from '../../components/layout/layout'

const HomePage =({simpleBtn})=> {

    return (
        <Layout>
        <div className='home-page'>
        
        <div  className="homepage-content">
        <div  className='text-box'>
                <h2 className='title'>I can help you build <br/>your next full stack applications</h2>
                <p className='text'>I'm Witanday Kyanga : Web Designer <br/>
                & Software Developer based in Boston, Massachussets,USA.
                <br/> Designing and developing mobile friendly web-applications.
                </p>
                <CustomButton to='/projects' className={`${simpleBtn}`}>Learn more here <span className='arrow'>&#8674;</span></CustomButton>
        </div>
        <div className='stack'>
            <ul  className='puzzle'>
                <li className='puzzle-item1 '><Icon name='tv'/></li>
                <li className='puzzle-item2 '><Icon name='mobile alternate'/></li>
                <li className='puzzle-item4 '><Icon name='tablet alternate'/></li> 
                <li className='puzzle-item5 '><Icon name='laptop'/></li> 
            </ul>

            <ul  className='puzzle'>
            <li className='puzzle-item6 '><Icon name='server'/></li>
            </ul>

            <ul  className='puzzle'>
            <li className='puzzle-item7 '><Icon name='database'/></li>
            </ul>
        </div>
        </div>
        </div>
        </Layout>
    )
}


export default HomePage;
