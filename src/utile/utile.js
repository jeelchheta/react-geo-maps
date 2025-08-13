import data from "../assets/data.json"
import viewBox from "../assets/viewBox.json"
import identifierdata from "../assets/identifierdata.json"

export function getCountryAndView(regioncode, figure) {
    return {
        viewBoxdefault: viewBox[regioncode + figure] || viewBox[regioncode] || viewBox["worldmap"],
        data: data[regioncode + figure] || data[regioncode] || data["worldmap"],
        identifierdata: identifierdata[regioncode + figure] || identifierdata[regioncode] || identifierdata["worldmap"]
    }
}