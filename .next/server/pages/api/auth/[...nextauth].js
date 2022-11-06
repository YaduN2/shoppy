"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    isAdmin: {\n        type: Boolean,\n        required: true,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsVUFBVSxHQUFHLElBQUlELHdEQUFlLENBQ3BDO0lBQ0VHLElBQUksRUFBRTtRQUFFQyxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtJQUN0Q0MsS0FBSyxFQUFFO1FBQUVILElBQUksRUFBRUMsTUFBTTtRQUFFQyxRQUFRLEVBQUUsSUFBSTtRQUFFRSxNQUFNLEVBQUUsSUFBSTtLQUFFO0lBQ3JEQyxRQUFRLEVBQUU7UUFBRUwsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDMUNJLE9BQU8sRUFBRTtRQUFFTixJQUFJLEVBQUVPLE9BQU87UUFBRUwsUUFBUSxFQUFFLElBQUk7UUFBRU0sT0FBTyxFQUFFLEtBQUs7S0FBRTtDQUMzRCxFQUNEO0lBQ0VDLFVBQVUsRUFBRSxJQUFJO0NBQ2pCLENBQ0Y7QUFFRCxNQUFNQyxJQUFJLEdBQUdkLDZEQUFvQixJQUFJQSxxREFBYyxDQUFDLE1BQU0sRUFBRUMsVUFBVSxDQUFDO0FBRXZFLGlFQUFlYSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRhaWx3aW5kLWFtYXpvbmEvLi9tb2RlbHMvVXNlci5qcz83MzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgaXNBZG1pbjogeyB0eXBlOiBCb29sZWFuLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogZmFsc2UgfSxcbiAgfSxcbiAge1xuICAgIHRpbWVzdGFtcHM6IHRydWUsXG4gIH1cbik7XG5cbmNvbnN0IFVzZXIgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgdXNlclNjaGVtYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJ1c2VyU2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJpc0FkbWluIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/db */ \"(api)/./utils/db.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    session: {\n        strategy: \"jwt\"\n    },\n    callbacks: {\n        async jwt ({ token , user  }) {\n            if (user === null || user === void 0 ? void 0 : user._id) token._id = user._id;\n            if (user === null || user === void 0 ? void 0 : user.isAdmin) token.isAdmin = user.isAdmin;\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (token === null || token === void 0 ? void 0 : token._id) session.user._id = token._id;\n            if (token === null || token === void 0 ? void 0 : token.isAdmin) session.user.isAdmin = token.isAdmin;\n            return session;\n        }\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4___default()({\n            async authorize (credentials) {\n                await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].connect();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                await _utils_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"].disconnect();\n                if (user && bcryptjs__WEBPACK_IMPORTED_MODULE_3___default().compareSync(credentials.password, user.password)) {\n                    return {\n                        _id: user._id,\n                        name: user.name,\n                        email: user.email,\n                        image: \"profile\",\n                        isAdmin: user.isAdmin\n                    };\n                }\n                throw new Error(\"invalid email or password\");\n            }\n        }), \n    ]\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNPO0FBQ0w7QUFDTDtBQUNvQztBQUVsRSxpRUFBZUEsZ0RBQVEsQ0FBQztJQUN0QkssT0FBTyxFQUFFO1FBQ1BDLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0RDLFNBQVMsRUFBRTtRQUNULE1BQU1DLEdBQUcsRUFBQyxFQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxFQUFFO1lBQ3pCLElBQUlBLElBQUksYUFBSkEsSUFBSSxXQUFLLEdBQVRBLEtBQUFBLENBQVMsR0FBVEEsSUFBSSxDQUFFQyxHQUFHLEVBQUVGLEtBQUssQ0FBQ0UsR0FBRyxHQUFHRCxJQUFJLENBQUNDLEdBQUcsQ0FBQztZQUNwQyxJQUFJRCxJQUFJLGFBQUpBLElBQUksV0FBUyxHQUFiQSxLQUFBQSxDQUFhLEdBQWJBLElBQUksQ0FBRUUsT0FBTyxFQUFFSCxLQUFLLENBQUNHLE9BQU8sR0FBR0YsSUFBSSxDQUFDRSxPQUFPLENBQUM7WUFDaEQsT0FBT0gsS0FBSyxDQUFDO1NBQ2Q7UUFDRCxNQUFNSixPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFSSxLQUFLLEdBQUUsRUFBRTtZQUNoQyxJQUFJQSxLQUFLLGFBQUxBLEtBQUssV0FBSyxHQUFWQSxLQUFBQSxDQUFVLEdBQVZBLEtBQUssQ0FBRUUsR0FBRyxFQUFFTixPQUFPLENBQUNLLElBQUksQ0FBQ0MsR0FBRyxHQUFHRixLQUFLLENBQUNFLEdBQUcsQ0FBQztZQUM3QyxJQUFJRixLQUFLLGFBQUxBLEtBQUssV0FBUyxHQUFkQSxLQUFBQSxDQUFjLEdBQWRBLEtBQUssQ0FBRUcsT0FBTyxFQUFFUCxPQUFPLENBQUNLLElBQUksQ0FBQ0UsT0FBTyxHQUFHSCxLQUFLLENBQUNHLE9BQU8sQ0FBQztZQUN6RCxPQUFPUCxPQUFPLENBQUM7U0FDaEI7S0FDRjtJQUNEUSxTQUFTLEVBQUU7UUFDVFQsc0VBQW1CLENBQUM7WUFDbEIsTUFBTVUsU0FBUyxFQUFDQyxXQUFXLEVBQUU7Z0JBQzNCLE1BQU1iLHlEQUFVLEVBQUUsQ0FBQztnQkFDbkIsTUFBTVEsSUFBSSxHQUFHLE1BQU1ULDREQUFZLENBQUM7b0JBQzlCaUIsS0FBSyxFQUFFSCxXQUFXLENBQUNHLEtBQUs7aUJBQ3pCLENBQUM7Z0JBQ0YsTUFBTWhCLDREQUFhLEVBQUUsQ0FBQztnQkFDdEIsSUFBSVEsSUFBSSxJQUFJUCwyREFBa0IsQ0FBQ1ksV0FBVyxDQUFDTSxRQUFRLEVBQUVYLElBQUksQ0FBQ1csUUFBUSxDQUFDLEVBQUU7b0JBQ25FLE9BQU87d0JBQ0xWLEdBQUcsRUFBRUQsSUFBSSxDQUFDQyxHQUFHO3dCQUNiVyxJQUFJLEVBQUVaLElBQUksQ0FBQ1ksSUFBSTt3QkFDZkosS0FBSyxFQUFFUixJQUFJLENBQUNRLEtBQUs7d0JBQ2pCSyxLQUFLLEVBQUUsU0FBUzt3QkFDaEJYLE9BQU8sRUFBRUYsSUFBSSxDQUFDRSxPQUFPO3FCQUN0QixDQUFDO2lCQUNIO2dCQUNELE1BQU0sSUFBSVksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7YUFDOUM7U0FDRixDQUFDO0tBQ0g7Q0FDRixDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRhaWx3aW5kLWFtYXpvbmEvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzUyN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IGRiIGZyb20gXCIuLi8uLi8uLi91dGlscy9kYlwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcj8uX2lkKSB0b2tlbi5faWQgPSB1c2VyLl9pZDtcbiAgICAgIGlmICh1c2VyPy5pc0FkbWluKSB0b2tlbi5pc0FkbWluID0gdXNlci5pc0FkbWluO1xuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbj8uX2lkKSBzZXNzaW9uLnVzZXIuX2lkID0gdG9rZW4uX2lkO1xuICAgICAgaWYgKHRva2VuPy5pc0FkbWluKSBzZXNzaW9uLnVzZXIuaXNBZG1pbiA9IHRva2VuLmlzQWRtaW47XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBhd2FpdCBkYi5jb25uZWN0KCk7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe1xuICAgICAgICAgIGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgaWYgKHVzZXIgJiYgYmNyeXB0LmNvbXBhcmVTeW5jKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBfaWQ6IHVzZXIuX2lkLFxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBpbWFnZTogXCJwcm9maWxlXCIsXG4gICAgICAgICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIGVtYWlsIG9yIHBhc3N3b3JkXCIpO1xuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiVXNlciIsImRiIiwiYmNyeXB0IiwiQ3JlZGVudGlhbHNQcm92aWRlciIsInNlc3Npb24iLCJzdHJhdGVneSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsIl9pZCIsImlzQWRtaW4iLCJwcm92aWRlcnMiLCJhdXRob3JpemUiLCJjcmVkZW50aWFscyIsImNvbm5lY3QiLCJmaW5kT25lIiwiZW1haWwiLCJkaXNjb25uZWN0IiwiY29tcGFyZVN5bmMiLCJwYXNzd29yZCIsIm5hbWUiLCJpbWFnZSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connection = {};\nasync function connect() {\n    if (connection.isConnected) {\n        console.log(\"connection already established!\");\n    }\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {\n        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);\n        if (connection.isConnected === 1) {\n            console.log(\"use previous connection\");\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n    }\n    const db1 = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n    console.log(\"new connection!\");\n    connection.isConnected = db1.connections[0].readyState;\n}\nasync function disconnect() {\n    if (connection.isConnected) {\n        if (false) {} else {\n            console.log(\"not disconnected!\");\n        }\n    }\n}\nconst db = {\n    connect,\n    disconnect\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsVUFBVSxHQUFHLEVBQUU7QUFFckIsZUFBZUMsT0FBTyxHQUFHO0lBQ3ZCLElBQUlELFVBQVUsQ0FBQ0UsV0FBVyxFQUFFO1FBQzFCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsSUFBSUwsb0VBQTJCLEdBQUcsQ0FBQyxFQUFFO1FBQ25DQyxVQUFVLENBQUNFLFdBQVcsR0FBR0gsMkVBQWtDLENBQUM7UUFDNUQsSUFBSUMsVUFBVSxDQUFDRSxXQUFXLEtBQUssQ0FBQyxFQUFFO1lBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU87U0FDUjtRQUNELE1BQU1MLDBEQUFtQixFQUFFLENBQUM7S0FDN0I7SUFDRCxNQUFNVSxHQUFFLEdBQUcsTUFBTVYsdURBQWdCLENBQUNXLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLENBQUM7SUFDMURULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0JKLFVBQVUsQ0FBQ0UsV0FBVyxHQUFHTyxHQUFFLENBQUNKLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsVUFBVSxDQUFDO0NBQ3ZEO0FBRUQsZUFBZUMsVUFBVSxHQUFHO0lBQzFCLElBQUlSLFVBQVUsQ0FBQ0UsV0FBVyxFQUFFO1FBQzFCLElBQUlRLEtBQXFDLEVBQUUsRUFHMUMsTUFBTTtZQUNMUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2xDO0tBQ0Y7Q0FDRjtBQUVELE1BQU1LLEVBQUUsR0FBRztJQUFFUixPQUFPO0lBQUVPLFVBQVU7Q0FBRTtBQUNsQyxpRUFBZUMsRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10YWlsd2luZC1hbWF6b25hLy4vdXRpbHMvZGIuanM/N2NiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICBjb25zb2xlLmxvZyhcImNvbm5lY3Rpb24gYWxyZWFkeSBlc3RhYmxpc2hlZCFcIik7XG4gIH1cbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9PT0gMSkge1xuICAgICAgY29uc29sZS5sb2coXCJ1c2UgcHJldmlvdXMgY29ubmVjdGlvblwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xuICB9XG4gIGNvbnN0IGRiID0gYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSk7XG4gIGNvbnNvbGUubG9nKFwibmV3IGNvbm5lY3Rpb24hXCIpO1xuICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XG4gICAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibm90IGRpc2Nvbm5lY3RlZCFcIik7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRiID0geyBjb25uZWN0LCBkaXNjb25uZWN0IH07XG5leHBvcnQgZGVmYXVsdCBkYjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbnMiLCJsZW5ndGgiLCJyZWFkeVN0YXRlIiwiZGlzY29ubmVjdCIsImRiIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();