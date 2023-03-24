import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ArcGISMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

function App() {
  const map = new ArcGISMap({
    basemap: "topo-vector"
  });

  const view = new MapView({
    map: map,
    container: "viewDiv",
    center: [139.69, 35.68972],
    zoom: 10
  });


  return (
    <div className="App">
      <div id="viewDiv"></div>
    </div>
  )
}

export default App
