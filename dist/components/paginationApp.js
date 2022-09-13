"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _constants = require("../constants");

var _Core = _interopRequireDefault(require("./Core"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function PaginationApp(props) {
  var getCurrentTheme = function getCurrentTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  var _useState = (0, _react.useState)(props.totalCount ? props.totalCount : 100),
      _useState2 = _slicedToArray(_useState, 2),
      totalCount = _useState2[0],
      setTotalCount = _useState2[1];

  var _useState3 = (0, _react.useState)(props.pageNumber ? props.pageNumber : 1),
      _useState4 = _slicedToArray(_useState3, 2),
      pageNumber = _useState4[0],
      setPageNumber = _useState4[1];

  var _useState5 = (0, _react.useState)(props.countPerPage ? props.countPerPage : 10),
      _useState6 = _slicedToArray(_useState5, 2),
      countPerPage = _useState6[0],
      setCountPerPage = _useState6[1];

  var _useState7 = (0, _react.useState)({
    theme: props.style && props.style.theme ? props.style.theme : getCurrentTheme(),
    containerClass: props.style && props.style.containerClass ? props.style.containerClass : _constants.styles.containerClass,
    bgColor: props.style && props.style.bgColor ? props.style.bgColor : _constants.styles.bgColor,
    buttonBgColor: props.style && props.style.buttonBgColor ? props.style.buttonBgColor : _constants.styles.buttonBgColor,
    textColor: props.style && props.style.textColor ? props.style.textColor : _constants.styles.textColor
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      customStyles = _useState8[0],
      setCustomStyles = _useState8[1];

  var _useState9 = (0, _react.useState)((0, _constants.validArray)(props.countOptions) ? props.countOptions : _constants.defaultCount),
      _useState10 = _slicedToArray(_useState9, 2),
      countOptions = _useState10[0],
      setCountOptions = _useState10[1];

  var _useState11 = (0, _react.useState)({
    currentDisplayingText: props.textContent && props.textContent.currentDisplayingText ? props.textContent.currentDisplayingText : _constants.defaultDisplayText.currentDisplayingText,
    currentToText: props.textContent && props.textContent.currentToText ? props.textContent.currentToText : _constants.defaultDisplayText.currentToText,
    currentOfText: props.textContent && props.textContent.currentOfText ? props.textContent.currentOfText : _constants.defaultDisplayText.currentOfText,
    currentEntriesText: props.textContent && props.textContent.currentEntriesText ? props.textContent.currentEntriesText : _constants.defaultDisplayText.currentEntriesText,
    expectedDisplayText: props.textContent && props.textContent.expectedDisplayText ? props.textContent.expectedDisplayText : _constants.defaultDisplayText.expectedDisplayText,
    expectedEntriesText: props.textContent && props.textContent.expectedEntriesText ? props.textContent.expectedEntriesText : _constants.defaultDisplayText.expectedEntriesText
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      textContent = _useState12[0],
      setTextContent = _useState12[1];

  var onPageChanged = function onPageChanged(name, value) {
    if (name === "totalCount") setTotalCount(value);else if (name === "pageNumber") setPageNumber(value);else if (name === "countPerPage") setCountPerPage(value);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "row",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      id: "pagination_counter",
      className: customStyles.containerClass,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Core.default, {
        totalCount: totalCount,
        onValueChanged: onPageChanged,
        customStyles: customStyles,
        countOption: countOptions,
        styles: _constants.styles,
        displayText: textContent,
        pageNumber: pageNumber,
        countPerPage: countPerPage
      })
    })
  });
}

;
var _default = PaginationApp;
exports.default = _default;