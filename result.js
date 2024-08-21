"use strict";

var _jsxDom = _interopRequireDefault(require("jsx-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var element = (0, _jsxDom["default"])("div", {
  id: "greeting",
  className: "alert"
}, "Hello World");
document.body.appendChild(element);
