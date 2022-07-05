/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,600&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  --poppins-font: 'Poppins', sans-serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: #fff;\\r\\n  font-family: var(--poppins-font);\\r\\n}\\r\\n\\r\\n/** General Rules **/\\r\\nul {\\r\\n  list-style-type: none;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 40px;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  padding: 1rem 2rem;\\r\\n  display: flex;\\r\\n  gap: 30px;\\r\\n}\\r\\n\\r\\n.image-box {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 12px;\\r\\n}\\r\\n\\r\\n.image-logo {\\r\\n  width: 80px;\\r\\n  height: 80px;\\r\\n}\\r\\n\\r\\n.heading,\\r\\n.nav-item {\\r\\n  font-family: var(--poppins-font);\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n  font-weight: 500;\\r\\n  font-size: 22px;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n  border: 2px solid #000;\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  font-size: 16px;\\r\\n  color: #000;\\r\\n}\\r\\n\\r\\n.main-section {\\r\\n  padding: 2rem;\\r\\n}\\r\\n\\r\\n.section {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.display-item-block,\\r\\n.display-item-block-2 {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  justify-items: center;\\r\\n}\\r\\n\\r\\n.display-items {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-bottom: 2.45rem;\\r\\n  padding-bottom: 0.25rem;\\r\\n}\\r\\n\\r\\n.item-img-block {\\r\\n  border: 2px solid #000;\\r\\n  width: 350px;\\r\\n  height: 350px;\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.images {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n.item-title-like {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: baseline;\\r\\n  padding: 0 12px;\\r\\n  margin-bottom: 1.75rem;\\r\\n}\\r\\n\\r\\n.titles {\\r\\n  font-family: var(--poppins-font);\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.fa-heart-o {\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  display: flex;\\r\\n  margin: 0 auto;\\r\\n  border-radius: 3px;\\r\\n  height: 26px;\\r\\n  padding: 5px;\\r\\n  box-shadow: 3px 3px #000;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  position: relative;\\r\\n  background-color: #fff;\\r\\n  width: 80%;\\r\\n  max-width: 1200px;\\r\\n  top: 50px;\\r\\n  left: 10%;\\r\\n  padding: 1rem;\\r\\n  padding-bottom: 2.5rem;\\r\\n}\\r\\n\\r\\n.popupContainer {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  bottom: 0;\\r\\n  padding-bottom: 100px;\\r\\n  width: 100%;\\r\\n  z-index: 99;\\r\\n  background-color: rgba(0, 0, 0, 0.712);\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.close-popup {\\r\\n  position: absolute;\\r\\n  top: 25px;\\r\\n  right: 5%;\\r\\n  font-size: 2em;\\r\\n}\\r\\n\\r\\n.popup img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.meal-title {\\r\\n  font-size: 2em;\\r\\n  font-family: var(--poppins-font);\\r\\n}\\r\\n\\r\\n.meal-description {\\r\\n  font-size: 1.1em;\\r\\n  font-family: var(--poppins-font);\\r\\n  margin-bottom: 30px;\\r\\n}\\r\\n\\r\\nul.commentList {\\r\\n  display: block;\\r\\n  margin: 20px 0;\\r\\n}\\r\\n\\r\\nul.commentList li {\\r\\n  margin-bottom: 10px;\\r\\n  font-size: 1.1em;\\r\\n  padding: 10px 12px;\\r\\n  border-radius: 10px;\\r\\n  background-color: rgba(0, 0, 0, 0.301);\\r\\n}\\r\\n\\r\\n.commentCounter {\\r\\n  padding: 9px 15px;\\r\\n  border-radius: 50%;\\r\\n  background-color: #000;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.commentForm {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  margin-top: 30px;\\r\\n}\\r\\n\\r\\n.commentForm input,\\r\\n.commentForm .commentMessage {\\r\\n  outline: 0;\\r\\n  resize: vertical;\\r\\n  padding: 0.5rem 0.75rem;\\r\\n  font-family: inherit;\\r\\n  background: #f7fafc;\\r\\n  border-radius: 0.25rem;\\r\\n  border: 1px solid #e2e8f0;\\r\\n  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);\\r\\n  margin-bottom: 0.75rem;\\r\\n}\\r\\n\\r\\n.commentForm button {\\r\\n  max-width: 150px;\\r\\n  font-size: 1.2em;\\r\\n  font-weight: bold;\\r\\n  color: #4a5568;\\r\\n  border: 1px solid #a0aec0;\\r\\n  border-radius: 0.25rem;\\r\\n  background: transparent;\\r\\n  padding: 0.35rem 0.75rem;\\r\\n}\\r\\n\\r\\n.username {\\r\\n  font-size: 1em;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.commentDate {\\r\\n  font-size: 0.6em;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  font-family: var(--poppins-font);\\r\\n  font-size: 18px;\\r\\n  padding: 5vh 7%;\\r\\n  margin-top: 50px;\\r\\n  border-top: solid 2px #111;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/logo.png\");\n\n//# sourceURL=webpack://webpack/./src/images/logo.png?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.png */ \"./src/images/logo.png\");\n/* harmony import */ var _modules_get_items_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/get-items.js */ \"./src/modules/get-items.js\");\n/* harmony import */ var _modules_createPopup_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createPopup.js */ \"./src/modules/createPopup.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_get_items_js__WEBPACK_IMPORTED_MODULE_2__.getData)();\r\n(0,_modules_createPopup_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ }),

/***/ "./src/modules/addlikes.js":
/*!*********************************!*\
  !*** ./src/modules/addlikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-items.js */ \"./src/modules/get-items.js\");\n\r\n\r\nconst newLikes = () => {\r\n  const likeBtn = document.querySelectorAll('.like');\r\n  likeBtn.forEach((eachLike) => {\r\n    eachLike.addEventListener('click', (e) => {\r\n      const id = Number(e.target.id.slice(4));\r\n      (0,_get_items_js__WEBPACK_IMPORTED_MODULE_0__.addLikes)({ item_id: id });\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newLikes);\n\n//# sourceURL=webpack://webpack/./src/modules/addlikes.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementApi.js */ \"./src/modules/involvementApi.js\");\n\r\n\r\nconst commentCounter = (IdMeal) => {\r\n  const commentCounterEl = document.getElementById('commentCounter');\r\n  const CommentData = (0,_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(IdMeal);\r\n  CommentData.then((value) => {\r\n    commentCounterEl.innerHTML = `${value.length}`;\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://webpack/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/commentManager.js":
/*!***************************************!*\
  !*** ./src/modules/commentManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewComment\": () => (/* binding */ addNewComment),\n/* harmony export */   \"createCommentList\": () => (/* binding */ createCommentList)\n/* harmony export */ });\n/* harmony import */ var _involvementApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementApi.js */ \"./src/modules/involvementApi.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\nconst createLi = (date, username, comment) => {\r\n  const listCommentContainer = document.getElementById('commentList');\r\n  const listItem = document.createElement('li');\r\n  listItem.className = 'listItem';\r\n  listItem.innerHTML = `\r\n  <span class=\"username\">${username} .</span>\r\n  <span class=\"commentDate\">${date}</span>\r\n  </br><span class\"commentMessage\">${comment}</span>`;\r\n  listCommentContainer.appendChild(listItem);\r\n};\r\n\r\nconst createCommentList = () => {\r\n  const mealId = document.getElementById('contentId');\r\n  const commentData = (0,_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(mealId.value);\r\n  (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mealId.value);\r\n  commentData.then((value) => {\r\n    if (value) {\r\n      value.forEach((element) => {\r\n        createLi(element.creation_date, element.username, element.comment);\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\nlet lastComment = [];\r\nconst lastCommentItem = () => {\r\n  const mealId = document.getElementById('contentId');\r\n  const commentData = (0,_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.getComment)(mealId.value);\r\n  commentData.then((value) => {\r\n    lastComment = value[value.length - 1];\r\n    createLi(lastComment.creation_date, lastComment.username, lastComment.comment);\r\n  });\r\n};\r\n\r\nconst addNewComment = () => {\r\n  const mealId = document.getElementById('contentId');\r\n  const username = document.getElementById('username');\r\n  const comment = document.getElementById('message');\r\n  const addCommentBtn = document.getElementById('commentBtn');\r\n  addCommentBtn.addEventListener('click', () => {\r\n    if (username.value && comment.value) {\r\n      (0,_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(mealId.value, username.value, comment.value);\r\n      setTimeout(lastCommentItem, 500);\r\n      username.value = '';\r\n      comment.value = '';\r\n    }\r\n    setTimeout((0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(mealId.value), 700);\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/commentManager.js?");

/***/ }),

/***/ "./src/modules/createPopup.js":
/*!************************************!*\
  !*** ./src/modules/createPopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _get_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-items.js */ \"./src/modules/get-items.js\");\n/* harmony import */ var _commentManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentManager.js */ \"./src/modules/commentManager.js\");\n\r\n\r\n\r\nconst createPopup = (meal) => {\r\n  const popupContainer = document.createElement('div');\r\n  popupContainer.className = 'popupContainer';\r\n  const popup = document.createElement('div');\r\n  popup.className = 'popup';\r\n  popup.id = `popup${meal.idCategory}`;\r\n  popup.innerHTML = `\r\n  <i class=\"fa-solid fa-xmark close-popup\"></i>\r\n  <div class=\"imageContainer\">\r\n  <img src=\"${meal.strCategoryThumb}\" alt=\"${meal.strCategory}\" />\r\n  </div>\r\n  <h3 class=\"meal-title\">${meal.strCategory}</h3>\r\n  <p class=\"meal-description\">${meal.strCategoryDescription}</p>\r\n  <div class=\"commentContainer\">\r\n  <h3><span id=\"commentCounter\" class=\"commentCounter\"></span> Comments</h3>\r\n  <ul class=\"commentList\" id=\"commentList\"></ul>\r\n  <h3>Add a comment</h3>\r\n  <form class=\"commentForm\">\r\n  <input type=\"text\" name=\"contentId\" id=\"contentId\" style=\"display:none\" value=\"item${meal.idCategory}\">\r\n  <input type=\"text\" name=\"username\" id=\"username\" placeholder=\"Your name\">\r\n  <textarea name=\"message\" id=\"message\" class=\"commentMessage cols=\"30\" placeholder=\"Your message\" rows=\"7\"></textarea>\r\n  <button type=\"button\" id=\"commentBtn\">Comment</button>\r\n  </form>\r\n  </div>\r\n  `;\r\n  popupContainer.appendChild(popup);\r\n  document.body.appendChild(popupContainer);\r\n  const closePopup = document.querySelector('.close-popup');\r\n  closePopup.addEventListener('click', () => {\r\n    popupContainer.remove();\r\n  });\r\n};\r\n\r\nconst popup = () => {\r\n  const mealData = (0,_get_items_js__WEBPACK_IMPORTED_MODULE_0__.getData)();\r\n  mealData.then((value) => {\r\n    for (let i = 0; i < value.length; i += 1) {\r\n      const commentButton = document.getElementById(`commentBtn${value[i].idCategory}`);\r\n      commentButton.addEventListener('click', () => {\r\n        createPopup(value[i]);\r\n        setTimeout(_commentManager_js__WEBPACK_IMPORTED_MODULE_1__.createCommentList, 100);\r\n        setTimeout(_commentManager_js__WEBPACK_IMPORTED_MODULE_1__.addNewComment, 100);\r\n      });\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popup);\n\n//# sourceURL=webpack://webpack/./src/modules/createPopup.js?");

/***/ }),

/***/ "./src/modules/display_list.js":
/*!*************************************!*\
  !*** ./src/modules/display_list.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getfood_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getfood.js */ \"./src/modules/getfood.js\");\n/* harmony import */ var _addlikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addlikes.js */ \"./src/modules/addlikes.js\");\n/* harmony import */ var _itemCount_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemCount.js */ \"./src/modules/itemCount.js\");\n// Displaying Images in the browser\r\n\r\n\r\n\r\n\r\nconst getObj = (arrLike) => {\r\n  const obj = {};\r\n  arrLike.forEach((eachLike) => {\r\n    obj[Number(eachLike.item_id)] = Number(eachLike.likes);\r\n  });\r\n  return obj;\r\n};\r\n\r\nconst displayList = (mealsCategory, allLikes) => {\r\n  const displayItemBlock = document.getElementById('display-item-block');\r\n  const allFoods = document.getElementById('item-counter');\r\n  displayItemBlock.innerHTML = '';\r\n\r\n  const eachObj = getObj(allLikes);\r\n  mealsCategory.forEach((element) => {\r\n    const mealId = Number(element.idCategory);\r\n    const eachLike = eachObj[mealId];\r\n    const itemList = document.createElement('div');\r\n    itemList.classList = `display-item-${element.idCategory} display-items`;\r\n    allFoods.innerHTML = `${(0,_itemCount_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(mealsCategory)}`;\r\n\r\n    if (mealId in eachObj) {\r\n      itemList.innerHTML = (0,_getfood_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element, eachLike);\r\n    } else {\r\n      itemList.innerHTML = (0,_getfood_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(element);\r\n    }\r\n    displayItemBlock.appendChild(itemList);\r\n  });\r\n  (0,_addlikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayList);\n\n//# sourceURL=webpack://webpack/./src/modules/display_list.js?");

/***/ }),

/***/ "./src/modules/get-items.js":
/*!**********************************!*\
  !*** ./src/modules/get-items.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLikes\": () => (/* binding */ addLikes),\n/* harmony export */   \"getData\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _display_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display_list.js */ \"./src/modules/display_list.js\");\n// Fetch item from API\r\n\r\n\r\nconst getData = async () => {\r\n  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';\r\n  const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PYgIdxnvxE7RLPTKi2DI/likes/';\r\n  const results = await fetch(url);\r\n  const results2 = await fetch(url2);\r\n  const mealObj = await results.json();\r\n  const likesObj = await results2.json();\r\n  const result = mealObj.categories;\r\n\r\n  (0,_display_list_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(result, likesObj);\r\n  return result;\r\n};\r\n\r\n// Add Likes\r\nconst addLikes = async (like) => {\r\n  const url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PYgIdxnvxE7RLPTKi2DI/likes/';\r\n  const result3 = await fetch(url2, {\r\n    method: 'POST',\r\n    body: JSON.stringify(like),\r\n    headers: {\r\n      'Content-Type': 'application/json;charset=utf-8',\r\n    },\r\n  });\r\n  const sendData = await result3.text();\r\n  getData();\r\n  return sendData;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/get-items.js?");

/***/ }),

/***/ "./src/modules/getfood.js":
/*!********************************!*\
  !*** ./src/modules/getfood.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getFood = ({ idCategory, strCategoryThumb, strCategory }, likes = 0) => {\r\n  const eachList = `\r\n    <div class=\"item-img-block\">\r\n        <img class=\"images\" src=\"${strCategoryThumb}\" alt=\"Chicken\">\r\n    </div>\r\n    <div class=\"item-title-like\">\r\n        <h2 class=\"title-1 titles\">${strCategory}</h2>\r\n        <div class=\"likes-block\">\r\n            <button  id=\"like${idCategory}\" class=\"like like${idCategory}\">&#10084;</button>\r\n            <p class=\"item-likes likes\">${likes < 2 ? `${likes} Like` : `${likes}  Likes`}</p>\r\n        </div>\r\n    </div>\r\n    <button type=\"button\" id=\"commentBtn${idCategory}\" class=\"comment-btn\">Comments</button>\r\n  `;\r\n  return eachList;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getFood);\n\n//# sourceURL=webpack://webpack/./src/modules/getfood.js?");

/***/ }),

/***/ "./src/modules/involvementApi.js":
/*!***************************************!*\
  !*** ./src/modules/involvementApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"getComment\": () => (/* binding */ getComment)\n/* harmony export */ });\nconst involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\r\nconst appID = 'QKa6LFszuxzqdWDMHQTc';\r\n\r\nconst addComment = async (mealId, username, comment) => {\r\n  await fetch(`${involvementApi}/apps/${appID}/comments`, {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: `${mealId}`,\r\n      username: `${username}`,\r\n      comment: `${comment}`,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\nconst getComment = async (mealId) => {\r\n  const getData = await fetch(`${involvementApi}/apps/${appID}/comments?item_id=${mealId}`, {\r\n    method: 'GET',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n  let results = '';\r\n  if (getData.status !== 400) {\r\n    results = await getData.json();\r\n  }\r\n  return results;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack/./src/modules/involvementApi.js?");

/***/ }),

/***/ "./src/modules/itemCount.js":
/*!**********************************!*\
  !*** ./src/modules/itemCount.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemCounter = (allMeals) => {\r\n  const allItems = allMeals.length;\r\n  return allItems;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCounter);\n\n//# sourceURL=webpack://webpack/./src/modules/itemCount.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;