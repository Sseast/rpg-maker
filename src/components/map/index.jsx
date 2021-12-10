import React from "react";

export default function Map({ tiles, setTiles, activeTile, tileset, size }) {
  const cloneMatrix = (m) => {
    const clone = new Array(m.length);
    for (let i = 0; i < m.length; ++i) {
      clone[i] = m[i].slice(0);
    }
    return clone;
  };

  const changeTile = ({ x, y }) => {
    setTiles((old) => {
      const clone = cloneMatrix(old);
      const tile = {
        ...clone[y][x],
        v: activeTile,
      };
      clone[y][x] = tile;
      return clone;
    });
  };

  return (
    <div className="box-border w-full bg-white ">
      {tiles.map((row, y) => (
        <div style={{ display: "flex" }}>
          {row.map((tile, x) => (
            <div
              onClick={() => changeTile({ x, y })}
              style={{
                background: `url(/sprites/${tileset}.png) -${tile.v.x}px -${tile.v.y}px no-repeat`,
                width: 32,
                height: 32,
                borderTop: "1px solid black",
                borderRight: "1px solid black",
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
