import React, { useState } from 'react';
import data6 from '../appData/data6';
import styled from 'styled-components';
import CircleControl from './CircleControl';
import DataTitles from './DataTitles';
import Buttons from './Buttons';
import DataItems from './dataItems/DataItems';

const SliderContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Slider = () => {
  const [currentSlide, setNewSlide] = useState<number>(6);
  const currentData: {
    years: string[];
    events: { year: string; description: string }[];
  } = data6[currentSlide];

  return (
    <SliderContainer>
      <DataTitles years={currentData.years} />
      <CircleControl />
      <Buttons />
      <DataItems events={currentData.events} />
    </SliderContainer>
  );
};

export default Slider;
