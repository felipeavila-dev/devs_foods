import styled from 'styled-components';

export const Container = styled.div`
position: fixed;
left: 0;
right: 0;
bottom: 0;
top: 0;
background-color: rgba(0, 0, 0, .7);
z-index: 900;
justify-content: center;
align-items: center;
display: ${ props => props.status ? 'flex' : 'none' }
`;

export const ModalBody = styled.div`
  max-width: 90vw;
  max-height: 90vh;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 0px 30px black;
  overflow: auto;
`;