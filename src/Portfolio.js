import React, {Component} from 'react';
import './Portfolio.css';
// import image1 from './files/clark_headshot.jpg';
import projects from './files/list-of-projects';
import Project from './Project';

class Portfolio extends Component{
    constructor(props){
        super(props)
        this.state = [{
            project_list: projects
        }]
        
    }
    render(){
        return (
            <div className="container" id="portfolio">
                <div className="row">
                    <div className="col-md-6 col-sm-12" id="project_list">
                       { 
                           this.state.project_list.map(
                               (project) => <Project id={project.id}
                                                    name = {project.name}
                                                    github = {project.github}
                                                    site = {project.site}
                               />
                           )}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;