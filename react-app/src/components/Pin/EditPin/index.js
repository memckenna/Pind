import React, { useState } from "react";
import EditAPinForm from "./EditAPin";
import { EditPinModal } from "../../../context/Modal";
import "./EditAPin.css"


const EditAPinModal = () => {
    const [showModal, setShowModal] = useState(false);
    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="edit-pin-btn-container">
                <div className="edit-pin-btn-div">
                    <button className="edit-pin-btn" onClick={() => setShowModal(true)}>
                        <i
                        className="fas fa-ellipsis-h"
                        onClick={() => setShowModal(true)}
                        ></i>
                    </button>
                </div>
                {showModal && (
                    <EditPinModal onClose={() => setShowModal(false)}>
                        <EditAPinForm onClose={onCloseModal} />
                    </EditPinModal>
                )}
            </div>

        </>
    )
}
 export default EditAPinModal;
