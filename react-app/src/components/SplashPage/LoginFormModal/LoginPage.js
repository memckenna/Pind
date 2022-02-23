import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '../../../context/Modal';
import LoginForm from '../../auth/LoginForm';
import { login } from '../../../store/session';
import '../../NavBar/NavBar.css';

function LoginFormModal() {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);

    const handleDemoLogin = () => {
        const email = 'demo@aa.io'
        const password = 'password'
        dispatch(login(email, password));
    }

    return (
        <>
            <button className='login' id='log-in-nav-button' onClick={() => setShowModal(true)}>Log In</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}
            <button className='demo-button' onClick={handleDemoLogin}>DEMO</button>
        </>
    )
}

export default LoginFormModal;
