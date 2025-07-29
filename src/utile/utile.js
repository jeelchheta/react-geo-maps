import data from "../assets/data.json"
import viewBox from "../assets/viewBox.json"
import identifierdata from "../assets/identifierdata.json"

export function getCountryAndView(countryCode) {
    return {
        viewBoxdefault: viewBox[countryCode] || viewBox["worldmap"],
        data: data[countryCode] || data["worldmap"],
        identifierdata: identifierdata[countryCode] || identifierdata["worldmap"]
    }
}