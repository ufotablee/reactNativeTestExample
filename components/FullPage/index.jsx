import React from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native'

const FullPage = ({url}) => {
  
  return (
     <Container>
       <Modal
     animationType="slide"
     transparent={false}
     >
     <GroupImg source={{uri: url}} /> 
     </Modal>
    </Container>
  );
}
const GroupImg = styled.Image`
margin: 0 auto;
top: 25%;
width: 350px;
height: 350px;
`;
const Container = styled.View`
 flex:1;
 width: 80%;
 margin: 0 auto;
 `;

export default FullPage




