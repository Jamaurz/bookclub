import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import {reducer as modalReducer} from 'react-redux-modal'

import common from "./commonReducer"
import auth from "./authReducer"
import settings from "./settingsReducer"
import book from "./bookReducer"

export default combineReducers({
    routing: routerReducer,
    common,
    auth,
    settings,
    book,
    modals: modalReducer
})
