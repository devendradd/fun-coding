import React, { Component } from 'react';

import {Table, CardDeck} from 'reactstrap';

import axios from 'axios';

import './surveyList.css';

import Survey from './survey';



export default class SurveyList extends Component{



    constructor(){

        super();

        this.state= {data:[], resultItems:''}

    }



    componentDidMount(){



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

        // console.log('data for mapping : ',this.state.data);

        var resultItems = this.state.data.map((result)=> {



          // var resultKeys = Object.keys(result);

          // var item = {

          //       id: result[resultKeys[0]],

          //       title: result[resultKeys[1]],

          //       date: result[resultKeys[2]],

          //       shortDesc: result[resultKeys[3]],

          //       description : result[resultKeys[4]]

          // }



            var item = {

                id: result.id,

                title: result.title,

                date: result.creation_date,

                shortDesc: result["short_ description"],

                description : result.description

            };

            return <Survey key={item.id} data={item}/>;



        })





        return(

            <div className="suerveyListCOntainer">

              <CardDeck>

                {resultItems}>

              </CardDeck>

            </div>

        )

    }

}

