import React from 'react';
import styled from 'styled-components';
import styles from '../styles';

const { fonts, colors } = styles;

const TitleContainer = styled.div`
  margin-top: 5rem;
  width: 20rem;
  height: 7rem;
`;

const Text = styled.h1`
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
