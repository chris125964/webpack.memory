import "./style.css";
import "./modal.css";

import * as actionTypes from "../redux/sample/actionTypes";

import React, { useState } from "react";
import { MemInfo } from "./MemInfo";
import { MemTiles } from "./MemTiles";
import { Content } from "../logic/content";

interface TGridProps {
  content: Content;
  onNewGame: () => void;
}

export const MemGrid = ({ onNewGame }: TGridProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <div>
      <MemInfo onNewGame={onNewGame} />
      <MemTiles />
    </div>
  );
};
