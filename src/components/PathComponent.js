import React from "react";

export default class SVGComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.targetRef = React.createRef();
        this.tooltip = null;
    }

    onMouseEnter(e, obj, ISOIdentifier, identifierdata) {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'hover-badge';
        this.tooltip.innerText = obj?.identifierdata || identifierdata[ISOIdentifier];

        document.body.appendChild(this.tooltip);

        const rect = this.targetRef.current.getBoundingClientRect();
        this.tooltip.style.top = `${rect.top - 35 + window.scrollY}px`;
        this.tooltip.style.left = `${rect.left + rect.width / 2 - this.tooltip.offsetWidth / 2 + window.scrollX}px`;
    };

    onMouseLeave(e) {
        if (this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
        }
    };

    render() {
        const { ISOIdentifier, path, fill, stroke, customize, onClick, identifierdata } = this.props
        return <path
            key={ISOIdentifier}
            d={path}
            fill={fill}
            stroke={stroke}
            data-name={ISOIdentifier}
            className={ISOIdentifier.toLowerCase()}
            onClick={(e) => onClick(e, ISOIdentifier)}
            ref={this.targetRef}
            onMouseEnter={(e) => this.onMouseEnter(e, customize[ISOIdentifier],
                ISOIdentifier, identifierdata)}
            onMouseLeave={(e) => this.onMouseLeave(e)}
        />
    }
}