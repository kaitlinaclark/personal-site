import React, {Component} from 'react';
import './Portfolio.css';
import projects from '../files/list-of-projects';
import Project from './Project/Project';

class Portfolio extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            project_list: projects
        }
        
    }
    
    render(){
        return (
            <div className="container" id="portfolio">
                <div className="row">
                    <div className="col-md-6 col-sm-12" id="project_list">
                       { 
                           projects.map(
                               (project, i) => <Project key={i} id={project.id} name={project.name} github={project.github} site={project.site}/>)
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;