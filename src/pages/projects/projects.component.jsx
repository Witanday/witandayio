import React,{Component} from 'react'
import './projects.styles.scss'

import Project from '../../components/project/project.component'
import Data from '../../components/project/data';



  class projectPage extends Component{

    constructor(props){
        super();

        this.state= {
            Data
        }
    }

    render(){
        const {Data} = this.state;
        return (
            <div className='project-page'>
                <h2 className='title'>Projects</h2>
                <div className='project-list'>
                {
                    Data.map( data =>  <Project key={Data.id}  {...data}/>)
                }
                
                </div>

            </div>
        )
    }
    }

    


export default projectPage;