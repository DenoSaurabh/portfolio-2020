import styled from 'styled-components';

export const Cursor = styled.div`
  position: fixed;
  top: 400px;
  left: 400px;

  width: 32px;
  height: 32px;

  background: #343333;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: translate(-50%, -50%);

  transition: all 0.1s ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;

  pointer-events: none;
  z-index: 999;
  
  &::before {
      width: 48px;
      height: 48px;
      
      border: 2px solid #555;
      border-radius: 50%;
  }
`;
