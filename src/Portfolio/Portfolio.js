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
            <div className="container-fluid" id="portfolio">
                <div className="d-flex col-lg-5 col-md-5 col-sm-12" id="project_list">
                    { 
                        projects.map(
                            (project, i) => <Project key={i} id={project.id} name={project.name} github={project.github} site={project.site} langs={project.langs} d={project.description}/>)
                    }
                    
                </div>
            </div>
        );
    }
}

export default Portfolio;