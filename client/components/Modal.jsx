import React, {Component}  from 'react'
import {modal} from 'react-redux-modal'
import { Grid, Row, Col, Image, Well, Button, ButtonGroup, Clearfix } from 'react-bootstrap';

export default class myModalComopnent extends Component {
    constructor(props) {
        super(props);
        console.log('## MODAL DATA AND PROPS:', this.props);
    }

    removeThisModal() {
        this.props.removeModal();
    }

    addDbBook(item) {
        this.props.addDbBook(item);
        this.removeThisModal()
    }

    render() {
        return (
            <Grid>
                {
                    this.props.content.map((item, index)=> {
                        return (
                            <div key={index}>
                                <Row>
                                    <Col xs={6}>
                                        <Col xs={6} md={4}>
                                            <Image src={item.thumbnail} alt={item.title} thumbnail />
                                        </Col>
                                        <Col xs={6} md={4}>
                                            <h3>{item.title}</h3>
                                            <Button bsStyle='primary' type="button" onClick={() => { this.addDbBook(item)}} >add</Button>
                                        </Col>
                                    </Col>
                                </Row>
                            </div>
                        )})}
            </Grid>
        );
    }
}