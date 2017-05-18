export default function reducer(state={
                                    msg: ''
                                }, action) {

    if (action.type ==  "MSG_STORE") {
        return {
            ...state,
            msg: action.payload,
        }
    }
    return state
}
