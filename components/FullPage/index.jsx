import React from 'react';
import { Modal,Button,Text } from 'react-native';
import styled from 'styled-components/native'

const FullPage = ({url,setIsVisiable,visiable}) => {
  return (
     <Container>
       <Modal
     animationType="slide"
     transparent={false}
     >
     <GroupImg source={{uri: url}} /> 
     <CustomButton 
      ><ButtonText onPress={() => setIsVisiable(!visiable)}>Back</ButtonText>
      </CustomButton>
     </Modal>
    </Container>
  );
}
const ButtonText = styled.Text`
top: 25%;
font-weight: bold;
font-size: 20px;
text-align: center
color: #fff`;
const CustomButton = styled.View`
background: #00a0fc;
position:absolute;
bottom:0;
width:100%;
height: 50px`;
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




