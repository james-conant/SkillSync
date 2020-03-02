webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _booking_IndividualPosting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking/IndividualPosting */ \"./src/components/booking/IndividualPosting.js\");\n/* harmony import */ var _booking_MyBookings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking/MyBookings */ \"./src/components/booking/MyBookings.js\");\n/* harmony import */ var _booking_MyBooking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking/MyBooking */ \"./src/components/booking/MyBooking.js\");\n\n\n\n\n\nfunction App() {\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(\"/test\").then(function (response) {\n      console.log(response);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_booking_MyBooking__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null));\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/booking/MyBooking.js":
/*!*********************************************!*\
  !*** ./src/components/booking/MyBooking.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyBooking; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyBooking() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lamag.com%2Fculturefiles%2Fkeanu-time-person-of-the-year%2F&psig=AOvVaw1VDDs5z6W5j3VuMhw-L7j0&ust=1583273368978000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjeppDn_OcCFQAAAAAdAAAAABAD\"\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/booking/MyBooking.js?");

/***/ })

})