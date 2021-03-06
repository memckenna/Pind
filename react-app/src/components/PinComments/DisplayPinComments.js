import React, { useState, useEffect, useDebugValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import { getASinglePin } from '../../store/pin';
import EditCommentOnAPin from './EditPinComment';
import EditAndDeleteCommentOnAPin from './EditAndDeleteComment';
import './Comments.css'

const DisplayAllPinComments = ({ pinId, comments }) => {


    return (
        <div className='all-comments-container'>
            {comments?.map((comment) => (
                <div key={comment.id}>
                    <div className='comment-holder' key={comment.id}>
                        <NavLink to={`/users/${comment?.user?.id}`}>
                            <img className='comment-profile-img' src={comment?.user?.profile_img_url} />
                        </NavLink>
                        <div className='comment-info'>
                            <NavLink className="comment-username" to={`/users/${comment?.user?.id}`}>
                                {comment?.user?.username}
                            </NavLink>
                            <p className='comment-content'>{comment?.content}</p>
                        </div>
                    </div>
                    <div>
                        <EditAndDeleteCommentOnAPin comment={comment} />
                    </div>

                </div>

            ))}


        </div>
    )
}

export default DisplayAllPinComments;
