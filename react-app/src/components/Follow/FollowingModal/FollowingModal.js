import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getBoardsByUser } from "../../../store/board";
import RenderFollowUser from "../RenderUser/RenderFollowUser";

import './FollowingModal.css';

const FollowingModal = ({ followers }) => {   //id = userId
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    console.log("USER", followers)

    useEffect(() => {
        const payload = {
            user_id: sessionUser?.id
        }
        dispatch(getBoardsByUser(payload))
    }, [dispatch, sessionUser])

    return (
        <>
            <div>
                <div>Following</div>
            </div>
            {followers?.map(user =>
                <div key={user.id}>
                    {console.log(user)}
                    <RenderFollowUser user={user} id={user.id}  />
                </div>
            )}

        </>
    )
}

export default FollowingModal;