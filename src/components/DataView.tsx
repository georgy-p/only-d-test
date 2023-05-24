import React, { useState } from 'react';
import data4 from '../data/data4';
import styled from 'styled-components';
import styles from '../styles';

const DataView = () => {
  const [currentSlide, setNewSlide] = useState<number>(1);
  const data: {
    years: string[];
    events: { year: string; description: string }[];
  } = data4[currentSlide];

  const DataContainer = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const TitleContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 52%;
    justify-content: space-between;
  `;

  const { weight_bold } = styles.fonts;
  const { pink, blue } = styles.colors;

  const YearTitle = styled.h2<{ $secondary?: boolean }>`
    font-weight: ${weight_bold};
    font-size: 8rem;
    color: ${(props) => (props.$secondary ? `${pink}` : `${blue}`)};
  `;

  return (
    <DataContainer>
      <TitleContainer>
        <YearTitle>{data.years[0]}</YearTitle>
        <YearTitle $secondary>{data.years[1]}</YearTitle>
      </TitleContainer>
    </DataContainer>
  );
};

export default DataView;
