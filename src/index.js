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
        if (customize[ISOIdentifier]?.onClick) {
            customize[ISOIdentifier]?.onClick(ISOIdentifier);
        }
    }

    render() {
        const {
            countryCode,
            containerClass,
            width,
            height,
            filldefault,
            strokedefault,
            customize,
            viewBox } = this.props;
        const { viewBoxdefault, data, identifierdata } = getCountryAndView(countryCode)

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
                    onClick={(e) => this.onClick(e, ISOIdentifier)} />
            ))}
        </SVGComponent>;
    }
}

WorldSVGMap.defaultProps = {
    countryCode: "",
    containerClass: "",
    viewBox: "",
    width: "100%",
    height: "100%",
    filldefault: "#506EEC",
    strokedefault: "#ccc",
    customize: {},
};

export{
    dataSet
}