import React from 'react';

import { Container, ModalBody } from './styled';

export default ({ children, status, setStatus }) => {
  const handleModalClick = (event) => {
    if(event.target.classList.contains('modalBg'))
    setStatus(false);
  }

  return(
    <Container 
      status={ status } 
      onClick={ handleModalClick }
      className="modalBg"
    >
      <ModalBody>
        { children }
      </ModalBody>
    </Container>
  );
}