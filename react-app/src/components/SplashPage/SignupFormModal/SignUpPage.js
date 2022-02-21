import React, { useState } from 'react';
import { SignUpModal } from '../../../context/Modal';
import SignUpForm from '../../auth/SignUpForm';


function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='signup' onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <SignUpModal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </SignUpModal>
      )}
    </>
  );
}

export default SignUpFormModal;
