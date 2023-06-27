"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Core(_props) {
  var props = _props;
  console.log(props);

  var onValueChanged = function onValueChanged(e) {
    if ([e.target.name] === "pageNumber") props.onValueChanged(e.target.name, e.target.id);else {
      props.onValueChanged("pageNumber", "1");
      props.onValueChanged(e.target.name, e.target.value);
    }
  };

  var startCalc = function startCalc(props) {
    if (props.totalCount < 1) return 0;
    return (Number(props.pageNumber) - 1) * props.countPerPage + 1;
  };

  var endRowCalc = function endRowCalc(props) {
    var endValue = Number(props.pageNumber) * props.countPerPage;
    var showingEndCalc = endValue >= props.totalCount ? props.totalCount : endValue;
    return showingEndCalc;
  };

  var renderOptions = function renderOptions(props) {
    var pages = [];
    var count = Math.ceil(props.totalCount / props.countPerPage);
    if (props.pageNumber > 3) pages[0] = /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: "paginate_button next",
      id: 1,
      name: "pageNumber",
      "aria-controls": "datatable",
      onClick: onValueChanged,
      "data-dt-idx": "3",
      tabIndex: "0",
      children: "First"
    }, "0");
    if (props.pageNumber == "1") pages[1] = /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: "paginate_button previous disabled",
      "aria-controls": "datatable",
      id: Number(props.pageNumber) - 1,
      name: "pageNumber",
      "data-dt-idx": "0",
      tabIndex: "0",
      children: "<"
    }, "1");else pages[1] = /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: "paginate_button previous",
      "aria-controls": "datatable",
      id: Number(props.pageNumber) - 1,
      name: "pageNumber",
      onClick: onValueChanged,
      "data-dt-idx": "0",
      tabIndex: "0",
      children: "<"
    }, "1");

    for (var i = props.pageNumber - 2; i <= Number(props.pageNumber) + 2 && i <= count; i++) {
      if (i == props.pageNumber) pages[i] = /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: "paginate_button current",
        "aria-controls": "datatable",
        value: i,
        id: i,
        name: "pageNumber",
        tabIndex: "0"
        /*  onClick={onValueChanged} */
        ,
        children: i
      }, i);else if (i != 0) pages[i] = /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: "paginate_button ",
        "aria-controls": "datatable",
        value: i,
        id: i,
        name: "pageNumber",
        tabIndex: "0",
        onClick: onValueChanged,
        children: i
      }, i);
    }

    if (count == props.pageNumber || props.totalCount == 0) pages[count + 1] = /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
      className: "paginate_button next disabled",
      id: Number(props.pageNumber) + 1,
      name: "pageNumber",
      "aria-controls": "datatable",
      "data-dt-idx": "3",
      tabIndex: "0",
      children: ">"
    }, count + 1);else {
      pages[count + 1] = /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: "paginate_button next",
        id: Number(props.pageNumber) + 1,
        name: "pageNumber",
        "aria-controls": "datatable",
        onClick: onValueChanged,
        "data-dt-idx": "3",
        tabIndex: "0",
        children: ">"
      }, count + 1);
      pages[count + 2] = /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        className: "paginate_button next",
        id: count,
        name: "pageNumber",
        "aria-controls": "datatable",
        onClick: onValueChanged,
        "data-dt-idx": "3",
        tabIndex: "0",
        children: "Last"
      }, count + 2);
    }
    return pages;
  };

  var pages = "";
  pages = renderOptions(props);
  var startResult = startCalc(props);
  var endResult = endRowCalc(props);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: props.customStyles,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "column",
      id: "datatable_info",
      role: "status",
      "aria-live": "polite",
      children: ["                ", props.displayText.currentDisplayingText, " ", startResult ? startResult : 0, "                 ", props.displayText.currentToText, " ", endResult ? endResult : 0, "                 ", props.displayText.currentOfText, " ", props.totalCount ? props.totalCount : 0, "                 ", props.displayText.currentEntriesText]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "column",
      id: "datatable_length",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
        children: [props.displayText.expectedDisplayText, /*#__PURE__*/(0, _jsxRuntime.jsx)("select", {
          "aria-controls": "datatable",
          name: "countPerPage",
          value: props.countPerPage,
          className: "form-control input-sm",
          onChange: onValueChanged,
          children: props.countOption.map(function (item) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
              value: item,
              children: item
            }, item);
          })
        }), props.displayText.expectedEntriesText]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "column",
      id: "datatable_paginate",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        className: "pagination",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: pages
        })
      })
    })]
  });
}

var _default = Core;
exports.default = _default;