"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class SVGComponent extends _react.default.Component {
  render() {
    const {
      containerClass,
      children,
      width,
      height,
      viewBox,
      fill
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("svg", {
      className: containerClass,
      xmlns: "http://www.w3.org/2000/svg",
      width: width,
      height: height,
      viewBox: viewBox,
      fill: fill
    }, children);
  }
}
exports.default = SVGComponent;