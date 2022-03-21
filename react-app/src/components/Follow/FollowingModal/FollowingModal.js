import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getBoardsByUser } from "../../../store/board";
import RenderFollowUser from "../RenderUser/RenderFollowUser";

import './FollowingModal.css';

const FollowingModal = ({ following, onClose, user }) => {   //id = userId
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    // console.log("USER FOLLOWING", following)
    // console.log("USER IN FOLLOWING", user)
    useEffect(() => {
        const payload = {
            user_id: sessionUser?.id
        }
        // dispatch(getBoardsByUser(sessionUser?.id))
    }, [dispatch, sessionUser, user])

    return (
        <>
            <div className="following-header">
                <div className="following-header-sec">
                    <div className="following-title-section">
                        <div className="following-count">
                            {user?.id === sessionUser?.id ?
                                sessionUser?.following.length :
                                user.following?.length
                            }
                            {/* {following?.length} */}
                        </div>
                        <div className="following-title">Following</div>
                    </div>
                    <div className="exit-following-modal">
                        <div onClick={onClose} className="exit-modal-div">
                            <i className="fas fa-times"></i>
                        </div>
                    </div>

                </div>
            </div>
            {console.log("FOLLOWING MODAL", sessionUser?.following)}
            {sessionUser?.id === user?.id &&
                sessionUser?.following?.map(user =>
                    <div key={user.id}>
                        {/* {console.log("RENDER USER", user)} */}
                        <RenderFollowUser sessionUser={sessionUser} user={user} id={user?.id}  />
                    </div>

            )}

        </>
    )
}

export default FollowingModal;
