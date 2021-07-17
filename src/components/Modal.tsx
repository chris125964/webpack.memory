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

  return (
    <div data-testid="modal.xxx" className={showHideClassName}>
      <img className="image" src="./assets/images/1860-final-001.jpg" />
      <button data-testid="modal.close-button" onClick={onCloseWindow}>
        Close
      </button>
    </div>
  );
};
