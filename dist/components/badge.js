"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Badge = function Badge(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "badge ".concat(!props.value ? 'badge--none' : '', " "),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
      className: "heavy",
      children: props.value || 0
    })
  });
};

var _default = Badge;
exports.default = _default;