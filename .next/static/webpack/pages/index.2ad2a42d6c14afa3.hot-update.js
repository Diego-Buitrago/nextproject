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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Users = function(props) {\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"list-group\",\n        children: props.users.map(function(user) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                className: \"list-group-item list-group-item-action d-flex justify-content-between align-center\",\n                onClick: function(e) {\n                    return next_router__WEBPACK_IMPORTED_MODULE_1__.Router.push(\"/users\", \"/users\");\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: [\n                                    user.first_name,\n                                    \" \",\n                                    user.last_name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n                                lineNumber: 13,\n                                columnNumber: 29\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Email: \",\n                                    user.email\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n                                lineNumber: 14,\n                                columnNumber: 29\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n                        lineNumber: 12,\n                        columnNumber: 25\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: user.avatar,\n                        alt: user.first_name + user.last_name,\n                        style: {\n                            borderRadius: \"50%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n                        lineNumber: 16,\n                        columnNumber: 25\n                    }, _this1)\n                ]\n            }, user.id, true, {\n                fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n                lineNumber: 8,\n                columnNumber: 21\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"D:\\\\Desarrollo_software\\\\YOUTUBE\\\\nextproject\\\\components\\\\users.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, _this);\n};\n_c = Users;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Users);\nvar _c;\n$RefreshReg$(_c, \"Users\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3VzZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBQW9DO0FBRXBDLElBQU1DLEtBQUssR0FBRyxTQUFDQyxLQUFLLEVBQUs7O0lBQ3JCLHFCQUNJLDhEQUFDQyxJQUFFO1FBQUNDLFNBQVMsRUFBQyxZQUFZO2tCQUVsQkYsS0FBSyxDQUFDRyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0MsU0FBQUEsSUFBSTtpQ0FDaEIsOERBQUNDLElBQUU7Z0JBQ0NKLFNBQVMsRUFBQyxvRkFBb0Y7Z0JBQzlGSyxPQUFPLEVBQUVDLFNBQUFBLENBQUM7MkJBQUlWLG9EQUFXLENBQUMsUUFBUSxFQUFHLFFBQU0sQ0FBRTtpQkFBQTs7a0NBRTdDLDhEQUFDWSxLQUFHOzswQ0FDQSw4REFBQ0MsSUFBRTs7b0NBQUVOLElBQUksQ0FBQ08sVUFBVTtvQ0FBQyxHQUFDO29DQUFDUCxJQUFJLENBQUNRLFNBQVM7Ozs7OztzQ0FBTTswQ0FDM0MsOERBQUNDLEdBQUM7O29DQUFDLFNBQU87b0NBQUNULElBQUksQ0FBQ1UsS0FBSzs7Ozs7O3NDQUFLOzs7Ozs7OEJBQ3hCO2tDQUNOLDhEQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVaLElBQUksQ0FBQ2EsTUFBTTt3QkFDakJDLEdBQUcsRUFBRWQsSUFBSSxDQUFDTyxVQUFVLEdBQUdQLElBQUksQ0FBQ1EsU0FBUzt3QkFDckNPLEtBQUssRUFBRTs0QkFBQ0MsWUFBWSxFQUFFLEtBQUs7eUJBQUM7Ozs7OzhCQUM5Qjs7ZUFYR2hCLElBQUksQ0FBQ2lCLEVBQUU7Ozs7c0JBWVg7U0FDUixDQUFDOzs7OzthQUVMLENBQ1I7Q0FDSjtBQXRCS3ZCLEtBQUFBLEtBQUs7QUF3QlgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91c2Vycy5qcz9hMDQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcblxyXG5jb25zdCBVc2VycyA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy51c2Vycy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17dXNlci5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGxpc3QtZ3JvdXAtaXRlbS1hY3Rpb24gZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiBSb3V0ZXIucHVzaCgnL3VzZXJzJywgYC91c2Vyc2ApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57dXNlci5maXJzdF9uYW1lfSB7dXNlci5sYXN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsOiB7dXNlci5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXt1c2VyLmZpcnN0X25hbWUgKyB1c2VyLmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnNTAlJ319IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnMiXSwibmFtZXMiOlsiUm91dGVyIiwiVXNlcnMiLCJwcm9wcyIsInVsIiwiY2xhc3NOYW1lIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwibGkiLCJvbkNsaWNrIiwiZSIsInB1c2giLCJkaXYiLCJoNSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwIiwiZW1haWwiLCJpbWciLCJzcmMiLCJhdmF0YXIiLCJhbHQiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/users.js\n"));

/***/ })

});