import React, {Component } from 'react';
import './Project.css';

class Project extends Component {
   render(){
       return (
        
        <div className="row" >
            <div className="col-12">
                <h5 >{this.props.name}
                  <a className="fa fa-md fa-github"  href={this.props.github} target="_blank"> </a>
                  <a className="fa fa-md fa-link"  href={this.props.site} target="_blank"> </a>
               </h5>
                <div >{this.props.d}</div>
                <div ><i>Languages used: {this.props.langs}</i></div>
            </div>
        </div>
        
    );
   } 
}

export default Project; 
