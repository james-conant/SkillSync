webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _booking_DatePick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking/DatePick */ \"./src/components/booking/DatePick.js\");\n/* harmony import */ var _booking_LeaveReviewInBooking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking/LeaveReviewInBooking */ \"./src/components/booking/LeaveReviewInBooking.js\");\n/* harmony import */ var _booking_RequestingBooking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking/RequestingBooking */ \"./src/components/booking/RequestingBooking.js\");\n/* harmony import */ var _booking_RequestedBooking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking/RequestedBooking */ \"./src/components/booking/RequestedBooking.js\");\n/* harmony import */ var _booking_IncomingRequest__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booking/IncomingRequest */ \"./src/components/booking/IncomingRequest.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-datepicker */ \"./node_modules/react-datepicker/dist/react-datepicker.min.js\");\n/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nfunction App() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(new Date()),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      startDate = _useState2[0],\n      setStartDate = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      personalNote = _useState4[0],\n      setPersonalNote = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      individualPost = _useState6[0],\n      setIndividualPost = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(\"/test\").then(function (response) {\n      console.log(response);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    selected: startDate,\n    onChange: function onChange(date) {\n      return setStartDate(date);\n    }\n  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_booking_DatePick__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    startDate: startDate,\n    personalNote: personalNote,\n    individualPost: individualPost\n  }));\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ })

})