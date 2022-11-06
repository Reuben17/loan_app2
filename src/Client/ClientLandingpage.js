import React, { useState } from 'react';
import ClientForm from './ClientForm';
import ClientSuccess from './ClientSuccess';

const ClientLandingpage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
        {!isSubmitted ? (
          <ClientForm submitForm={submitForm} />
        ) : (
          <ClientSuccess/>
        )}
    </>
  )
}

export default ClientLandingpage