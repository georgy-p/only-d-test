import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  width: 120px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Circle = styled.button`
  border: solid;
  border-radius: 50%;
  border-color: #42567a;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Arrow = styled.p`
  pointer-events: none;
`;

const Buttons = () => {
  return (
    <ButtonsContainer>
      <Circle>
        <Arrow>{'<'}</Arrow>
      </Circle>
      <Circle>
        <Arrow>{'>'}</Arrow>
      </Circle>
    </ButtonsContainer>
  );
};

export default Buttons;
