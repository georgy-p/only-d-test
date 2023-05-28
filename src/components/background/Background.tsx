import React from 'react';
import styled from 'styled-components';
import styles from '../../styles/index';

const { grey, blue, pink } = styles.colors;

const Border = styled.div`
  border: 0.5px solid;
  border-color: ${grey};
  height: 100%;
  position: relative;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const HorizontalLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 45%;
  height: 1px;
  background-color: ${grey};
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 1px;
  background-color: ${grey};
`;

const GradientLine = styled.div`
  position: absolute;
  top: 5rem;
  bottom: 0;
  transform: translateX(-50%);
  height: 7rem;
  width: 5px;
  background: linear-gradient(${blue}, ${pink});
`;

const Background = () => {
  return (
    <Border>
      <GradientLine />
      <HorizontalLine />
      <VerticalLine />
    </Border>
  );
};

export default Background;
