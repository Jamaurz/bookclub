import api from '../api';

export function bookinputStote(value) {
    return {
        type: "BOOKINPUT_STORE",
        payload: value
    }
}

export function addBook(book, callback) {
    api.addBook(book).then(function(data) {
        if(data.data && data.data.totalItems > 0) {
            let newData = [];
            for(var i = 0; i < data.data.items.length; i++) {
                var obj = {};
                obj.title = data.data.items[i].volumeInfo.title;
                if(data.data.items[i].volumeInfo.imageLinks) {
                    obj.thumbnail = data.data.items[i].volumeInfo.imageLinks.thumbnail;
                } else {
                    obj.thumbnail = 'https://www.google.com.ua/search?q=placeholder+book&rlz=1C1GKLB_enUA731UA731&tbm=isch&tbo=u&source=univ&sa=X&ved=0ahUKEwi7gs_Z__HTAhWIK5oKHZkjCW4QsAQIIw&biw=1366&bih=662#imgrc=HonH3O0Hu_yOrM:';
                }
                newData.push(obj);
            }

            callback(newData);
        } else {
            callback(false);
        }

    });
}

export function addDbBook(book, emailOwner,callback) {
    api.addDbBook(book, emailOwner).then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }

    })
}

export function checkMyBooks(callback) {
    api.checkMyBooks().then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }

    })
}

export function checkAllBooks(callback) {
    api.checkAllBooks().then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }

    })
}

export function booksStote(value) {
    return {
        type: "BOOKS_STORE",
        payload: value
    }
}

export function myBooksStore(value) {
    return {
        type: 'MY_BOOKS_STORE',
        payload: value
    }
}

export function allBooksStore(value) {
    return {
        type: 'ALL_BOOKS_STORE',
        payload: value
    }
}

export function delDbBook(book, callback) {
    api.delDbBook(book).then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }

    })
}

export function tradeBook(book, callback) {
    api.tradeBook(book).then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }
    })
}

export function getRequest(callback) {
    api.getRequest().then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }
    })
}

export function getTrade(callback) {
    api.getTrade().then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }
    })
}

export function requestStore(value) {
    return {
        type: 'REQUEST_STORE',
        payload: value
    }
}

export function tradeStore(value) {
    return {
        type: 'TRADE_STORE',
        payload: value
    }
}

export function delDbReq(title, emailOwner, callback) {
    api.delDbReq(title, emailOwner).then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }

    })
}

export function delDbTrade(id, callback) {
    api.delDbTrade(id).then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }

    })
}
