import React from 'react';
import styled from 'styled-components';
import styles from '../../styles/index';

const Border = styled.div`
  border: 0.5px solid;
  border-color: ${styles.colors.grey};
  height: 100%;
`;

const HorizontalLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 1px;
  background-color: ${styles.colors.grey};
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  background-color: ${styles.colors.grey};
`;

const CircleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleStyled = styled.div`
  z-index: 10;
  height: 25rem;
  width: 25rem;
  border: solid;
  border-radius: 50%;
  border-color: ${styles.colors.dark_grey};
  text-align: center;
`;

const Background = () => {
  return (
    <Border>
      <HorizontalLine />
      <VerticalLine />
      <CircleContainer>
        <CircleStyled />
      </CircleContainer>
    </Border>
  );
};

export default Background;
