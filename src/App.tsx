import React, { useRef, useEffect } from "react";
import './App.css'

import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

function App() {
  const viewDiv = useRef(null);
  useEffect(() => {
    console.log("Hello")
    const map = new ArcGISMap({
      basemap: "topo-vector"
    });

    const view = new MapView({
      map: map,
      //@ts-ignore
      container: viewDiv.current,
      center: [139.69, 35.68972],
      zoom: 10
    });

    // return (
    //   <div className="App">
    //     <div id="viewDiv"></div>
    //   </div>
    // )
  }, []);
  return <div className="viewDiv" ref={viewDiv}></div>;
}

export default App
