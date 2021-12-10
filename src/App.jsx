import React, { useState, useEffect } from "react";
import TilePalette from "./components/tile-palette";
import Map from "./components/map";
import "./index.css";

export default function App() {
  const [tileset, setTileset] = useState("sprite");
  const [activeTile, setActiveTile] = useState({ x: 0, y: 0 });
  const [tiles, setTiles] = useState([]);
  const [mapSize, setMapSize] = useState({
    width: 800,
    height: 600,
  });

  useEffect(() => {
    const _tiles = [];
    let id = 0;

    for (let y = 0; y < mapSize.height; y = y + 32) {
      const row = [];
      for (let x = 0; x < mapSize.width; x = x + 32) {
        row.push({ x, y, id: id++, v: { x: -32, y: -32 } });
      }
      _tiles.push(row);
    }
    setTiles(_tiles);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        border: "solid 1px black",
      }}
    >
      <TilePalette
        tileset={tileset}
        activeTile={activeTile}
        setActiveTile={setActiveTile}
        size={{
          width: 320,
          height: 224,
        }}
      />

      <Map
        tiles={tiles}
        tileset={tileset}
        size={mapSize}
        activeTile={activeTile}
        setTiles={setTiles}
      />
    </div>
  );
}
