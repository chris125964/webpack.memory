import './style.css';
import './modal.css';

import React, { useState } from 'react';
import { MemInfo } from './MemInfo';
import { MemTile } from './MemTile';
import { Content } from '../logic/content';
import { getView } from '../logic/view';
import { clickTile } from '../redux/memory/actionCreators';
import { useDispatch } from 'react-redux';

interface TGridProps {
  content: Content;
}

export const MemGrid = (props: TGridProps) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const extensions = getView();

  const renderTile = (index: number) => {
    const tile = props?.content?.getTile(index);
    return (
      <MemTile
        loop={index}
        key={index}
        nr={tile?.nr ?? 0}
        index={tile?.index ?? 0}
        indexx={tile?.indexx ?? 0}
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
