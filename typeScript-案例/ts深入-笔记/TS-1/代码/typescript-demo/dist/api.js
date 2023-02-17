"use strict";
exports.__esModule = true;
var Ajax_1 = require("./libs/Ajax");
var ajax = new Ajax_1["default"]({
    baseURL: '/api'
});
// ajax.options
// 我们约束来 get 的基本参数的类型，但是有的数据（参数）的类型是不固定的
exports.getUser = function (query) {
    return ajax.get('/user', query);
};
exports.getUsers = function (query) {
    return ajax.get('/users', query);
};
