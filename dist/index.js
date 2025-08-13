"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "dataSet", {
  enumerable: true,
  get: function () {
    return _identifierdata.default;
  }
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _SVGComponent = _interopRequireDefault(require("./components/SVGComponent"));
var _PathComponent = _interopRequireDefault(require("./components/PathComponent"));
var _identifierdata = _interopRequireDefault(require("./assets/identifierdata.json"));
var _utile = require("./utile/utile");
require("./style/index.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class WorldSVGMap extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClick(event, ISOIdentifier) {
    const {
      customize
    } = this.props;
    if (customize[ISOIdentifier]?.onClick && !customize[ISOIdentifier]?.disable) {
      customize[ISOIdentifier]?.onClick(ISOIdentifier);
    }
  }
  render() {
    const {
      regioncode,
      containerClass,
      width,
      height,
      filldefault,
      strokedefault,
      customize,
      viewBox,
      figure,
      tooltipdisable
    } = this.props;
    const {
      viewBoxdefault,
      data,
      identifierdata
    } = (0, _utile.getCountryAndView)(regioncode, figure);
    return /*#__PURE__*/_react.default.createElement(_SVGComponent.default, {
      containerClass: `map-svg-segment ${containerClass}`,
      width: width,
      height: height,
      viewBox: viewBox || viewBoxdefault
    }, Object.entries(data).map(_ref => {
      let [ISOIdentifier, path] = _ref;
      return /*#__PURE__*/_react.default.createElement(_PathComponent.default, {
        key: ISOIdentifier,
        path: path,
        fill: customize[ISOIdentifier]?.fill || filldefault,
        stroke: customize[ISOIdentifier]?.stroke || strokedefault,
        ISOIdentifier: ISOIdentifier,
        customize: customize,
        identifierdata: identifierdata,
        tooltipdisable: tooltipdisable,
        onClick: e => this.onClick(e, ISOIdentifier)
      });
    }));
  }
}
exports.default = WorldSVGMap;
WorldSVGMap.defaultProps = {
  regioncode: "",
  containerClass: "",
  viewBox: "",
  width: "100%",
  height: "100%",
  filldefault: "var(--color-fff)",
  strokedefault: "var(--color-222)",
  customize: {},
  figure: "",
  tooltipdisable: false
};