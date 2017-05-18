import React from 'react';
import { connect } from "react-redux"

import { checkMsg, msgStore } from "../actions/commonActions"
import { bookinputStote, addBook, addDbBook, booksStote, checkMyBooks, myBooksStore, delDbBook } from "../actions/bookActions"
import { getRequest, requestStore, tradeStore, delDbReq, getTrade, delDbTrade, tradeBook } from "../actions/bookActions"
import { modal } from 'react-redux-modal'

import myModalComopnent from '../components/Modal.jsx'
import BookDisplay from '../components/BookDisplay.jsx'

@connect((store, ownProps) => {
    return {
        user: store.auth.user,
        router: ownProps.router,
        bookinput: store.book.bookinput,
        books: store.book.books,
        myBooks: store.book.myBooks,
        request: store.book.request,
        trade: store.book.trade
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

    addModal() {
        modal.add(myModalComopnent, {
            addDbBook: this.addDbBook.bind(this),
            content: this.props.books,
            title: 'This is my modal',
            size: 'medium', // large, medium or small,
            closeOnOutsideClick: false, // (optional) Switch to true if you want to close the modal by clicking outside of it,
            hideTitleBar: false, // (optional) Switch to true if do not want the default title bar and close button,
            hideCloseButton: false // (optional) if you don't wanna show the top right close button
            //.. all what you put in here you will get access in the modal props ;)
        });
    }

    changeBookInput(value) {
        this.props.dispatch(bookinputStote(value.target.value))
    }

    addBook() {
        let newThis = this;
        addBook(encodeURIComponent(this.props.bookinput), function(data) {
            newThis.props.dispatch(bookinputStote(''));
            if(data) {
                newThis.props.dispatch(booksStote(data));
                newThis.addModal();
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
            <div>
                <div>
                    <div>
                        <h3>Your trage requests ({this.props.request.length})</h3>
                        <BookDisplay myBooks={this.props.request} handlerFunc={this.delDbReq.bind(this)} handlerText='Remove'/>
                    </div>
                    <hr />
                    <div>
                        <h3>Trade requests for you({this.props.trade.length})</h3>
                        <BookDisplay
                            myBooks={this.props.trade}
                            handlerFunc={this.delDbTrade.bind(this)}
                            handlerText='No'
                            handlerFunc2={this.yesDbReq.bind(this)}
                            handlerText2='Yes'
                        />
                    </div>
                </div>
                <input type='text' value={this.props.bookinput} onChange={this.changeBookInput.bind(this)} />
                <input type='button' value='Add Book' onClick={this.addBook.bind(this)} />
                <BookDisplay myBooks={this.props.myBooks} handlerFunc={this.delDbBook.bind(this)} handlerText='Remove'/>
            </div>
        )
    }
}
