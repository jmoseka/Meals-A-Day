"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmeals_a_day"] = self["webpackChunkmeals_a_day"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Aladin&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n  font-family: 'Aladin', cursive;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n  margin: auto;\\r\\n  width: 90%;\\r\\n  max-height: 800px;\\r\\n  background: #703777;\\r\\n  box-shadow: inset 1px 1px 20px 9px black;\\r\\n  overflow: scroll;\\r\\n}\\r\\n\\r\\n.padding-20 {\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  margin: auto;\\r\\n  max-width: 100%;\\r\\n  border-bottom: 2px solid #703777;\\r\\n  position: sticky;\\r\\n  top: 0;\\r\\n  background: #fff;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n/* stylint descending specificity */\\r\\n.ingredient-list li {\\r\\n  width: 80px;\\r\\n  height: auto;\\r\\n  border: 1px solid gray;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.header ul {\\r\\n  display: flex;\\r\\n  column-gap: 50px;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.header ul li {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.header ul li:hover {\\r\\n  text-decoration: underline;\\r\\n  color: #743b79;\\r\\n}\\r\\n\\r\\n#logo {\\r\\n  margin-right: 20px;\\r\\n  height: 60px;\\r\\n  width: 60px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border: 2px solid #703777;\\r\\n  padding: 20px;\\r\\n  text-align: center;\\r\\n  position: sticky;\\r\\n  bottom: 0;\\r\\n  background: #fff;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\nfooter p a {\\r\\n  text-decoration: none;\\r\\n  color: #c506dc;\\r\\n}\\r\\n\\r\\n.header ul li a {\\r\\n  text-decoration: none;\\r\\n  color: #c506dc;\\r\\n}\\r\\n\\r\\n.meals {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  flex-wrap: wrap;\\r\\n  gap: 30px;\\r\\n  margin: 30px 0 30px 30px;\\r\\n}\\r\\n\\r\\n.meal-div {\\r\\n  background: #fff;\\r\\n  padding: 20px;\\r\\n  box-shadow: 1px 1px 20px 6px black;\\r\\n}\\r\\n\\r\\n.meal-img-div {\\r\\n  width: 352px;\\r\\n}\\r\\n\\r\\n.meal-img {\\r\\n  width: 100%;\\r\\n  border-radius: 5px;\\r\\n  border: 2px solid #77407d;\\r\\n}\\r\\n\\r\\n.meals-description {\\r\\n  display: flex;\\r\\n  font-size: 14px;\\r\\n  color: #703777;\\r\\n  column-gap: 10px;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  width: 100%;\\r\\n  font-size: 26px;\\r\\n  border: 0;\\r\\n  padding: 10px;\\r\\n  color: #fff;\\r\\n  background: #713777;\\r\\n  border-radius: 2px;\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.comment-btn:active {\\r\\n  transform: translateY(4px);\\r\\n}\\r\\n\\r\\n.material-icons {\\r\\n  color: #703777;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.material-icons:hover {\\r\\n  color: #c506dc;\\r\\n}\\r\\n\\r\\n.material-icons:active {\\r\\n  transform: translateY(4px);\\r\\n}\\r\\n\\r\\n.meal-likes {\\r\\n  margin-left: 80px;\\r\\n}\\r\\n\\r\\n/* comment styling */\\r\\n\\r\\n.overlay {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  background-color: rgba(0, 0, 0, 0.6);\\r\\n  backdrop-filter: blur(3px);\\r\\n  z-index: 5;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  border-radius: 5px;\\r\\n  border: 2px solid #77407d;\\r\\n  padding: 16px;\\r\\n  position: fixed;\\r\\n  background: white;\\r\\n  top: 50%;\\r\\n  left: 50%;\\r\\n  width: 70%;\\r\\n  transform: translate(-50%, -50%);\\r\\n  z-index: 10;\\r\\n  max-height: 95%;\\r\\n  overflow: scroll;\\r\\n}\\r\\n\\r\\n.comment-header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.img-thumb {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.thumbnail-container {\\r\\n  width: 300px;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.thumbnail-container img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.modal-close {\\r\\n  justify-self: center;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.item-title {\\r\\n  text-align: center;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.item-instructions,\\r\\n.instruction-title {\\r\\n  text-align: center;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.ingredient-list {\\r\\n  text-align: center;\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.ingredient-list li img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n/* comment style */\\r\\n.comment-list {\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.comment-list li {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n/* form style */\\r\\n\\r\\n.form-container {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 70%;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  padding: 6px;\\r\\n  margin-bottom: 5px;\\r\\n  outline: none;\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n.text-area {\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.form-submit {\\r\\n  margin-top: 10px;\\r\\n  padding: 10px;\\r\\n  font-size: 18px;\\r\\n  border: none;\\r\\n  background: #703777;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://meals-a-day/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://meals-a-day/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://meals-a-day/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://meals-a-day/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://meals-a-day/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://meals-a-day/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://meals-a-day/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://meals-a-day/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://meals-a-day/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://meals-a-day/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./img/logo.png":
/*!**********************!*\
  !*** ./img/logo.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/ea4b8563f95595fba95ef171e82bcbb7-logo.png\");\n\n//# sourceURL=webpack://meals-a-day/./img/logo.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/logo.png */ \"./img/logo.png\");\n/* harmony import */ var _modules_getMeals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getMeals.js */ \"./src/modules/getMeals.js\");\n/* harmony import */ var _modules_mealsView_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mealsView.js */ \"./src/modules/mealsView.js\");\n\n\n\n\n\nconst logo = document.getElementById('logo');\nlogo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\nwindow.addEventListener('load', async () => {\n  // const meals = await getMeals();\n  (0,_modules_mealsView_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(await (0,_modules_getMeals_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\n\n\n//# sourceURL=webpack://meals-a-day/./src/index.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikes = async () => {\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CsCw6FWwTQvIQF9pw3a6/likes',\n  );\n  return response.json();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n\n//# sourceURL=webpack://meals-a-day/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/getMeals.js":
/*!*********************************!*\
  !*** ./src/modules/getMeals.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getMeals = async () => {\n  const response = await fetch(\n    'https://www.themealdb.com/api/json/v1/1/search.php?f=c',\n  );\n  const result = await response.json();\n  return result.meals;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMeals);\n\n\n//# sourceURL=webpack://meals-a-day/./src/modules/getMeals.js?");

/***/ }),

/***/ "./src/modules/getPopUpInfo.js":
/*!*************************************!*\
  !*** ./src/modules/getPopUpInfo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validateCommentSubmission_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validateCommentSubmission.js */ \"./src/modules/validateCommentSubmission.js\");\n/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postComment.js */ \"./src/modules/postComment.js\");\n/* harmony import */ var _viewComments_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewComments.js */ \"./src/modules/viewComments.js\");\n\r\n\r\n\r\n\r\nconst getPopUpInfo = async (id) => {\r\n  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;\r\n  const response = await fetch(url);\r\n  const reply = await response.json();\r\n\r\n  /** MealDB object generation */\r\n  const mealDB = reply.meals[0];\r\n  const keys = Object.keys(mealDB);\r\n\r\n  /** Variables of all the required values */\r\n  const { strMeal, strMealThumb, strInstructions } = mealDB;\r\n  const arrIngredients = [];\r\n  const strIngredient = 'strIngredient';\r\n\r\n  keys.forEach((key) => {\r\n    if (key.includes(strIngredient)) {\r\n      if (mealDB[key] !== null && mealDB[key].length > 0) {\r\n        arrIngredients.push(mealDB[key]);\r\n      }\r\n    }\r\n  });\r\n\r\n  /** populate comment data */\r\n  const itemTitle = document.querySelector('.item-title');\r\n  const instructionText = document.querySelector('.instruction-text');\r\n  const imgThumb = document.querySelector('.img-thumb');\r\n  const ingredientList = document.querySelector('.ingredient-list');\r\n  const formContainer = document.querySelector('.form-container');\r\n\r\n  itemTitle.innerHTML = (strMeal);\r\n  instructionText.innerHTML = strInstructions;\r\n  imgThumb.innerHTML = `\r\n    <div class=\"thumbnail-container\">\r\n    <img src=\"${strMealThumb}\">\r\n    <div>\r\n    `;\r\n  /** List of ingredients */\r\n  ingredientList.innerHTML = '';\r\n  arrIngredients.forEach((ingredient) => {\r\n    const element = document.createElement('li');\r\n    element.innerHTML = `\r\n                <img src=\"https://www.themealdb.com/images/ingredients/${ingredient}.png\">\r\n                <p>${ingredient}</p>\r\n                `;\r\n\r\n    ingredientList.appendChild(element);\r\n  });\r\n\r\n  /** form */\r\n  formContainer.innerHTML = `\r\n  <form>\r\n          <input class=\"name-input\" type=\"text\" placeholder=\"Your name\">\r\n          <textarea class=\"text-area\" cols=\"30\" rows=\"10\" placeholder=\"Your insights\"></textarea>\r\n          <button class=\"form-submit\" id=${id} type=\"button\">Comment</button>\r\n          <p class=\"notice hidden\">⛔ Fields cannot be empty</p>\r\n      </form>\r\n  `;\r\n  const formSubmit = document.querySelector('.form-submit');\r\n  formSubmit.addEventListener('click', () => {\r\n    (0,_validateCommentSubmission_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(formSubmit.id);\r\n  });\r\n\r\n  /** view comments */\r\n  const commentPosted = await (0,_postComment_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(formSubmit.id);\r\n  (0,_viewComments_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(commentPosted);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPopUpInfo);\n\n//# sourceURL=webpack://meals-a-day/./src/modules/getPopUpInfo.js?");

/***/ }),

/***/ "./src/modules/mealsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/mealsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mealsCounter = (data) => data.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealsCounter);\n\n\n//# sourceURL=webpack://meals-a-day/./src/modules/mealsCounter.js?");

/***/ }),

/***/ "./src/modules/mealsView.js":
/*!**********************************!*\
  !*** ./src/modules/mealsView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postLikes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postLikes.js */ \"./src/modules/postLikes.js\");\n/* harmony import */ var _getLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes.js */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _mealsCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mealsCounter.js */ \"./src/modules/mealsCounter.js\");\n/* harmony import */ var _open_close_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./open-close-modal.js */ \"./src/modules/open-close-modal.js\");\n/* harmony import */ var _getPopUpInfo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getPopUpInfo.js */ \"./src/modules/getPopUpInfo.js\");\n/* eslint-disable no-await-in-loop */\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst mealsList = document.getElementById('meals-list');\r\n\r\nconst likesCount = (target, likesArray, numOfLikes) => {\r\n  likesArray.forEach((obj) => {\r\n    if (obj.item_id === target.id) {\r\n      numOfLikes.innerHTML = `${obj.likes} likes `;\r\n    }\r\n  });\r\n};\r\n\r\nconst mealView = async (data) => {\r\n  const mealsCount = document.querySelector('#items-count');\r\n  mealsCount.innerHTML = (0,_mealsCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\r\n\r\n  for (let i = 0; i <= data.length - 1; i += 1) {\r\n    const mealDiv = document.createElement('div');\r\n    mealDiv.id = data[i].idMeal;\r\n    mealDiv.classList.add('meal-div');\r\n    mealDiv.setAttribute('meal-id', `${data[i].idMeal}`);\r\n\r\n    const mealImage = document.createElement('div');\r\n    mealImage.classList.add('meal-img-div');\r\n\r\n    const image = document.createElement('img');\r\n    image.classList.add('meal-img');\r\n    image.src = data[i].strMealThumb;\r\n    mealImage.appendChild(image);\r\n    mealDiv.appendChild(mealImage);\r\n\r\n    const mealDescription = document.createElement('div');\r\n    mealDescription.classList.add('meals-description');\r\n    const mealName = document.createElement('h3');\r\n    mealName.innerHTML = data[i].strMeal;\r\n\r\n    const likeBtn = document.createElement('i');\r\n    likeBtn.classList.add('material-icons');\r\n    likeBtn.innerText = 'favorite_border';\r\n    likeBtn.id = data[i].idMeal;\r\n\r\n    mealDescription.appendChild(mealName);\r\n    mealDescription.appendChild(likeBtn);\r\n    mealDiv.appendChild(mealDescription);\r\n\r\n    const mealLikes = document.createElement('div');\r\n    const numOfLikes = document.createElement('small');\r\n    mealLikes.classList.add('meal-likes');\r\n    mealLikes.setAttribute('id', 'meal-likes');\r\n    numOfLikes.innerHTML = '0 likes';\r\n    mealLikes.appendChild(numOfLikes);\r\n    mealDiv.appendChild(mealLikes);\r\n\r\n    const commentContainer = document.createElement('div');\r\n    const button = document.createElement('button');\r\n    button.classList.add('comment-btn');\r\n    button.setAttribute('id', `${data[i].idMeal}`);\r\n    button.innerHTML = 'Comments';\r\n\r\n    commentContainer.appendChild(button);\r\n    mealDiv.appendChild(commentContainer);\r\n\r\n    mealsList.appendChild(mealDiv);\r\n\r\n    const likesArray = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    likesCount(likeBtn, likesArray, numOfLikes);\r\n\r\n    likeBtn.addEventListener('click', async (e) => {\r\n      await (0,_postLikes_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(likeBtn.id);\r\n      const newLikes = await (0,_getLikes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n      likesCount(e.target, newLikes, numOfLikes);\r\n    });\r\n\r\n    button.addEventListener('click', () => {\r\n      (0,_open_close_modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n      (0,_getPopUpInfo_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(button.id);\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mealView);\r\n\n\n//# sourceURL=webpack://meals-a-day/./src/modules/mealsView.js?");

/***/ }),

/***/ "./src/modules/open-close-modal.js":
/*!*****************************************!*\
  !*** ./src/modules/open-close-modal.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst openCloseModal = () => {\n  const modal = document.querySelector('.modal');\n  const modalCloseBtn = document.querySelector('.modal-close');\n  const overlay = document.querySelector('.overlay');\n\n  modal.classList.remove('hidden');\n  overlay.classList.remove('hidden');\n\n  modalCloseBtn.addEventListener('click', () => {\n    modal.classList.add('hidden');\n    overlay.classList.add('hidden');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openCloseModal);\n\n//# sourceURL=webpack://meals-a-day/./src/modules/open-close-modal.js?");

/***/ }),

/***/ "./src/modules/postComment.js":
/*!************************************!*\
  !*** ./src/modules/postComment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments)\n/* harmony export */ });\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CsCw6FWwTQvIQF9pw3a6/comments';\n// post the comments to api\nconst postComment = async (id, name, text) => {\n  const response = await fetch(baseUrl, {\n    method: 'POST',\n    headers: {\n      'content-type': 'application/json',\n    },\n    body: JSON.stringify({\n      item_id: id,\n      username: name,\n      comment: text,\n    }),\n  });\n  return response;\n};\n\nconst getComments = async (id) => {\n  const data = await fetch(`${baseUrl}?item_id=${id}`);\n  const result = data.json();\n  return result;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postComment);\n\n//# sourceURL=webpack://meals-a-day/./src/modules/postComment.js?");

/***/ }),

/***/ "./src/modules/postLikes.js":
/*!**********************************!*\
  !*** ./src/modules/postLikes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst postLikes = async (mealId) => {\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CsCw6FWwTQvIQF9pw3a6/likes', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: mealId,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return response.text();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postLikes);\n\n\n//# sourceURL=webpack://meals-a-day/./src/modules/postLikes.js?");

/***/ }),

/***/ "./src/modules/validateCommentSubmission.js":
/*!**************************************************!*\
  !*** ./src/modules/validateCommentSubmission.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _postComment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postComment.js */ \"./src/modules/postComment.js\");\n\r\n\r\nconst validateCommentSubmission = (id) => {\r\n  const nameInput = document.querySelector('.name-input');\r\n  const textAreaInput = document.querySelector('.text-area');\r\n  const notice = document.querySelector('.notice');\r\n\r\n  const name = nameInput.value;\r\n  const text = textAreaInput.value;\r\n  if (!name || !text) {\r\n    notice.classList.remove('hidden');\r\n  } else {\r\n    (0,_postComment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, name, text);\r\n    nameInput.value = '';\r\n    textAreaInput.value = '';\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validateCommentSubmission);\n\n//# sourceURL=webpack://meals-a-day/./src/modules/validateCommentSubmission.js?");

/***/ }),

/***/ "./src/modules/viewComments.js":
/*!*************************************!*\
  !*** ./src/modules/viewComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst viewComments = (postedComments) => {\n  const data = postedComments;\n  const commentList = document.querySelector('.comment-list');\n  commentList.innerHTML = '';\n\n  data.forEach((comment) => {\n    const element = document.createElement('li');\n    element.innerHTML = `\n      ${comment.creation_date} ${comment.username} : ${comment.comment}\n      `;\n    commentList.append(element);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewComments);\n\n//# sourceURL=webpack://meals-a-day/./src/modules/viewComments.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);