import React from 'react';
import styled from 'styled-components';
import styles from '../styles';

const { fonts, colors } = styles;

const TitleContainer = styled.div`
  position: absolute;
  top: 5rem;
  width: 30rem;
  height: 7rem;
`;

const Text = styled.h1`
  margin-top: 0;
  margin-left: 5rem;
  font-size: 3rem;
  color: ${colors.dark_blue};
  font-weight: ${fonts.weight_bold};
`;

const CommonTitle = () => {
  return (
    <TitleContainer>
      <Text>Исторические даты</Text>
    </TitleContainer>
  );
};

export default CommonTitle;
