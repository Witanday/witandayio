import React from 'react'
import './project.style.scss';
import CustomButton from '../button/button.component'
import {  FaCheck} from 'react-icons/fa';




const Project =(  {title, subtutle, descrition, imageUrl, url,technologies })=> {

    console.log()
    return (
        <div className='project'>
            <div className='image'>
            <img  alt='project-image'src={imageUrl}/>
               
            </div>
            <div className='project-description'>
                <h3 className='title'>{title}</h3>
                <span className='subtitle'>{subtutle}</span>
                <div className='description'>
                    {descrition.map( desc => <div className='iconicdiv'><span className='icon'><FaCheck /></span>{desc}</div>)}
                   
                </div>
                <CustomButton>View Demo</CustomButton>
                <div className='techonology-content'>
                <div className='title'>Technologies Used: </div>
                {technologies.map(technology =><span className='techy'>{technology }</span>)}
                </div>
            </div>
        </div>
    )
}


export default Project;

