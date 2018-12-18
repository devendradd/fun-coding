import React, { Component } from 'react';
import axios from 'axios';
import './surveyList.css';
import Survey from './survey';

export default class SurveyList extends Component{
    
    constructor(){
        super();
        this.state= {data:[], resultItems:''}
    }

    componentDidMount(){
        var dataList=undefined;
        axios.get('http://www.mocky.io/v2/56fcf6871000000e13aed252')
            .then(response => {
                console.log("data is :", response.data)
                this.setState({data: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
            // this.setState({data: dataList});
    }




    render(){
        console.log('data for mapping : ',this.state.data);
        var resultItems = this.state.data.map((result)=> {
            var item = {
                id: result.id,
                title: result.title,
                data: result.data,
                shortDesc: result.shortDesc,
                description : result.description
            };

            return <Survey element={item} />
        })

        this.setState({resultItems: resultItems});
        
        
        return(
            <div className="suerveyListCOntainer">
                {this.state.resultItems}
            </div>
        )
    }
}