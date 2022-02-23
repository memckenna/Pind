import React from "react";
import CreateAPinModal from "../Pin/CreatePin";

import "./Footer.css"

const CreatePinFooter = () => {


    return (
        <div className="create-pin-btn-container">
            <CreateAPinModal />
            {/* <div className="create-pin-btn-div">
                <button className="create-pin-btn">
                    <i
                    className="fas fa-plus"
                    onClick={() => setShowModal(true)}
                    ></i>
                </button>
            </div> */}
        </div>
    )
}

export default CreatePinFooter;
