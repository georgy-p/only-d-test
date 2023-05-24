import React from 'react';
import styled from 'styled-components';
import Background from './components/background/Background';
import Title from './components/Title';
import DataView from './components/DataView';

// Надо сделать, чтобы при изменении ширины экрана до мобилки добавлялся мобильный вид со своими компонениами

const Container = styled.section`
  margin: 0rem 7rem 0rem 14rem;
  height: 100vh;
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
