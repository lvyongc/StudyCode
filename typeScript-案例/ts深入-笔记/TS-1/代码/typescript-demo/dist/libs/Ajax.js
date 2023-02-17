"use strict";
exports.__esModule = true;
var Ajax = /** @class */ (function () {
    // 类的属性必须单独进行声明，而不是在构造函数中进行声明
    // public options: IAjaxOptions;
    function Ajax(options) {
        this.options = options;
        // this.options = options;
    }
    Ajax.prototype.get = function (url, query) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            // 这里的逻辑我省略掉
            // xhr.open();
            // resolve(xhr.responseText);
        });
    };
    return Ajax;
}());
exports["default"] = Ajax;
