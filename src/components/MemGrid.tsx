import "./style.css";
import "./modal.css";

import React, { useState } from "react";
import { MemInfo } from "./MemInfo";
import { MemTile } from "./MemTile";
import { Content } from "../logic/content";

interface TGridProps {}

export const MemGrid = ({}: TGridProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = () => {};

  const clickTile = (index: number, nr: number) => {
    console.log(`clickTile`);
  };

  const renderTile = (index: number) => {
    return (
      <MemTile
        key={index}
        nr={index}
        loop={index}
        click={clickTile}
        dispatch={dispatch}
      />
    );
  };

  let size = 30;
  let length = 20;
  let headerHeight = 0;
  if (window.innerWidth <= 320) {
    // 320 x 496 -> size: 80px
    // 96 + (4 x 80) x (5 x 80)
    size = 20;
    length = 80;
    headerHeight = 96;
  } else if (window.innerWidth <= 600) {
    // 600 x 792 -> size: 120px
    // 72px + (5 x 120) x (6 x 120)
    size = 30;
    length = 120;
    headerHeight = 72;
  } else if (window.innerWidth <= 640) {
    size = 20;
    length = 120;
    headerHeight = 50;
  } else if (window.innerWidth <= 960) {
    // 960 x 432 -> size: 120px
    // 72px  + (8 x 120) x (3 x 120)
    size = 24;
    length = 120;
    headerHeight = 72;
  } else if (window.innerWidth <= 1500) {
    //  -> 150px
    // 50px + (10 x 150) x (5 x 150)
    size = 50;
    length = 150;
    headerHeight = 50;
  }

  let arr: number[] = [];
  for (let loop = 0; loop < size; loop += 1) {
    arr.push(loop);
  }

  const renderTiles = () => {
    return arr.map((ob, index) => renderTile(index));
  };

  return <div key={1}>{renderTiles()}</div>;
};
