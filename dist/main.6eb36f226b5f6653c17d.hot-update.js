webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module './DatePicker'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _booking_LeaveReviewInBooking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking/LeaveReviewInBooking */ \"./src/components/booking/LeaveReviewInBooking.js\");\n/* harmony import */ var _booking_RequestingBooking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking/RequestingBooking */ \"./src/components/booking/RequestingBooking.js\");\n/* harmony import */ var _booking_RequestedBooking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking/RequestedBooking */ \"./src/components/booking/RequestedBooking.js\");\n\n\n\n\n\n\nfunction App() {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"/test\").then(function (response) {\n      console.log(response);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(!(function webpackMissingModule() { var e = new Error(\"Cannot find module './DatePicker'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_booking_LeaveReviewInBooking__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_booking_RequestedBooking__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_booking_RequestingBooking__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ })

})