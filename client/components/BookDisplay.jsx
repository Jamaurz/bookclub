import React from 'react';

export default function Settings(props) {
    if(props.myBooks.length > 0) {
        if(props.handlerText2) {
            return  (
               <div>
                   {
                       props.myBooks.map((book, index) => {
                           return (
                               <div key={index}>
                                   <h3>{ book.title }</h3>
                                   <p>No { book.idBook }</p>
                                   <img src={book.thumbnail} alt={book.title} />
                                   <span onClick={() =>{ props.handlerFunc(book._id, book)}}>{ props.handlerText }</span>
                                   <span onClick={() =>{ props.handlerFunc2(book)}}>{props.handlerText2}</span>
                               </div>
                           )
                       })
                   }
               </div>
            )
        } else {
            return  (
                <div>
                    {
                        props.myBooks.map((book, index) => {
                            return (
                                <div key={index}>
                                    <h3>{ book.title }</h3>
                                    <img src={book.thumbnail} alt={book.title} />
                                    <p>{ book._id }</p>
                                    <span onClick={() =>{ props.handlerFunc(book._id, book) }}>{ props.handlerText }</span>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    } else {
        return <p></p>
    }
}