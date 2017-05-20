export default function reducer(state={
                                    bookinput: '',
                                    books: [],
                                    myBooks: [],
                                    allBooks: [],
                                    request: [],
                                    trade : []
                                }, action) {
    if (action.type == "BOOKINPUT_STORE") {
        return {
            ...state,
            bookinput: action.payload
        }
    } else if (action.type == "BOOKS_STORE") {
        return {
            ...state,
            books: action.payload
        }
    } else if (action.type == "MY_BOOKS_STORE") {
        return {
            ...state,
            myBooks: action.payload
        }
    } else if (action.type == "ALL_BOOKS_STORE") {
        return {
            ...state,
            allBooks: action.payload
        }
    } else if (action.type == "REQUEST_STORE") {
        return {
            ...state,
            request: action.payload
        }
    } else if (action.type == "TRADE_STORE") {
        return {
            ...state,
            trade: action.payload
        }
    }

    return state
}
