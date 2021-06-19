import React from 'react';
import { getView } from '../logic/view';

export const Header = (): JSX.Element => {
  let extensions = getView();

  return (
    <header className="header">
      <div className="headerElem">
        size: {extensions.horizontal}x{extensions.vertical}
      </div>
      <div className="headerElem">length: {extensions.length}</div>
      <div className="headerElem">
        header Height: {extensions.header.height}
      </div>
      <div className="headerElem">
        w x h: {window.innerWidth} x {window.innerHeight}
      </div>
      <div className="headerElem">{extensions.device}</div>
    </header>
  );
};
