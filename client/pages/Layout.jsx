import React from 'react';
import { Link } from 'react-router';
import { connect } from "react-redux"

import { checkAuth, authStore, checkMsg, msgStore } from "../actions/commonActions"

import Login from '../components/Login.jsx';
import Message from '../components/Message.jsx';

import './Layout.sass';

@connect((store) => {
    return {
        user: store.auth.user,
        msg: store.common.msg
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        let newThis = this;
        checkAuth(function(data) {
            if(data) {
                newThis.props.dispatch(authStore(data));
            }
        });

        checkMsg(function(msg) {
           if(msg) {
               newThis.props.dispatch(msgStore(msg));
           }
        });
    }

    render() {
        return (
            <div class='app'>
                <div class='navigation'>
                    <Login login={this.props.user} />
                </div>
                {/*<div class='message'>{ this.props.msg }</div>*/}
                <Message msg={this.props.msg} />
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}