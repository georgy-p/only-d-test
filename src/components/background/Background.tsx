import React from 'react';
import styled from 'styled-components';
import styles from '../../styles/index';

const Border = styled.div`
  border: 0.5px solid;
  border-color: ${styles.colors.grey};
  height: 100%;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const HorizontalLine = styled.div`
  position: absolute;
  left: 0;
  top: 45%;
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

const Background = () => {
  return (
    <Border>
      <HorizontalLine />
      <VerticalLine />
    </Border>
  );
};

export default Background;
