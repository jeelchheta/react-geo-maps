"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountryAndView = getCountryAndView;
var _data = _interopRequireDefault(require("../assets/data.json"));
var _viewBox = _interopRequireDefault(require("../assets/viewBox.json"));
var _identifierdata = _interopRequireDefault(require("../assets/identifierdata.json"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function getCountryAndView(countryCode) {
  return {
    viewBoxdefault: _viewBox.default[countryCode] || _viewBox.default["worldmap"],
    data: _data.default[countryCode] || _data.default["worldmap"],
    identifierdata: _identifierdata.default[countryCode] || _identifierdata.default["worldmap"]
  };
}