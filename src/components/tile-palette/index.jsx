import React, { useState } from "react";

export default function TilePalette({ tileset, size, setActiveTile }) {
  const [active, setActive] = useState(false);
  const { width, height } = size;
  const tiles = [];
  let id = 0;

  for (let y = 0; y < height; y = y + 32) {
    const row = [];
    for (let x = 0; x < width; x = x + 32) {
      row.push({ x, y, id: id++ });
    }
    tiles.push(row);
  }

  return (
    <div
      id="palette"
      style={{
        border: "1px solid black",
        zIndex: 10,
        backgroundColor: "white",
        display: "block",
      }}
    >
      {tiles.map((row, y) => (
        <div style={{ display: "flex", border: "1px solid black" }}>
          {row.map((tile, x) => (
            <div
              onClick={() =>
                setActiveTile({ x: x * 32, y: y * 32 }, setActive(true))
              }
              style={{
                borderRight: "1px solid black",
                width: "32px",
                height: "32px",
                background: `url(/sprites/${tileset}.png) -${x * 32}px -${
                  y * 32
                }px no-repeat`,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
