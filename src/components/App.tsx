import React, { useState } from 'react';
import { MemGrid } from './MemGrid';
import { Content } from '../logic/content';
import { Header } from './Header';
import { Main } from './Main';
import './style.css';

interface AppProps {
  idx: number;
}

const App = ({ idx }: AppProps) => {
  const [nrGame, setNrGame] = useState<number>(0);
  let content: Content;

  const createContent = () => {
    let content = new Content(15);
    content.createTileContent();
    content.showContent();
    return content;
  };

  content = createContent();

  // let r = document.querySelector(':root');
  // let rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  // alert('The value of --tileWidth is: ' + rs.getPropertyValue('--tileWidth'));
  // https://www.w3schools.com/Css/tryit.asp?filename=trycss3_var_js
  // r?.style.setProperty('--bg-color960', 'red');

  return (
    <div className="container">
      <Header />
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
