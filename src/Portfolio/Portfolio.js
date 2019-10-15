import React, {Component} from 'react';
import './Portfolio.css';
import projects from '../files/list-of-projects';
import Project from './Project/Project';
class Portfolio extends Component{
    render(){
        return (
            <div className="w-100 border-right border-left border-info" id="portfolio">
                { 
                    projects.map(
                        (project, i) => 
                            <Project key={project.id} name={project.name} github={project.github} site={project.site} langs={project.langs} d={project.description}/>
                    )
                }
                
            </div>
        );
    }
}

export default Portfolio;