import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';

axios.default.timeout = 5000;
// axios.defautl.baseURL = '';


axios.interceptors.request.use(config => {
    // todo
    return config;
}, error => {
    // todo
    return Promise.reject(error);
});

axios.interceptors.response(response => {
    // todo
    return response;
}, error => {
    // todo
    return Promise.reject(error);
});