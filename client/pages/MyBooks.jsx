import React from 'react';
import { connect } from "react-redux"

import { Grid, Row, Col, Well, Button, Collapse, FormControl, Form } from 'react-bootstrap';

import { showModal } from '../actions/mymodalActions'
import { checkMsg, msgStore, openReq, openTrade } from "../actions/commonActions"
import { bookinputStote, addBook, addDbBook, booksStote, checkMyBooks, myBooksStore, delDbBook } from "../actions/bookActions"
import { getRequest, requestStore, tradeStore, delDbReq, getTrade, delDbTrade, tradeBook } from "../actions/bookActions"

import MyModal from '../components/MyModal.jsx'
import BookDisplay from '../components/BookDisplay.jsx'

@connect((store, ownProps) => {
    return {
        user: store.auth.user,
        router: ownProps.router,
        bookinput: store.book.bookinput,
        books: store.book.books,
        myBooks: store.book.myBooks,
        request: store.book.request,
        trade: store.book.trade,
        openReq: store.common.openReq,
        openTrade: store.common.openTrade
    };
})

export default class MyBooks extends React.Component {
    componentWillMount() {
        let newThis = this;

        if(!this.props.user) {
            this.props.router.push('/');
        }

        this.checkMyB = this.checkMyB.bind(this);
        this.checkMyB();
        this.getRequest = this.getRequest.bind(this);
        this.getRequest();
        this.getTrade = this.getTrade.bind(this);
        this.getTrade();
    }

    checkMyB() {
        let newThis = this;
        checkMyBooks(function(myBooks) {
            newThis.props.dispatch(myBooksStore(myBooks));
        });
    }

    getRequest() {
        let newThis = this;
        getRequest(function(request) {
            newThis.props.dispatch(requestStore(request));
        });
    }

    getTrade() {
        let newThis = this;
        getTrade(function(trade) {
            newThis.props.dispatch(tradeStore(trade));
        });
    }

    delDbBook(id, book) {
        let newThis = this;
        delDbBook(id, function(data) {
            checkMsg(function(msg) {
                if(msg) {
                    newThis.checkMyB();
                    newThis.getRequest();
                    newThis.getTrade();
                    newThis.props.dispatch(msgStore(msg));
                }
            });
        });
    }

    yesDbReq(book) {
        let newThis = this;
        newThis.delDbTrade(book._id, book);
        newThis.addDbBook(book, book.emailTrade);
        newThis.delDbBook(book.idBook);
    }

    delDbReq(idBook, book) {
        let newThis = this;
        delDbTrade(idBook, function(data) {
            checkMsg(function(msg) {
                if(msg) {
                    newThis.getRequest();
                    newThis.props.dispatch(msgStore(msg));
                }
            });
        });
    }

    delDbTrade(idBook, book) {
        let newThis = this;
        delDbTrade(idBook, function(data) {
            checkMsg(function(msg) {
                if(msg) {
                    newThis.getTrade();
                    newThis.props.dispatch(msgStore(msg));
                }
            });
        });
    }

    changeBookInput(value) {
        this.props.dispatch(bookinputStote(value.target.value))
    }

    addBook() {
        console.log('add book tiger');
        let newThis = this;
        addBook(encodeURIComponent(this.props.bookinput), function(data) {
            newThis.props.dispatch(bookinputStote(''));
            if(data) {
                newThis.props.dispatch(booksStote(data));
                newThis.props.dispatch(showModal());
            } else {
                newThis.props.dispatch(msgStore('invalid input'));
            }
        });
    }

    addDbBook(data, email) {
        let addEmail = false;
        if(email) {
            addEmail = email;
        }
        let newThis = this;
        addDbBook(data, addEmail, function(result) {
            checkMsg(function(msg) {
                if(msg) {
                    newThis.checkMyB();
                    newThis.props.dispatch(msgStore(msg));
                }
            });
        });
    }


    render() {
        return (
            <Grid>
                <Grid>
                    <Row>
                        <Button onClick={ ()=> this.props.dispatch(openReq())}>
                            Your trage requests ({this.props.request.length})
                        </Button>
                        <Collapse in={this.props.openReq}>
                            <div>
                                <BookDisplay myBooks={this.props.request} handlerFunc={this.delDbReq.bind(this)} handlerText='Remove'/>
                            </div>
                        </Collapse>
                    </Row>
                    <hr />
                    <Row>
                        <Button onClick={ ()=> this.props.dispatch(openTrade())}>
                            Trade requests for you({this.props.trade.length})
                        </Button>
                        <Collapse in={this.props.openTrade}>
                            <div>
                                <BookDisplay
                                    myBooks={this.props.trade}
                                    handlerFunc={this.delDbTrade.bind(this)}
                                    handlerText='No'
                                    handlerFunc2={this.yesDbReq.bind(this)}
                                    handlerText2='Yes'
                                />
                            </div>
                        </Collapse>
                    </Row>
                </Grid>
                <hr />
                <Well>
                    <Form inline>
                        <FormControl type='text' value={this.props.bookinput} onChange={this.changeBookInput.bind(this)} />
                        <Button bsStyle="success" type='button' onClick={this.addBook.bind(this)} >Add Book</Button>
                        <MyModal addDbBook={this.addDbBook.bind(this)} />
                    </Form>
                </Well>
                <BookDisplay myBooks={this.props.myBooks} handlerFunc={this.delDbBook.bind(this)} handlerText='Remove'/>
            </Grid>
        )
    }
}
