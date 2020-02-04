import React from 'react';
import styled from 'styled-components/native'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { Gallery } from './containers' 
import { Provider } from 'react-redux'
import store from "./redux/store"
import Constants from 'expo-constants';
const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView >
      <ScrollView  >
      <Container>
      <Gallery />
      </Container>
      </ScrollView>
    </SafeAreaView>
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