import React,{useState} from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native'
import { FullPage } from '../../components'



const GalleryItem = (item) => {
const [visiable, setIsVisiable ] = useState(false)
return (
    <GroupItem onPress={() => setIsVisiable(!visiable)}>
        <GroupImg source={{ uri : `${item.links.download}`}} />
        {visiable && 
        <FullPage url={item.links.download} visiable={visiable} setIsVisiable={setIsVisiable}/>
        }
        <GroupText>{item.user.first_name} {item.user.last_name}</GroupText>
    </GroupItem>
)
}
const GroupImg = styled.Image`
width: 150px;
height: 150px;
`;
const GroupText = styled.Text`
color: #00a0fc
font-size: 15px`;
const GroupItem = styled.TouchableOpacity`
align-items: center;
padding: 20px 0;

`;
export default GalleryItem
