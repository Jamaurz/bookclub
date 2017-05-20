import React from 'react';
import { connect } from "react-redux"

import { showModal, hideModal } from '../actions/mymodalActions'

import { ButtonToolbar, Button, Modal, Grid, Row, Col, Image } from 'react-bootstrap';


@connect((store) => {
    return {
        show: store.mymodal.show,
        books: store.book.books
    };
})
export default class MyModal extends React.Component {
    constructor(props) {
        super(props);
        this.showModal = this.showModal.bind(this);
        this.hideModal= this.hideModal.bind(this);
    }

    showModal() {
        this.props.dispatch(showModal());
    }

    hideModal() {
        this.props.dispatch(hideModal());
    }

    addDbBook(data) {
        this.props.addDbBook(data);
        this.hideModal();
    }

    render() {
        return (
            <ButtonToolbar>
                <Modal
                    show={this.props.show}
                    onHide={this.hideModal}
                    dialogClassName="custom-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Book</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Grid>
                            {
                                this.props.books.map((item, index)=> {
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
                    </Modal.Body>
                </Modal>
            </ButtonToolbar>
        )
    }
}