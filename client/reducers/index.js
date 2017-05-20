import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import common from "./commonReducer"
import auth from "./authReducer"
import settings from "./settingsReducer"
import book from "./bookReducer"
import mymodal from './mymodalReducer'

export default combineReducers({
    routing: routerReducer,
    common,
    auth,
    settings,
    book,
    mymodal
})
