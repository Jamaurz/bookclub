export default function reducer(state={
                                    msg: '',
                                    openReq: false,
                                    openTrade: false
                                }, action) {

    if (action.type ==  "MSG_STORE") {
        return {
            ...state,
            msg: action.payload,
        }
    } else if (action.type ==  "OPEN_REQ") {
        return {
            ...state,
            openReq: !state.openReq
        }
    } else if (action.type ==  "OPEN_TRADE") {
        return {
            ...state,
            openTrade: !state.openTrade
        }
    }
    return state
}
