import api from '../api';

export function authStore(value) {
    return {
        type: "AUTH_STORE",
        payload: value
    }
}

export function checkAuth(callback) {
    api.checkAuth().then(function(data) {
        //console.log('data add action', data)

        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }
        
    });
}

export function checkMsg(callback) {
    api.checkMsg().then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }
    });
}

export function msgStore(value) {
    return {
        type: "MSG_STORE",
        payload: value
    }
}

export function openReq() {
    return {
        type: "OPEN_REQ"
    }
}

export function openTrade() {
    return {
        type: "OPEN_TRADE"
    }
}
