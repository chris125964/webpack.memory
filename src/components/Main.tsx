import React, { useState } from 'react';
import { Content } from '../logic/content';
import { MemGrid } from './MemGrid';
import { finishGame } from '../redux/memory/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from './Modal';
import { RootState } from '../redux/memory/reducer';

interface MainProps {
  content: Content;
}

export const Main = (props: MainProps): JSX.Element => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useDispatch();
  const finished = useSelector((state: RootState) => state.finished);
  const newGame = useSelector((state: RootState) => state.newGame);

  const closeModal = () => {
    setShowModal(false);
    finishGame(dispatch);
  };

  return (
    <main className="main">
      <Modal show={finished && !newGame} onClose={closeModal}></Modal>
      <MemGrid content={props.content} />
    </main>
  );
};
