/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Store */ \"./utils/Store.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_Store__WEBPACK_IMPORTED_MODULE_2__]);\n_utils_Store__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n        session: session,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils_Store__WEBPACK_IMPORTED_MODULE_2__.StoreProvider, {\n            children: Component.auth ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Auth, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/yadunandan/Documents/Projects/DBMS-Project/shoppy/pages/_app.js\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/yadunandan/Documents/Projects/DBMS-Project/shoppy/pages/_app.js\",\n                lineNumber: 11,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/yadunandan/Documents/Projects/DBMS-Project/shoppy/pages/_app.js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/yadunandan/Documents/Projects/DBMS-Project/shoppy/pages/_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/yadunandan/Documents/Projects/DBMS-Project/shoppy/pages/_app.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\nfunction Auth({ children  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)({\n        required: true,\n        onUnauthenticated () {\n            router.push(\"/unauthorized?message=login required\");\n        }\n    });\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/yadunandan/Documents/Projects/DBMS-Project/shoppy/pages/_app.js\",\n            lineNumber: 30,\n            columnNumber: 12\n        }, this);\n    }\n    return children;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUNnQjtBQUNlO0FBQ3RCO0FBRXhDLFNBQVNJLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsRUFBRSxFQUFFQyxPQUFPLEdBQUUsR0FBR0QsU0FBUyxFQUFFLEdBQUUsRUFBRTtJQUNsRSxxQkFDRSw4REFBQ0wsNERBQWU7UUFBQ00sT0FBTyxFQUFFQSxPQUFPO2tCQUMvQiw0RUFBQ1AsdURBQWE7c0JBQ1hLLFNBQVMsQ0FBQ0csSUFBSSxpQkFDYiw4REFBQ0MsSUFBSTswQkFDSCw0RUFBQ0osU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7b0JBQ3ZCLGlCQUVQLDhEQUFDRCxTQUFTO2dCQUFFLEdBQUdDLFNBQVM7Ozs7O29CQUFJOzs7OztnQkFFaEI7Ozs7O1lBQ0EsQ0FDbEI7Q0FDSDtBQUNELFNBQVNHLElBQUksQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUMxQixNQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFDMUIsTUFBTSxFQUFFUyxNQUFNLEdBQUUsR0FBR1YsMkRBQVUsQ0FBQztRQUM1QlcsUUFBUSxFQUFFLElBQUk7UUFDZEMsaUJBQWlCLElBQUc7WUFDbEJILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7U0FDckQ7S0FDRixDQUFDO0lBQ0YsSUFBSUgsTUFBTSxLQUFLLFNBQVMsRUFBRTtRQUN4QixxQkFBTyw4REFBQ0ksS0FBRztzQkFBQyxZQUFVOzs7OztnQkFBTSxDQUFDO0tBQzlCO0lBQ0QsT0FBT04sUUFBUSxDQUFDO0NBQ2pCO0FBQ0QsaUVBQWVOLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdGFpbHdpbmQtYW1hem9uYS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCB7IFN0b3JlUHJvdmlkZXIgfSBmcm9tIFwiLi4vdXRpbHMvU3RvcmVcIjtcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzOiB7IHNlc3Npb24sIC4uLnBhZ2VQcm9wcyB9IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPFN0b3JlUHJvdmlkZXI+XG4gICAgICAgIHtDb21wb25lbnQuYXV0aCA/IChcbiAgICAgICAgICA8QXV0aD5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICA8L0F1dGg+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICApfVxuICAgICAgPC9TdG9yZVByb3ZpZGVyPlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApO1xufVxuZnVuY3Rpb24gQXV0aCh7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKHtcbiAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICBvblVuYXV0aGVudGljYXRlZCgpIHtcbiAgICAgIHJvdXRlci5wdXNoKFwiL3VuYXV0aG9yaXplZD9tZXNzYWdlPWxvZ2luIHJlcXVpcmVkXCIpO1xuICAgIH0sXG4gIH0pO1xuICBpZiAoc3RhdHVzID09PSBcImxvYWRpbmdcIikge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuO1xufVxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiU3RvcmVQcm92aWRlciIsIlNlc3Npb25Qcm92aWRlciIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJhdXRoIiwiQXV0aCIsImNoaWxkcmVuIiwicm91dGVyIiwic3RhdHVzIiwicmVxdWlyZWQiLCJvblVuYXV0aGVudGljYXRlZCIsInB1c2giLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Store\": () => (/* binding */ Store),\n/* harmony export */   \"StoreProvider\": () => (/* binding */ StoreProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Store = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst initialState = {\n    cart: js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"cart\")) : {\n        cartItems: [],\n        shippingAddress: {}\n    }\n};\nfunction reducer(state, action) {\n    switch(action.type){\n        case \"CART_ADD_ITEM\":\n            {\n                const newItem = action.payload;\n                const existItem = state.cart.cartItems.find((item)=>item.slug === newItem.slug\n                );\n                const cartItems = existItem ? state.cart.cartItems.map((item)=>item.name === existItem.name ? newItem : item\n                ) : [\n                    ...state.cart.cartItems,\n                    newItem\n                ];\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE_ITEM\":\n            {\n                const cartItems = state.cart.cartItems.filter((item)=>item.slug !== action.payload.slug\n                );\n                js_cookie__WEBPACK_IMPORTED_MODULE_2__[\"default\"].set(\"cart\", JSON.stringify({\n                    ...state.cart,\n                    cartItems\n                }));\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        cartItems\n                    }\n                };\n            }\n        case \"CART_REMOVE_ITEM\":\n            {\n                return {\n                    ...state,\n                    cart: {\n                        cartItems: [],\n                        shippingAddress: {\n                            location: {}\n                        },\n                        paymentMethod: \"\"\n                    }\n                };\n            }\n        case \"SAVE_SHIPPING_ADDRESS\":\n            {\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        shippingAddress: {\n                            ...state.cart.shippingAddress,\n                            ...action.payload\n                        }\n                    }\n                };\n            }\n        case \"SAVE_PAYMENT_METHOD\":\n            {\n                return {\n                    ...state,\n                    cart: {\n                        ...state.cart,\n                        paymentMethod: action.payload\n                    }\n                };\n            }\n        default:\n            return state;\n    }\n}\nfunction StoreProvider({ children  }) {\n    const { 0: state , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);\n    const value = {\n        state,\n        dispatch\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {\n        value: value,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/yadunandan/Documents/Projects/DBMS-Project/shoppy/utils/Store.js\",\n        lineNumber: 73,\n        columnNumber: 10\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUsscUJBQXFCO1lBQUU7Z0JBQzFCLE9BQU87b0JBQ0wsR0FBR0osS0FBSztvQkFDUlAsSUFBSSxFQUFFO3dCQUNKLEdBQUdPLEtBQUssQ0FBQ1AsSUFBSTt3QkFDYnNCLGFBQWEsRUFBRWQsTUFBTSxDQUFDRyxPQUFPO3FCQUM5QjtpQkFDRixDQUFDO2FBQ0g7UUFDRDtZQUNFLE9BQU9KLEtBQUssQ0FBQztLQUNoQjtDQUNGO0FBRU0sU0FBU2dCLGFBQWEsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsRUFBRTtJQUMxQyxNQUFNLEVBdEVSLEdBc0VTakIsS0FBSyxHQXRFZCxHQXNFZ0JrQixRQUFRLE1BQUk3QixpREFBVSxDQUFDVSxPQUFPLEVBQUVQLFlBQVksQ0FBQztJQUMzRCxNQUFNMkIsS0FBSyxHQUFHO1FBQUVuQixLQUFLO1FBQUVrQixRQUFRO0tBQUU7SUFDakMscUJBQU8sOERBQUMzQixLQUFLLENBQUM2QixRQUFRO1FBQUNELEtBQUssRUFBRUEsS0FBSztrQkFBR0YsUUFBUTs7Ozs7WUFBa0IsQ0FBQztDQUNsRSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdGFpbHdpbmQtYW1hem9uYS8uL3V0aWxzL1N0b3JlLmpzPzhiOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5leHBvcnQgY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgY2FydDogQ29va2llcy5nZXQoXCJjYXJ0XCIpXG4gICAgPyBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KFwiY2FydFwiKSlcbiAgICA6IHsgY2FydEl0ZW1zOiBbXSwgc2hpcHBpbmdBZGRyZXNzOiB7fSB9LFxufTtcblxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFwiQ0FSVF9BRERfSVRFTVwiOiB7XG4gICAgICBjb25zdCBuZXdJdGVtID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBleGlzdEl0ZW0gPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5zbHVnID09PSBuZXdJdGVtLnNsdWdcbiAgICAgICk7XG4gICAgICBjb25zdCBjYXJ0SXRlbXMgPSBleGlzdEl0ZW1cbiAgICAgICAgPyBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+XG4gICAgICAgICAgICBpdGVtLm5hbWUgPT09IGV4aXN0SXRlbS5uYW1lID8gbmV3SXRlbSA6IGl0ZW1cbiAgICAgICAgICApXG4gICAgICAgIDogWy4uLnN0YXRlLmNhcnQuY2FydEl0ZW1zLCBuZXdJdGVtXTtcbiAgICAgIENvb2tpZXMuc2V0KFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeSh7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9KSk7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9O1xuICAgIH1cbiAgICBjYXNlIFwiQ0FSVF9SRU1PVkVfSVRFTVwiOiB7XG4gICAgICBjb25zdCBjYXJ0SXRlbXMgPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnNsdWcgIT09IGFjdGlvbi5wYXlsb2FkLnNsdWdcbiAgICAgICk7XG4gICAgICBDb29raWVzLnNldChcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSkpO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0gfTtcbiAgICB9XG4gICAgY2FzZSBcIkNBUlRfUkVNT1ZFX0lURU1cIjoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNhcnQ6IHtcbiAgICAgICAgICBjYXJ0SXRlbXM6IFtdLFxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogeyBsb2NhdGlvbjoge30gfSxcbiAgICAgICAgICBwYXltZW50TWV0aG9kOiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gICAgY2FzZSBcIlNBVkVfU0hJUFBJTkdfQUREUkVTU1wiOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDoge1xuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXG4gICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LnNoaXBwaW5nQWRkcmVzcyxcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFwiU0FWRV9QQVlNRU5UX01FVEhPRFwiOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDoge1xuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXG4gICAgICAgICAgcGF5bWVudE1ldGhvZDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBTdG9yZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9O1xuICByZXR1cm4gPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e2NoaWxkcmVufTwvU3RvcmUuUHJvdmlkZXI+O1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiQ29va2llcyIsIlN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY2FydCIsImdldCIsIkpTT04iLCJwYXJzZSIsImNhcnRJdGVtcyIsInNoaXBwaW5nQWRkcmVzcyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXN0SXRlbSIsImZpbmQiLCJpdGVtIiwic2x1ZyIsIm1hcCIsIm5hbWUiLCJzZXQiLCJzdHJpbmdpZnkiLCJmaWx0ZXIiLCJsb2NhdGlvbiIsInBheW1lbnRNZXRob2QiLCJTdG9yZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/Store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();