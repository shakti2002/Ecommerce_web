import React from 'react';
import './Modal.css';

const Modal = ({ show, handleClose, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <div className="modal-content">
                <button className="close-button" onClick={handleClose}>×</button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
