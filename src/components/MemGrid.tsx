import "./style.css";
import "./modal.css";

import React, { useState } from "react";
import { MemInfo } from "./MemInfo";
import { MemTile } from "./MemTile";
import { Content } from "../logic/content";

interface TGridProps {}

export const MemGrid = ({}: TGridProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const renderTile = () => {
    return <MemTile />;
  };

  let size = 30;
  if (window.innerWidth <= 320) {
    size = 16;
  } else if (window.innerWidth <= 640) {
    size = 20;
  }

  let arr: number[] = [];
  for (let loop = 0; loop < size; loop += 1) {
    arr.push(loop);
  }

  const renderTiles = () => {
    return arr.map((ob) => renderTile());
  };

  return <div>{renderTiles()}</div>;
};
