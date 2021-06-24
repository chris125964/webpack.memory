import './style.css';
import './modal.css';

import React, { useState } from 'react';
import { MemInfo } from './MemInfo';
import { MemTile } from './MemTile';
import { Content } from '../logic/content';
import { getView } from '../logic/view';
import { clickTile } from '../redux/sample/actionCreators';
import { useDispatch } from 'react-redux';

interface TGridProps {}

export const MemGrid = ({}: TGridProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const extensions = getView();

  // const clickTile = (index: number, nr: number) => {
  //   console.log(`clickTile`);
  // };

  const renderTile = (index: number) => {
    return (
      <MemTile
        key={index}
        nr={index}
        index={1}
        indexx={1}
        loop={index}
        click={clickTile}
        dispatch={dispatch}
      />
    );
  };

  let arr: number[] = [];
  let size = extensions.horizontal * extensions.vertical;
  for (let loop = 0; loop < size; loop += 1) {
    arr.push(loop);
  }

  const renderTiles = () => {
    return arr.map((ob, index) => renderTile(index));
  };

  return <div key={1}>{renderTiles()}</div>;
};
