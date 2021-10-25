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

  return (
    <div data-testid="modal.xxx" className={showHideClassName}>
      <button
        className="butt"
        data-testid="modal.close-button"
        onClick={onCloseWindow}
      >
        <img className={img} src="./assets/images/1860-final-001.jpg" />
      </button>
    </div>
  );
};
