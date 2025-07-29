import React from "react";

export default class SVGComponent extends React.Component {
    render() {
        const { containerClass,
            children,
            width,
            height,
            viewBox,
            fill
        } = this.props
        return <svg
            className={containerClass}
            xmlns='http://www.w3.org/2000/svg'
            width={width}
            height={height}
            viewBox={viewBox}
            fill={fill}
        >
            {children}
        </svg>
    }
}