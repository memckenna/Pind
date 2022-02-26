import React, { useState } from "react";
import EditAPinForm from "./EditAPin";
import { EditPinModal } from "../../../context/Modal";
import "./EditAPin.css"
import { useSelector } from "react-redux";


const EditAPinModal = ({ id, pin }) => {  //should be pinId (check to make sure)
    const [showModal, setShowModal] = useState(false);

    const sessionUser = useSelector(state => state.session.user)
    console.log("SESSIONUSER", sessionUser)
    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className="edit-pin-btn-container">
                {sessionUser?.id === pin?.user_id && (
                    <div className="edit-pin-btn-div">
                        <button className="edit-pin-btn" onClick={() => setShowModal(true)}>
                            <i
                            className="fas fa-ellipsis-h"
                            onClick={() => setShowModal(true)}
                            ></i>
                        </button>
                    </div>
                )}
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
