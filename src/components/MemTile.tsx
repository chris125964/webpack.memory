import React from 'react';
import './style.css';
import { MemoryAction } from '../redux/memory/type';
import { TileState } from '../enums/TileState';
import { RootState } from '../redux/sample/reducer';
import { useSelector } from 'react-redux';
import { TileContent } from './TileContent';

const closed = 'closed';
const open = 'open';
const solved = 'solved';
interface MemTileProps {
  loop: number;
  nr: number;
  index: number;
  indexx: number;
  click: (
    index: number,
    nr: number,
    disp: (action: MemoryAction) => void,
  ) => void;
  dispatch: (action: MemoryAction) => void;
}

export const MemTile = (
  //   {
  //   loop,
  //   nr: imageIndex,
  //   index,
  //   indexx,
  //   click,
  //   dispatch,
  // }
  props: MemTileProps,
) => {
  function getTileState(index: number): TileState {
    const tiles = useSelector((state: RootState) => state.tiles);
    return tiles[index];
  }
  let tileCharacter = getTileState(props.loop);

  const changeColor =
    (loop: number, nr: number, dispatch: (action: MemoryAction) => void) =>
    () => {
      props.click(loop, nr, dispatch);
    };
  // const clickFunc = changeColor(loop, nr, dispatch);

  const renderButton = (tileState: TileState) => {
    const testid = `button.${props.indexx}.${props.index}`;
    let style: string = closed;
    let clickFunc = undefined;
    let buttonContent;
    switch (tileState) {
      case TileState.OPEN:
        style = open;
        clickFunc = changeColor(props.loop, props.nr, props.dispatch);
        buttonContent = <TileContent imageIndex={`${props.nr}`} />;
        break;
      case TileState.CLOSED:
        style = closed;
        clickFunc = changeColor(props.loop, props.nr, props.dispatch);
        buttonContent = <>imageIndex({props.nr})</>;
        break;
      case TileState.SOLVED:
        style = solved;
        break;
      default:
        break;
    }
    return (
      <button
        key={props.index}
        className={`memtile ${style}`}
        onClick={clickFunc}
      >
        Tile ({style})<p>(indexx: {props.indexx})</p>
        <p>(index: {props.index})</p>
      </button>
    );
  };

  return renderButton(tileCharacter);
};
