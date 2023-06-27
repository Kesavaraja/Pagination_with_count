"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.defaultDisplayText = exports.defaultCount = void 0;
exports.validArray = validArray;
var defaultDisplayText = {
  currentDisplayingText: "Displaying",
  currentToText: "to",
  currentOfText: "of",
  currentEntriesText: "entries",
  expectedDisplayText: "Display ",
  expectedEntriesText: " entries"
};
exports.defaultDisplayText = defaultDisplayText;
var styles = {
  containerClass: "",
  bgColor: "",
  buttonBgColor: "Grey",
  textColor: "Blue"
};
exports.styles = styles;
var defaultCount = [10, 20, 50, 100];
exports.defaultCount = defaultCount;

function validArray(data) {
  if (data && data.length > 0) return true;else return false;
}