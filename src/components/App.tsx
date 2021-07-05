import React, { useEffect, useState } from 'react';
import { MemGrid } from './MemGrid';
import { Content } from '../logic/content';
import { Header } from './Header';
import { Main } from './Main';
import './style.css';
import { getView } from '../logic/view';
import { newGame } from '../redux/memory/actionCreators';
import { useDispatch } from 'react-redux';

interface AppProps {
  idx: number;
}

const App = ({ idx }: AppProps) => {
  const [nrGame, setNrGame] = useState<number>(0);
  const dispatch = useDispatch();
  let content: Content;

  let extensions = getView();
  let nrTiles = extensions.horizontal * extensions.vertical;

  useEffect(() => {
    console.log(`this is done only once`);
    newGame(nrTiles, dispatch);
  });

  const onNewGame = () => {
    setNrGame(nrGame + 1);
  };

  const createContent = (nrTiles: number) => {
    console.log(`nr tiles: ${nrTiles}`);
    let content = new Content(nrTiles);
    content.createTileContent();
    // content.showContent();
    return content;
  };

  content = createContent(nrTiles);

  // let r = document.querySelector(':root');
  // let rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  // alert('The value of --tileWidth is: ' + rs.getPropertyValue('--tileWidth'));
  // https://www.w3schools.com/Css/tryit.asp?filename=trycss3_var_js
  // r?.style.setProperty('--bg-color960', 'red');

  return (
    <div className="container">
      <Header extensions={extensions} onNewGame={onNewGame} nrTiles={nrTiles} />
      <div className="content">
        <Main content={content} />
        {/* <aside className="left-sidebar">LEFT SIDEBAR</aside> */}
        {/* <aside className="right-sidebar">RIGHT SIDEBAR</aside> */}
      </div>
      {/* <footer>FOOTER</footer> */}
    </div>
    // <div>
    //   <MemGrid content={content} onNewGame={onNewGame} />
    // </div>
  );
};

export default App;
