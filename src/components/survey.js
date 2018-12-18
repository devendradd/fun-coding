import React, {Component} from 'react';

export default class Survey extends Component{
    constructor(){
        super();
        // console.log("data in servey component: ", this.props.dataToChild);
        console.log("this is constructor of survey................");
    }

    render(){
        return(
            <div>
                id: {this.props.id}
                title: {this.props.title}
                date: {this.props.date}
                short description: {this.props.shortDesc}
                description: {this.props.description}
            </div>
        );
    }
}