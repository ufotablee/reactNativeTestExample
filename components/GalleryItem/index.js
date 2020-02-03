import React,{useState} from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native'
import { FullPage } from '../../components'



const GalleryItem = (item) => {
const [visiable, setIsVisiable ] = useState(false)
return (
    <GroupItem onPress={() => setIsVisiable(!visiable)}>
        {visiable && <FullPage url={item.links.download} />}
        <GroupImg source={{ uri : `${item.links.download}`}}/>
        <Text>{item.user.first_name} {item.user.last_name}</Text>
    </GroupItem>
)
}
const GroupImg = styled.Image`
width: 150px;
height: 150px;
`;

const GroupItem = styled.TouchableOpacity`
align-items: center;
padding: 20px 0;

`;
export default GalleryItem
