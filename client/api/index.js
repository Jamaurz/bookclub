var axios = require('axios');

var apiPrefix = 'https://jamaurzbookclub.herokuapp.com/';
//var apiPrefix = 'http://localhost:8080/';

export default {
    checkAuth() {
        return axios.get(apiPrefix + 'info')
    },
    checkMsg() {
        return axios.get(apiPrefix + 'getMsg');
    },
    sendLogin(email, password) {
        return axios.post(apiPrefix + 'login', {email, password})
    },
    getUserInfo(user) {
        return axios.post(apiPrefix + 'user/getinfo', {user});
    },
    saveSettings(obj) {
        return axios.post(apiPrefix + 'user/saveSettings', {obj});
    },
    addBook(book) {
        return axios.post(apiPrefix + 'user/addBook', {book});
    },
    addDbBook(book, emailOwner) {
        return axios.post(apiPrefix + 'user/addDbBook', {book, emailOwner});;
    },
    delDbBook(book) {
        return axios.post(apiPrefix + 'user/delDbBook', {book});
    },
    checkMyBooks() {
        return axios.get(apiPrefix + 'user/getMyBooks');
    },
    checkAllBooks() {
        return axios.get(apiPrefix + 'user/getAllBooks');
    },
    tradeBook(book) {
        return axios.post(apiPrefix + 'user/tradeBook', {book});
    },
    getRequest() {
        return axios.get(apiPrefix + 'user/getRequest');
    },
    delDbReq(title, emailOwner) {
        return axios.post(apiPrefix + 'user/delDbReq', {title, emailOwner});
    },
    delDbTrade(id) {
        return axios.post(apiPrefix + 'user/delDbTrade', {id});
    },
    getTrade() {
        return axios.get(apiPrefix + 'user/getTrade');
    }
}
