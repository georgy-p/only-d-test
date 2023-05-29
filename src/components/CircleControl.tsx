import React from 'react';
import styled from 'styled-components';
import styles from '../styles';

const CircleContainer = styled.div`
  width: 450px;
  height: 450px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const CircleStyled = styled.div`
  z-index: 10;
  height: 100%;
  width: 101%;
  border: solid;
  border-radius: 50%;
  border-color: ${styles.colors.dark_grey};
`;

const CircleControl = () => {
  return (
    <CircleContainer>
      <CircleStyled />
    </CircleContainer>
  );
};

export default CircleControl;
