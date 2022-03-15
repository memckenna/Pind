import React, { useState } from "react";
import { useSelector } from "react-redux";

import { EditAndDeleteCommentModal } from "../../context/Modal";
import EditCommentOnAPin from "./EditPinComment";

import './Comments.css';

const EditAndDeleteCommentOnAPin = ({comment}) => { //id = comment.id
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector(state => state.session.user);


    const onCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div>
                {sessionUser?.id === comment?.user_id && (
                    <div>
                        <button onClick={() => setShowModal(true)}>
                            <i
                                className="fas fa-ellipsis-h"
                                onClick={() => setShowModal(true)}
                            ></i>
                        </button>
                    </div>
                )}
                {showModal && (
                    <EditAndDeleteCommentModal onClose={() => setShowModal(false)}>
                        <EditCommentOnAPin id={comment.id} comment={comment} onClose={onCloseModal} />
                    </EditAndDeleteCommentModal >
                )}


            </div>

        </>
    )
}

export default EditAndDeleteCommentOnAPin;
