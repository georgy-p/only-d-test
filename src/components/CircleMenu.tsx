import React from 'react';
import styled from 'styled-components';
import styles from '../styles';

const CircleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const CircleStyled = styled.div`
  width: 450px;
  height: 450px;
  border: solid;
  border-radius: 50%;
  border-color: ${styles.colors.dark_grey};
`;

const CircleMenu = () => {
  return (
    <CircleContainer>
      <CircleStyled />
    </CircleContainer>
  );
};

export default CircleMenu;
