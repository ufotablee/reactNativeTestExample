import React from 'react';
import styled from 'styled-components/native'
import { GalleryItem } from '../../components'

const GroupList = ({data}) => {
  return (
      <Group>
        <GroupTitle>
          Gallery
        </GroupTitle>
        <GroupRow>
        {data && data.map((item,index) => {
          return (
          <GalleryItem {...item} key={index}
          />
          )
        })}
        </GroupRow>
      </Group>
  );
}



const GroupRow = styled.View`
display: flex
flex-direction: row
flex-wrap: wrap
justify-content: space-around`;

const GroupTitle = styled.Text`
font-weight: 800;
font-size: 22px;
color: #000000;
`;
const Group = styled.View`
`;
export default GroupList