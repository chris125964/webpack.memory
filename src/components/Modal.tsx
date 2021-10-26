import React, { useState } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

export const Modal = ({ show, onClose }: ModalProps) => {
  let showHideClassName = 'modal display-' + (show ? 'block' : 'none');

  const onCloseWindow = () => {
    onClose();
  };

  const img = 'landscape';

  /**
   * returns a random number between 0 and _max_
   *
   * @param {number} max
   * @return {*}
   */
  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const finalNumber = '00' + getRandomInt(5).toString().slice(0);
  console.log(`finalNumber: ${finalNumber}`);

  return (
    <div data-testid="modal.xxx" className={showHideClassName}>
      <button
        className="butt"
        data-testid="modal.close-button"
        onClick={onCloseWindow}
      >
        <img
          className={img}
          src={`./assets/images/1860-final-${finalNumber}.jpg`}
        />
      </button>
    </div>
  );
};
