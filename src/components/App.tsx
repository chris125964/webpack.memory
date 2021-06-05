import React, { useState } from "react";
import { MemGrid } from "./MemGrid";
import { Content } from "../logic/content";

interface AppProps {
  idx: number;
}

const App = ({ idx }: AppProps) => {
  const [nrGame, setNrGame] = useState<number>(0);
  let content: Content;

  const createContent = () => {
    let content = new Content(15);
    content.createTileContent();
    return content;
  };

  content = createContent();

  let a = "";
  if (idx === 1) {
    a = "001";
  }

  const onNewGame = () => {
    setNrGame(nrGame + 1);
  };

  return (
    <div>
      <MemGrid content={content} onNewGame={onNewGame} />
    </div>
  );
};

export default App;
