import React from 'react';
import HelloWorld from './HelloWorld';
import styled from 'styled-components';
import styles from './styles/index';
import Background from './components/background/Background';


const Wrapper = styled.section`
  margin: 0rem 7rem 0rem 14rem;
  height: 100vh;
  border: 0.5px solid;
  border-color: ${styles.colors.grey}
`;

const App = () => {
  return (
  <Wrapper>
    <Background />
  </Wrapper>
  )
};

export default App;
