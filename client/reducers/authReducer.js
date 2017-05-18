export default function reducer(state={
                                    user: false
                                }, action) {
    if (action.type == "AUTH_STORE") {
        return {
            ...state,
            user: action.payload
        }
    }

    return state
}
