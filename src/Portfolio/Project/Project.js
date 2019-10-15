import React, {Component } from 'react';
import './Project.css';

class Project extends Component {
   render(){
       return (
        <div className="border border-info rounded-right project">
            <h3>{this.props.name}</h3>
            <p>{this.props.d}</p>
            <i>Languages used: {this.props.langs}</i>
            <div className="d-flex justify-content-end align-items-center">
                <a className="btn btn-primary btn-xs"  href={this.props.github} target="_blank">Github</a>
                <a className="btn btn-primary btn-xs"  href={this.props.site} target="_blank">Live Site</a>
            </div>
        </div>
    );
   } 
}

export default Project; 