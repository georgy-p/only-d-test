import React, { useState } from 'react';
import data4 from '../data/data4';
import styled from 'styled-components';
import CircleControl from './CircleControl';
import DataTitles from './DataTitles';
import Buttons from './Buttons';

const DataContainer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DataView = () => {
  const [currentSlide, setNewSlide] = useState<number>(3);
  const data: {
    years: string[];
    events: { year: string; description: string }[];
  } = data4[currentSlide];

  return (
    <DataContainer>
      <DataTitles years={data.years} />
      <CircleControl />
      <Buttons />
    </DataContainer>
  );
};

export default DataView;
