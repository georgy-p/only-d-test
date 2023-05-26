import React from 'react';
import styled from 'styled-components';
import Background from './components/background/Background';
import Title from './components/Title';
import DataView from './components/DataView';

// Надо сделать, чтобы при изменении ширины экрана до мобилки добавлялся мобильный вид со своими компонениами
const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0;
  height: 100vh;

  @media (min-width: 1000px) {
    margin: 0 0 0 8%;
  }
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const App = () => {
  return (
    <Container>
      <Content>
        <Background />
        <Title />
        <DataView />
      </Content>
    </Container>
  );
};

export default App;
