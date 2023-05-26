import React, { FC } from 'react';
import styled from 'styled-components';
import styles from '../styles';

const TitleContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 900px;
  align-items: center;
  justify-content: space-around;
`;

const { weight_bold } = styles.fonts;
const { pink, blue } = styles.colors;

const YearTitle = styled.h2<{ $secondary?: boolean }>`
  font-weight: ${weight_bold};
  font-size: 10rem;
  color: ${(props) => (props.$secondary ? `${pink}` : `${blue}`)};
`;

type DataTitlesProps = {
  years: string[];
};

const DataTitles: FC<DataTitlesProps> = ({ years }) => {
  const [firstYear, lastYear] = years;
  return (
    <TitleContainer>
      <YearTitle>{firstYear}</YearTitle>
      <YearTitle $secondary>{lastYear}</YearTitle>
    </TitleContainer>
  );
};

export default DataTitles;
