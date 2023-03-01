"use strict";
(self["webpackChunk_1"] = self["webpackChunk_1"] || []).push([["hah"],{

/***/ "./src/hah.js":
/*!********************!*\
  !*** ./src/hah.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
console.log('hah');
var hah = '哈啊哈';

axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('http://123.207.32.32:9002/lyric?id=1842025914a').then(function (res) {
  console.log(res);
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/hah.js"));
/******/ }
]);
//# sourceMappingURL=hah-builde.js.map