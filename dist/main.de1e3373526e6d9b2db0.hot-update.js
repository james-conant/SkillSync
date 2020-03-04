webpackHotUpdate("main",{

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _booking_DatePick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking/DatePick */ \"./src/components/booking/DatePick.js\");\n/* harmony import */ var _booking_LeaveReviewInBooking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking/LeaveReviewInBooking */ \"./src/components/booking/LeaveReviewInBooking.js\");\n/* harmony import */ var _booking_RequestingBooking__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking/RequestingBooking */ \"./src/components/booking/RequestingBooking.js\");\n/* harmony import */ var _booking_RequestedBooking__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booking/RequestedBooking */ \"./src/components/booking/RequestedBooking.js\");\n/* harmony import */ var _booking_IncomingRequest__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking/IncomingRequest */ \"./src/components/booking/IncomingRequest.js\");\n\n\n\n\n\n\n\n\n\nfunction App() {\n  // james\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(new Date()),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),\n      startDate = _useState2[0],\n      setStartDate = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\"),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),\n      personalNote = _useState4[0],\n      setPersonalNote = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),\n      individualPost = _useState6[0],\n      setIndividualPost = _useState6[1]; //---\n\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/06/keanu-reeves-person-of-the-year-karwai-tang-getty.jpg\"),\n      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),\n      bookingReviewPhoto = _useState8[0],\n      setBookingReviewPhoto = _useState8[1];\n\n  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/06/keanu-reeves-person-of-the-year-karwai-tang-getty.jpg\"),\n      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),\n      requestingBookingPhoto = _useState10[0],\n      setRequestingBookingPhoto = _useState10[1];\n\n  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/06/keanu-reeves-person-of-the-year-karwai-tang-getty.jpg\"),\n      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),\n      requestedBookingPhoto = _useState12[0],\n      setRequestedBookingPhoto = _useState12[1];\n\n  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/06/keanu-reeves-person-of-the-year-karwai-tang-getty.jpg\"),\n      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState13, 2),\n      incomingRequestPhoto = _useState14[0],\n      setIncomingRequestPhoto = _useState14[1];\n\n  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([\"need\", \"bookingReviewText\"]),\n      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState15, 2),\n      bookingReviewText = _useState16[0],\n      setBookingReviewText = _useState16[1];\n\n  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([\"need\", \"requestingBookingText\"]),\n      _useState18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState17, 2),\n      requestingBookingText = _useState18[0],\n      setRequestingBookingText = _useState18[1];\n\n  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([\"need\", \"requestedBookingText\"]),\n      _useState20 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState19, 2),\n      requestedBookingText = _useState20[0],\n      setRequestedBookingText = _useState20[1];\n\n  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([\"need\", \"incomingRequestText\"]),\n      _useState22 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState21, 2),\n      incomingRequestText = _useState22[0],\n      setIncomingRequestText = _useState22[1]; //---\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(\"/test\").then(function (response) {\n      console.log(response);\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  });\n  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_booking_LeaveReviewInBooking__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    bookingReviewText: bookingReviewText,\n    setBookingReviewText: setBookingReviewText,\n    bookingReviewPhoto: bookingReviewPhoto\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_booking_RequestedBooking__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    requestedBookingText: requestedBookingText,\n    setRequestedBookingText: setRequestedBookingText,\n    requestingBookingPhoto: requestingBookingPhoto\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_booking_RequestingBooking__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    requestingBookingText: requestingBookingText,\n    setRequestingBookingText: setRequestingBookingText,\n    requestedBookingPhoto: setRequestedBookingText\n  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_booking_IncomingRequest__WEBPACK_IMPORTED_MODULE_8__[\"default\"], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({\n    incomingRequestText: incomingRequestText,\n    setIncomingRequestText: setIncomingRequestText\n  }, \"incomingRequestText\", setIncomingRequestText)));\n}\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ })

})