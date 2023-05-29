import React from 'react';
import styled from 'styled-components';
import Background from './components/background/Background';
import Slider from './components/Slider';
import CommonTitle from './components/CommonTitle';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0;
  height: 100vh;

  @media (min-width: 1300px) {
    margin: 0 0 0 15%;
  }
`;

const InnerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 5%;
`;

const App = () => {
  return (
    <Container>
      <InnerContainer>
        <Background />
        <Content>
          <CommonTitle />
          <Slider />
        </Content>
      </InnerContainer>
    </Container>
  );
};

export default App;
