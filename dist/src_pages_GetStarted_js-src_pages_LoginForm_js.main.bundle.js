"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkchatbot"] = self["webpackChunkchatbot"] || []).push([["src_pages_GetStarted_js-src_pages_LoginForm_js"],{

/***/ "./src/lib/hooks.js":
/*!**************************!*\
  !*** ./src/lib/hooks.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useImageUrl\": () => (/* binding */ useImageUrl),\n/* harmony export */   \"useSetInterval\": () => (/* reexport safe */ _lib_IntentManager_js__WEBPACK_IMPORTED_MODULE_0__.useSetInterval),\n/* harmony export */   \"useState\": () => (/* reexport safe */ _lib_IntentManager_js__WEBPACK_IMPORTED_MODULE_0__.useState)\n/* harmony export */ });\n/* harmony import */ var _lib_IntentManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/IntentManager.js */ \"./src/lib/IntentManager.js\");\n\nconst useImageUrl = function (imgFile, w, h) {\n  const img = new Image(w || 200, h || 200);\n img.src = imgFile\n  img.onload = function (e) {\n    img.src = e.target.currentSrc;\n  };\n  return img;\n};\n\n\n//# sourceURL=webpack://chatbot/./src/lib/hooks.js?");

/***/ }),

/***/ "./src/pages/ChatUiWelcomePage.js":
/*!****************************************!*\
  !*** ./src/pages/ChatUiWelcomePage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_Intent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Intent.js */ \"./src/lib/Intent.js\");\n/* harmony import */ var _files_bg_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files/bg.png */ \"./src/files/bg.png\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/utils.js */ \"./src/lib/utils.js\");\n\n\n;\n\n\n// Pages\n//import GetStarted from './GetStarted.js'\n\n\n\n\nconst ChatUiWelcomePage = function({frame, context}){\n     //context.setFrameColor('red-500')\n\n  const showcase = frame.nextNode(null, 'div')\n  showcase.setCss('h-full w-full flex flex-col justify-around items-center')\n  \n  const container = showcase.nextNode(null,'div')\n  container.setCss('flex flex-col justify-center items-center py-5 text-white text-center space-y-5')\n  \n  container.nextNode(`Hi!`)\n  .nextNode(`I'm ${_config_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].appName}`,'h1')\n  .setCss('my-3 text-4xl font-bold')\n\n  const bg = new Image(200,200)\n  bg.src = _files_bg_png__WEBPACK_IMPORTED_MODULE_1__;\n  bg.setCss('m-3 object-fit rounded-full')\n  bg.onload=function (e){\n    bg.src = e.target.currentSrc;\n  }\n  container.appendChild(bg)\n\ncontainer.nextNode('How can i help you today?').setCss('my-5')\n\nconst op = container.nextNode(null,'select')\n op.add(new Option('I want to...', 'nothing',true))\n op.add(new Option('Talk to zuma', 'zuma',true))\n /*\n op.add(new Option('Make Enquiries', 'enquire',true))\n op.add(new Option('Read FAQs', 'faqs',true))\n op.add(new Option(`Know how to use ${config.appName}`, 'faqs',true))\n op.add(new Option('Say Hello', 'hello',true))\n op.add(new Option('Do something not listed here', 'chat',true))\n */\n \n op.setCss('form-select py-2 px-3 rounded-full font-bold text-white bg-blue-700 text-center shadow-lg w-full outline-none border-none max-w-full')\n \nop.addEventListener('change', async function (e){\n  const option = e.target;\n  switch(option.value){\n    case 'zuma':\n      const {default: zuma} = await __webpack_require__.e(/*! import() */ \"src_pages_Zuma_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Zuma.js */ \"./src/pages/Zuma.js\"))\n  const {Activity}=(new _lib_Intent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).createActivity()\n      Activity.createChildren(zuma)\n      break;\n  }\n})\n  return showcase;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatUiWelcomePage);\n\n//# sourceURL=webpack://chatbot/./src/pages/ChatUiWelcomePage.js?");

/***/ }),

/***/ "./src/pages/EnquiryForm.js":
/*!**********************************!*\
  !*** ./src/pages/EnquiryForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ \"./src/lib/utils.js\");\n/* harmony import */ var _lib_Intent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Intent.js */ \"./src/lib/Intent.js\");\n/* harmony import */ var _FeedBackSuccessPage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FeedBackSuccessPage.js */ \"./src/pages/FeedBackSuccessPage.js\");\n\n;\n\n\n\n\n\n\n\nconst EnquiryForm = function({ frame }) {\n\n  frame.nextNode('We normally return response in less than 1 hour.')\n    .setCss(`text-white text-center mx-auto p-5 mt-10`)\n\n  const {\n    form,\n    inputs: [username, password, description],\n    submitButton,\n    onSubmit: handleLoginFormSubmit\n  } = frame.nextForm('/api/bot', 'get', [\n    { label: '', name: 'fullname', placeholder: 'Your Fullname' },\n    { label: '', name: 'email', placeholder: 'Your Email' },\n    { label: '', name: 'description', placeholder: 'Describe your request here...', use: 'textarea', rows: 5, cols: 5 }\n      ])\n\n  form.setCss('rounded-md m-auto block p-5')\n\n  username.inputEl.setCss('p-5 text-white bg-slate-500/50 border-none rounded-sm outline-none mb-5 mx-auto w-full text-xl shadow-lg')\n  password.inputEl.setCss('p-5 text-white bg-slate-500/50 border-none rounded-sm outline-none mb-5 mx-auto w-full text-xl shadow-lg')\n   description.inputEl.setCss('p-5 pr-3 bg-slate-500/50 border-none rounded-lg outline-none mb-5 mx-auto w-full text-xl shadow-lg text-white')\n  submitButton.setCss(`p-5 text-white bg-${_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.color.primary700} border-none rounded-lg outline-none mt-10 mx-auto w-full shadow-lg font-bold`)\n\n\n\n  handleLoginFormSubmit((formData, e) => {\n    e.preventDefault()\n\n\n      const { Activity } = (new _lib_Intent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).createActivity()\n      Activity.createChildren(_FeedBackSuccessPage_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n  })\n\n  return form;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnquiryForm);\n\n//# sourceURL=webpack://chatbot/./src/pages/EnquiryForm.js?");

/***/ }),

/***/ "./src/pages/FeedBackSuccessPage.js":
/*!******************************************!*\
  !*** ./src/pages/FeedBackSuccessPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils.js */ \"./src/lib/utils.js\");\n/* harmony import */ var _files_bg_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files/bg.png */ \"./src/files/bg.png\");\n\n\n\n\n;\n\n\n\nconst FeedBackSuccessPage = function({frame}){\n\n  const showcase = frame.nextNode(null, 'div')\n  showcase.setCss('h-full w-full flex flex-col justify-around items-center')\n  \n  const container = showcase.nextNode(null,'div')\n  container.setCss('flex flex-col justify-center items-center py-5')\n  \n  const bg = new Image(400,400)\n  bg.src = _files_bg_png__WEBPACK_IMPORTED_MODULE_2__;\n  bg.setCss('m-3 object-fit')\n  bg.onload=function (e){\n    bg.src = e.target.currentSrc;\n  }\n  container.appendChild(bg)\n\n  \n   container.nextNode(`We have received your request tagged: (a4appleB4ballAndcForCup). \\n\\n\\n We will get back to you asap!`, 'h1')\n   .setFontFamily(_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fonts.secondary)\n   .setCss(`text-white text-xl prose m-5`)\n\n  return showcase;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeedBackSuccessPage);\n\n//# sourceURL=webpack://chatbot/./src/pages/FeedBackSuccessPage.js?");

/***/ }),

/***/ "./src/pages/GetStarted.js":
/*!*********************************!*\
  !*** ./src/pages/GetStarted.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_Intent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Intent.js */ \"./src/lib/Intent.js\");\n/* harmony import */ var _lib_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/common.js */ \"./src/lib/common.js\");\n/* harmony import */ var _EnquiryForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnquiryForm.js */ \"./src/pages/EnquiryForm.js\");\n/* harmony import */ var _ChatUiWelcomePage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatUiWelcomePage.js */ \"./src/pages/ChatUiWelcomePage.js\");\n/* harmony import */ var _LoginForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginForm.js */ \"./src/pages/LoginForm.js\");\n/* harmony import */ var _lib_hooks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hooks.js */ \"./src/lib/hooks.js\");\n/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/utils.js */ \"./src/lib/utils.js\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config.js */ \"./src/config.js\");\n\n\n;\n\n\n\n\n\n\n\n\n\n\n\nconst GetStarted = function({frame, context, data}){\n \n\n  const showcase = frame.nextNode(null, 'div')\n  showcase.setCss('w-full h-full flex flex-col justify-center items-center')\n  showcase.nextNode(data?.message||\"Getting Started Page\",'h1')\n  .setCss('uppercase text-center text-white text-4xl font-sansSerif')\n  \n  //showcase.appendChild(p)\nshowcase.nextNode('Our correspondence are not available at the moment. Please leave us a feedback.', 'h3')\n.setCss('text-center m-10 text-white prose')\n\nshowcase.nextNode(`Meanwhile, you may find useful answers from ${_config_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].appName}`,'p')\n.setCss('text-white text-center')\n\n\n  const zuma = showcase.nextNode(`Chat with ${_config_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].appName}`, 'button')\n  zuma.setCss(`my-5 flex justify-center items-center text-white text-lg font-bold font-impact bg-${_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__.color.primary500} rounded-full px-3 shadow-lg`)\n  \n  const fb = showcase.nextNode('Send us a feedback', 'button')\n  .setCss(`mt-5 flex justify-center items-center text-white text-lg font-bold font-impact bg-${_lib_utils_js__WEBPACK_IMPORTED_MODULE_6__.color.primary300} rounded-full px-3 shadow-lg`)\n  \n \n  \n  \n  fb.addEventListener('click', async function(){\n    \nconst { Activity } = (new _lib_Intent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).createActivity()\n      Activity.createChildren(_EnquiryForm_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n  })\n  \n zuma.addEventListener('click',  function(){\n    const auth = data?.auth||false;\n    let response, nextPage;\n    if(!auth){\n      nextPage = _LoginForm_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n      response={\n        message:'Please Login first!',\n        ok: false,\n        trial:3\n      }\n    }else{\n      nextPage = _ChatUiWelcomePage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      response=`Welcome back!`;\n    }\n   console.log(nextPage) \nconst { Activity } = (new _lib_Intent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).createActivity()\n\n    Activity.createChildren(nextPage, response)\n  })\n  \n  \n  return showcase;\n}\n  \n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetStarted);\n\n//# sourceURL=webpack://chatbot/./src/pages/GetStarted.js?");

/***/ }),

/***/ "./src/pages/LoginForm.js":
/*!********************************!*\
  !*** ./src/pages/LoginForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/utils.js */ \"./src/lib/utils.js\");\n/* harmony import */ var _lib_Intent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Intent.js */ \"./src/lib/Intent.js\");\n/* harmony import */ var _lib_hooks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/hooks.js */ \"./src/lib/hooks.js\");\n/* harmony import */ var _GetStarted_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetStarted.js */ \"./src/pages/GetStarted.js\");\n\n;\n\n\n\n\n\nlet [count, setCount] = (0,_lib_hooks_js__WEBPACK_IMPORTED_MODULE_2__.useState)(3)\n\nconst LoginForm = function({ frame, context, data }) {\n\n  frame.nextNode(data?.message || 'Log into your account (Trial Left: 3)')\n    .setCss(`text-${data?'red-500':'white'} text-center mx-auto p-5 mt-10`)\n\n  const {\n    form,\n    inputs: [username, password, description],\n    submitButton,\n    onSubmit: handleLoginFormSubmit\n  } = frame.nextForm('/api/bot', 'get', [\n    { label: '', name: 'username', placeholder: 'Type \"demo\"' },\n    { label: '', name: 'password', placeholder: 'Type \"12345\"' },\n      ])\n\n  form.setCss('rounded-md m-auto block p-5')\n\n  username.inputEl.setCss('p-5 text-white bg-slate-500/50 border-none rounded-sm outline-none mb-5 mx-auto w-full text-xl shadow-lg')\n  password.inputEl.setCss('p-5 text-white bg-slate-500/50 border-none rounded-sm outline-none mb-5 mx-auto w-full text-xl shadow-lg')\n  submitButton.setCss(`p-5 text-white bg-${_lib_utils_js__WEBPACK_IMPORTED_MODULE_0__.color.primary700} border-none rounded-lg outline-none mt-10 mx-auto w-full shadow-lg`)\n\n\n\n  handleLoginFormSubmit((formData, e) => {\n    e.preventDefault()\n\n    try {\n\n      // Dummy data\n      const username = formData.get('username'),\n        password = formData.get('password')\n\n      const authenticated = (username === 'demo' && password === '12345') ? true : false\n\n      let nextPage, response;\n\n      if (authenticated) {\n        nextPage = _GetStarted_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n        response ={message: 'Login Successful',auth:true}\n\n      } else {\n\n        if (count <= 0) {\n          alert(\"You have exceeded the trial count. browser will now be reloaded.\")\n          window.location.reload()\n        }\n\n        nextPage = LoginForm\n        response = {\n          ok: authenticated,\n          trial: count,\n          message: `Please supply the correct information (Trial Left: ${count})`\n        }\n        setCount(--count)\n\n      }\n\n      const { Activity } = (new _lib_Intent_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).createActivity()\n      Activity.createChildren(nextPage, response)\n    } catch (e) {\n      console.log(e)\n    }\n  })\n\n  return form;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);\n\n//# sourceURL=webpack://chatbot/./src/pages/LoginForm.js?");

/***/ })

}]);