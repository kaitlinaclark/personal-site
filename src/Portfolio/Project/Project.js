import React, {Component } from 'react';
import './Project.css';

class Project extends Component {
   render(){
       return (
        
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{this.props.name}</h5>
                <div className="card-text">{this.props.d}</div>
                <div className="card-text"><i>Languages used: {this.props.langs}</i></div>
                <div className="d-flex justify-content-end align-items-center">
                    <a className="btn btn-primary btn-xs"  href={this.props.github} target="_blank">Github</a>
                    <a className="btn btn-primary btn-xs"  href={this.props.site} target="_blank">Live Site</a>
                </div>
            </div>
        </div>
        
    );
   } 
}

export default Project; 
