import React, { Component } from 'react';
import modal from './img/modal.jpg'
import './Modal.css'

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <h1>Modal window</h1>
            {children}
            <button type="button" onClick={handleClose}>
                Close
            </button>
            <img alt="" src={modal} class="modal-img" />
        </div>
    );
};

export default Modal;