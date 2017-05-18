export default function reducer(state={
                                    obj: {
                                        username: '',
                                        fullname: '',
                                        sity: '',
                                        state: ''
                                    }
                                }, action) {
    if (action.type == "SETTINGS_STOTE") {
        return {
            ...state,
            obj: action.payload
        }
    } else if (action.type == "SET_USERNAME_STORE") {
        return {
            ...state,
            obj: {...state.obj, username: action.payload}
    }
    } else if (action.type == "SET_FULLNAME_STORE") {
        return {
            ...state,
            obj: {...state.obj, fullname: action.payload}
        }
    } else if (action.type == "SET_CITY_STORE") {
        return {
            ...state,
            obj: {...state.obj, city: action.payload}
        }
    } else if (action.type == "SET_STATE_STORE") {
        return {
            ...state,
            obj: {...state.obj, state: action.payload}
        }
    }

    return state
}
