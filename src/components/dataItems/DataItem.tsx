import React, { FC } from 'react';
import styled from 'styled-components';
import styles from '../../styles';

const DataItemContainer = styled.div`
  height: 10rem;
  widht: 30rem;
`;

const { extra, weight_regular } = styles.fonts;
const { dark_blue, blue } = styles.colors;

const Title = styled.h3`
  font-family: ${extra};
  color: ${blue};
  font-weight: ${weight_regular};
  font-size: 1.4rem;
`;

const Text = styled.p`
  color: ${dark_blue};
  font-weight: ${weight_regular};
  font-size: 1.2rem;
`;

type DataItemProps = {
  event: {
    year: string;
    description: string;
  };
};

const DataItem: FC<DataItemProps> = ({ event }) => {
  return (
    <DataItemContainer>
      <Title>{event.year}</Title>
      <Text>{event.description}</Text>
    </DataItemContainer>
  );
};

export default DataItem;
