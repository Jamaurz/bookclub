import React from 'react';

import { Grid, Row, Col, Image, Well, Button, ButtonGroup, Clearfix } from 'react-bootstrap';

import ClearF from './ClearF.jsx';

export default function Settings(props) {
    if(props.myBooks.length > 0) {
        if(props.handlerText2) {
            return  (
               <Grid>
                   {
                       props.myBooks.map((book, index) => {
                           return (
                               <Col xs={12} md={6} key={index}>
                                   <Col xs={3} md={6}>
                                       <Image src={book.thumbnail} alt={book.title} thumbnail />
                                   </Col>
                                   <Col xs={9} md={6}>
                                       <Well>
                                           <h3>{ book.title }</h3>
                                           <ButtonGroup>
                                               <Button onClick={() =>{ props.handlerFunc(book._id, book)}}>{ props.handlerText }</Button>
                                               <Button bsStyle='primary' onClick={() =>{ props.handlerFunc2(book)}}>{props.handlerText2}</Button>
                                           </ButtonGroup>
                                       </Well>
                                   </Col>
                               </Col>
                           )
                       })
                   }
               </Grid>
            )
        } else {
            return  (
                <Grid>
                    {
                        props.myBooks.map((book, index) => {
                            return (
                                <div key={index}>
                                    <Col xs={12} md={6}>
                                        <Col xs={6} md={6}>
                                            <Image src={book.thumbnail} alt={book.title} thumbnail />
                                        </Col>
                                        <Col xs={6} md={6}>
                                            <Well>
                                                <h3>{ book.title }</h3>
                                                <Button bsStyle='primary'  onClick={() =>{ props.handlerFunc(book._id, book) }}>{ props.handlerText }</Button>
                                            </Well>
                                        </Col>
                                    </Col>
                                    <ClearF index={(index % 2)} key={index}></ClearF>
                                </div>
                            )
                        })
                    }
                </Grid>
            )
        }
    } else {
        return <i></i>
    }
}