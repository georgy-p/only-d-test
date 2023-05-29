import React from 'react';
import styled from 'styled-components';
import Background from './components/background/Background';
import Slider from './components/Slider';
import CommonTitle from './components/CommonTitle';
import styles from './styles';
import CircleMenu from './components/CircleMenu';
import DataTitles from './components/DataTitles';

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
  position: relative;
  width: 100%;
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;
`;

const MobileLine = styled.div`
  position: absolute;
  top: 50%;
  border-bottom: solid ${styles.colors.grey};
  width: 90%;

  @media (min-width: 1000px) {
    display: none;
  }
`;

const App = () => {
  return (
    <Container>
      <InnerContainer>
        <Background />
        <CircleMenu />
        <Content>
          <MobileLine />
          <Slider />
        </Content>
      </InnerContainer>
    </Container>
  );
};

export default App;
