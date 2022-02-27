import React, { useState } from "react";
import { CreatePinModal } from "../../../context/Modal";
import CreateAPin from "./CreatePin";
import './CreatePin.css';

import '../../Footer/Footer.css'

const CreateAPinModal = () => {
    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="create-pin-btn-container">
                <div className="create-pin-btn-div">
                    <button className="create-pin-btn">
                        <i
                        className="fas fa-plus"
                        onClick={() => setShowModal(true)}
                        ></i>
                    </button>
                </div>
                {/* <button onClick={() => setShowModal(true)}> */}
                {/* Create post */}
                {/* </button> */}
                {showModal && (
                    <CreatePinModal onClose={() => setShowModal(false)}>
                        <CreateAPin onClose={onCloseModal} />
                    </CreatePinModal>
                )}
            </div>
        </>
    )
}

export default CreateAPinModal;
