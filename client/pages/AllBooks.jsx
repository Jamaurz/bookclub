import React from 'react';
import { connect } from "react-redux"

import { checkMsg, msgStore } from "../actions/commonActions"
import { checkAllBooks, allBooksStore, tradeBook } from "../actions/bookActions"

import BookDisplay from '../components/BookDisplay.jsx'

@connect((store, ownProps) => {
    return {
        user: store.auth.user,
        router: ownProps.router,
        allBooks: store.book.allBooks
    };
})

export default class MyBooks extends React.Component {
    componentWillMount() {
        let newThis = this;

        if(!this.props.user) {
            this.props.router.push('/');
        }

        this.checkAllB = this.checkAllB.bind(this);
        this.checkAllB();
    }

    checkAllB() {
        let newThis = this;
        checkAllBooks(function(allBooks) {
            console.log('all books', allBooks);
            console.log(allBooksStore(allBooks));
            newThis.props.dispatch(allBooksStore(allBooks));
        });
    }

    trade(idBook, book) {
        let newThis = this;
        tradeBook(book, function(data) {
            checkMsg(function(msg) {
                if(msg) {
                    newThis.props.dispatch(msgStore(msg));
                }
            });
        });
    }

    render() {
        return (
            <div>
                <BookDisplay myBooks={this.props.allBooks} handlerFunc={this.trade.bind(this)} handlerText='req' />
            </div>
        )
    }
}
