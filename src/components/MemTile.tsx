import React from "react";
import "./style.css";
import { MemoryAction } from "../redux/memory/type";

interface MemTileProps {
  loop: number;
  nr: number;
  click: (
    index: number,
    nr: number,
    disp: (action: MemoryAction) => void
  ) => void;
  dispatch: (action: MemoryAction) => void;
}

export const MemTile = ({ loop, nr, click, dispatch }: MemTileProps) => {
  const changeColor =
    (loop: number, nr: number, dispatch: (action: MemoryAction) => void) =>
    () => {
      click(loop, nr, dispatch);
    };
  const clickFunc = changeColor(loop, nr, dispatch);

  return (
    <button key={nr} className="memtile" onClick={clickFunc}>
      Tile
    </button>
  );
};
