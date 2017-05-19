import React from 'react';
import { connect } from "react-redux"

import { Grid, Row, Col, Thumbnail, Jumbotron, Button, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

import './Home.sass';

@connect((store) => {
    return {

    };
})
export default class Home extends React.Component {
    render() {
        return (
            <Grid>
                <Row class="show-grid">
                    <Col xs={12} md={12}>
                        <Jumbotron>
                            <h1>Book Trading Club</h1>
                            <p>This is a Book Trading Club.</p>
                            <p><Button bsStyle="success"><a href='/#/registration'>Join Us</a></Button></p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row class="show-grid">
                    <Col xs={12} md={4}>
                        <Thumbnail src='http://res.cloudinary.com/jamaurz/image/upload/v1495199990/register_cxx9vw.png' alt='registation'>
                            <h3>Registration</h3>
                            <p>Lorem registrarion...</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={12} md={4}>
                        <Thumbnail src='http://res.cloudinary.com/jamaurz/image/upload/v1495200013/add_ou2btw.png' alt='registation'>
                            <h3>Add New Book</h3>
                            <p>Lorem add...</p>
                        </Thumbnail>
                    </Col>
                    <Col xs={12} md={4}>
                        <Thumbnail src='http://res.cloudinary.com/jamaurz/image/upload/v1495199991/trade_niqugv.png' alt='registation'>
                            <h3>Trade</h3>
                            <p>Lorem trade...</p>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Panel header='User Stories' bsStyle="success">
                            <ListGroup>
                                <ListGroupItem>I can view all books posted by every user</ListGroupItem>
                                <ListGroupItem>I can add a new book</ListGroupItem>
                                <ListGroupItem>I can update my settings to store my full name, city, and state.</ListGroupItem>
                                <ListGroupItem>I can propose a trade and wait for the other user to accept the trade</ListGroupItem>
                            </ListGroup>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        )
    }
}