import React, { FC } from 'react';
import DataItem from './DataItem';

import styled from 'styled-components';

type DataItemsProps = {
  events: { year: string; description: string }[];
};

const DataItemsContainer = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  margin-left: 10rem;
  overflow-x: auto;
`;

const DataItems: FC<DataItemsProps> = ({ events }) => {
  return (
    <DataItemsContainer>
      {events.map((event) => (
        <DataItem key={event.year} event={event} />
      ))}
    </DataItemsContainer>
  );
};

export default DataItems;
