import React, {Component} from 'react';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col, CardGroup } from 'reactstrap';

import './surveyList.css';



export default class Survey extends Component{

    constructor(props){

        super(props);



    }



    render(){



      var custom_card = {

            float: 'left',

            // height: '400px',

            width: '265px',

            margin : '10px',

            backgroundColor: '#204FA7',

            borderColor: '#204FA7',

            color: 'white',

            overflow:'scroll',



        }



        return(



           <Card body inverse style={custom_card} id="wrapper" className="jumbotron" >

            <Row>

                <Col xs="12" style={{height: '240px'}}>

                    <CardBody>

                        <CardTitle>Name : Survey</CardTitle>

                        <CardSubtitle>

                            Title:  {this.props.data.title}

                        </CardSubtitle>

                        <CardText>

                            Id: {this.props.data.id} <br/> <br/>

                            Title: {this.props.data.title}<br/> <br/>

                            Date: {this.props.data.date}<br/> <br/>

                            Short Desc: {this.props.data.shortDesc} <br/> <br/>

                            Desc: {this.props.data.description}

                        </CardText>

                    </CardBody>

                </Col>

            </Row>

            {/* <Row>

                <Col xs="12" style={{height: '100px'}}>

                    <Button color="primary" size="sm" block>Like</Button>{' '}

                </Col>

            </Row> */}

        </Card>

        );

    }

}