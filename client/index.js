// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/app';
//
// ReactDOM.render(<App />, document.getElementById('app'));

import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import { Provider } from "react-redux"
import ReduxModal from 'react-redux-modal'

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Layout from "./pages/Layout.jsx";
import Registration from "./pages/Registration.jsx";
import Settings from "./pages/Settings.jsx";
import MyBooks from "./pages/MyBooks.jsx";
import AllBooks from "./pages/AllBooks.jsx";

import store from "./store"

const app = document.getElementById('app');

const history = syncHistoryWithStore(hashHistory, store);
console.log(history);
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Router history={hashHistory}>
                <Route path='/' component={Layout}>
                    <IndexRoute component={Home}/>
                    <Route path='login' component={Login}/>
                    <Route path='registration' component={Registration} />
                    <Route path='settings' component={Settings}/>
                    <Route path='mybooks' component={MyBooks}/>
                    <Route path='allbooks' component={AllBooks}/>
                </Route>
            </Router>
            <ReduxModal />
        </div>
        </Provider>,
    app);