import React from 'react';
import styled from 'styled-components/native'
import { Gallery } from './containers' 
import { Provider } from 'react-redux'
import store from "./redux/store"

const App = () => {
  return (
    <Provider store={store}>
      <Container>
      <Gallery />
      </Container>
    </Provider>
  );
}
const Container = styled.View`
 flex:1;
 width: 80%;
 margin: 0 auto;
 margin-top: 40px;
 `;
export default App