"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/users.js":
/*!*****************************!*\
  !*** ./components/users.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar Users = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"list-group\",\n        children: props.users.map(function(user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"list-group-item list-group-item-action d-flex justify-content-between alig\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: [\n                                    user.first_name,\n                                    \" \",\n                                    user.last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n                                lineNumber: 8,\n                                columnNumber: 29\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Email: \",\n                                    user.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n                                lineNumber: 9,\n                                columnNumber: 29\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n                        lineNumber: 7,\n                        columnNumber: 25\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: user.avatar,\n                        alt: user.first_name + user.last_name,\n                        style: {\n                            borderRadius: \"50%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n                        lineNumber: 11,\n                        columnNumber: 25\n                    }, _this1)\n                ]\n            }, user.id, true, {\n                fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n                lineNumber: 6,\n                columnNumber: 21\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, _this);\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBOztBQUFBLElBQU1BLEtBQUssR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ3JCLHFCQUNJLDhEQUFDQyxJQUFFO1FBQUNDLFNBQVMsRUFBQyxZQUFZO2tCQUVsQkYsS0FBSyxDQUFDRyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTtpQ0FDaEIsOERBQUNDLElBQUU7Z0JBQWVKLFNBQVMsRUFBQyw0RUFBNEU7O2tDQUNwRyw4REFBQ0ssS0FBRzs7MENBQ0EsOERBQUNDLElBQUU7O29DQUFFSCxJQUFJLENBQUNJLFVBQVU7b0NBQUMsR0FBQztvQ0FBQ0osSUFBSSxDQUFDSyxTQUFTOzs7Ozs7c0NBQU07MENBQzNDLDhEQUFDQyxHQUFDOztvQ0FBQyxTQUFPO29DQUFDTixJQUFJLENBQUNPLEtBQUs7Ozs7OztzQ0FBSzs7Ozs7OzhCQUN4QjtrQ0FDTiw4REFBQ0MsS0FBRzt3QkFBQ0MsR0FBRyxFQUFFVCxJQUFJLENBQUNVLE1BQU07d0JBQ2pCQyxHQUFHLEVBQUVYLElBQUksQ0FBQ0ksVUFBVSxHQUFHSixJQUFJLENBQUNLLFNBQVM7d0JBQ3JDTyxLQUFLLEVBQUU7NEJBQUNDLFlBQVksRUFBRSxLQUFLO3lCQUFDOzs7Ozs4QkFDOUI7O2VBUkdiLElBQUksQ0FBQ2MsRUFBRTs7OztzQkFTWDtTQUNSLENBQUM7Ozs7O2FBRUwsQ0FDUjtDQUNKO0FBbkJLcEIsS0FBQUEsS0FBSztBQXFCWCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3VzZXJzLmpzP2EwNDUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgVXNlcnMgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMudXNlcnMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWcnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pnt1c2VyLmZpcnN0X25hbWV9IHt1c2VyLmxhc3RfbmFtZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RW1haWw6IHt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXt1c2VyLmF2YXRhcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3VzZXIuZmlyc3RfbmFtZSArIHVzZXIubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXJSYWRpdXM6ICc1MCUnfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VycyJdLCJuYW1lcyI6WyJVc2VycyIsInByb3BzIiwidWwiLCJjbGFzc05hbWUiLCJ1c2VycyIsIm1hcCIsInVzZXIiLCJsaSIsImRpdiIsImg1IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInAiLCJlbWFpbCIsImltZyIsInNyYyIsImF2YXRhciIsImFsdCIsInN0eWxlIiwiYm9yZGVyUmFkaXVzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/users.js\n"));

/***/ })

});