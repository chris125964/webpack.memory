import React from 'react';
import { getView, TMemView } from '../logic/view';

interface HeaderProps {
  extensions: TMemView;
}

export const Header = (props: HeaderProps): JSX.Element => {
  return (
    <header className="header">
      <div className="headerElem">
        size: {props.extensions.horizontal}x{props.extensions.vertical}
      </div>
      <div className="headerElem">length: {props.extensions.length}</div>
      <div className="headerElem">
        header Height: {props.extensions.header.height}
      </div>
      <div className="headerElem">
        w x h: {window.innerWidth} x {window.innerHeight}
      </div>
      <div className="headerElem">{props.extensions.device}</div>
    </header>
  );
};
