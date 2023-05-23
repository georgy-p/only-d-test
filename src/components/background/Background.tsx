import React from 'react';
import styled from 'styled-components';
import styles from '../../styles/index';



const ContentContainer = styled.div`
  position: relative;
  width: 100%;
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
  opacity: 50%;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1px;
  background-color: ${styles.colors.grey};
  opacity: 50%;
`;

const Background = () => {
  return (
    <ContentContainer>
      <HorizontalLine />
      <VerticalLine />
    </ContentContainer>
  )
}

export default Background;