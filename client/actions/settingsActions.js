import api from '../api';

export function getUserInfo(user, callback) {
    api.getUserInfo(user).then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }
    });
}

export function saveSettings(obj, callback) {
    api.saveSettings(obj).then(function(data) {
        if(data.data) {
            callback(data.data);
        } else {
            callback(false);
        }
    });
}

export function settingsStore(value) {
    return {
        type: "SETTINGS_STOTE",
        payload: value
    }
}

export function setUsernameStore(value) {
    return {
        type: "SET_UERNAME_STORE",
        payload: value
    }
}

export function setFullnameStore(value) {
    return {
        type: "SET_FULLNAME_STORE",
        payload: value
    }
}

export function setCityStore(value) {
    return {
        type: "SET_CITY_STORE",
        payload: value
    }
}

export function setStateStore(value) {
    return {
        type: "SET_STATE_STORE",
        payload: value
    }
}

