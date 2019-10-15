import React, {Component } from 'react';
import './Project.css';
class Project extends Component {
   render(){
       return (
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray" id={this.props.id}>
            <div className="d-flex justify-content-between align-items-center w-100">
                <input type="checkbox" className="form-check-input" ></input>
                <label className="form-check-label"  >{this.props.name}</label>
                <button className="btn btn-link"  href={this.props.github} target="_blank">Github Link</button>
                <button className="btn btn-link"  href={this.props.site} target="_blank">Live Site</button>
            </div>
        </div>
    );
   } 
}

export default Project;