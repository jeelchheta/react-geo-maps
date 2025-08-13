import React from "react"
import SVGComponent from "./components/SVGComponent"
import PathComponent from './components/PathComponent'
import dataSet from "./assets/identifierdata.json"
import { getCountryAndView } from "./utile/utile"
import "./style/index.css"

export default class WorldSVGMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    onClick(event, ISOIdentifier) {
        const { customize } = this.props
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
            tooltipdisable } = this.props;
        const { viewBoxdefault, data, identifierdata } = getCountryAndView(regioncode, figure);
        return <SVGComponent
            containerClass={`map-svg-segment ${containerClass}`}
            width={width}
            height={height}
            viewBox={viewBox || viewBoxdefault}
        >
            {Object.entries(data).map(([ISOIdentifier, path]) => (
                <PathComponent
                    key={ISOIdentifier}
                    path={path}
                    fill={customize[ISOIdentifier]?.fill || filldefault}
                    stroke={customize[ISOIdentifier]?.stroke || strokedefault}
                    ISOIdentifier={ISOIdentifier}
                    customize={customize}
                    identifierdata={identifierdata}
                    tooltipdisable={tooltipdisable}
                    onClick={(e) => this.onClick(e, ISOIdentifier)} />
            ))}
        </SVGComponent>;
    }
}

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

export {
    dataSet
}