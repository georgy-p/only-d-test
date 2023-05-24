import React from 'react';
import styled from 'styled-components';
import styles from '../styles';

const { pink, blue, dark_blue } = styles.colors;
const { weight_bold } = styles.fonts;

const TitleContainer = styled.div`
  position: absolute;
  top: 8rem;
  width: 30rem;
  height: 7rem;
`;

const VerticalLine = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  transform: translateX(-50%);
  width: 5px;
  background: linear-gradient(${blue}, ${pink});
`;

const Text = styled.h1`
  margin-top: 0;
  margin-left: 5rem;
  font-size: 3rem;
  color: ${dark_blue};
  font-weight: ${weight_bold};
`;

const Title = () => {
  return (
    <TitleContainer>
      <VerticalLine />
      <Text>Исторические даты</Text>
    </TitleContainer>
  );
};

export default Title;
