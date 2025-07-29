# react-simple-checkboxlist

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/jeelchheta/react-simple-checkboxlist/blob/main/LICENSE)

You're looking for an SVG-based React map that supports:
- World-level view with countries
- Drill-down to states/provinces (geo-regions)
- Interactive selection and custom metadata
- Custom styling (color, CSS, tooltip, etc.) etc...


## Install

```sh
npm i react-geo-charts
```

## Usage

```javascript
import React from 'react';
import WorldSVGMap, { dataSet } from "react-geo-charts"

function App() {
  const [countrycode, setcountrycodee] = React.useState("IN")
  const [code, setcode] = React.useState([])

  const customizeFuncation = () => {
    let customizeData = {}
    for (let key in dataSet[countrycode ? countrycode : "worldmap"]) {
      customizeData[key] = {
        fill: code.includes(key) ? "blue" : "#fff",
        stroke: code.includes(key) ? "red" : "#222",
        onClick: (ISOIdentifier) => {
          setcode(code.includes(ISOIdentifier) ? code.filter(e => e != ISOIdentifier) : [...code, ISOIdentifier])
        }
      }
    }
    return customizeData
  }

  return (
    <div className="App">
      <WorldSVGMap
        countryCode={countrycode}
        containerClass=""
        width="100%"
        height="100%"
        filldefault="#ccc"
        strokedefault="#222"
        customize={customizeFuncation()}
      />
    </div>
  );
}

export default App;


ReactDOM.render(<App/>, document.body)
```

# list of props
| Prop              | Description                                                    | Type               | Default           |
| ----------------- | -------------------------------------------------------------- | ------------------ | ----------------- |
| `countryCode`         | options for countryCode: US, IN, AU, CA, 'worldmap'                                         | `String` | null                |
| `width`    |  width option for svg tag                                            | `String` | 100%              |
| `height`    |  height option for svg tag  | `String`                   | 100%
| `filldefault`     | region fill default color                                        | `String` | #506EEC           |
| `strokedefault`     | region stroke(border) default color              | `String` | #ccc           |
| `customize` | customize option                               | `Object` | '{}'   |     
| `identifierdata` | customize option in can set 'identifierdata' as tooltip                           | `String` | 'worldmap' in country or 'countrymap' in state,provinces  |     

## License

MIT.

Copyright (c) 2022 Jeel Chheta