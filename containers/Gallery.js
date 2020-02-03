import React,{useEffect} from 'react';
import { Gallery as BaseGallery } from '../components'
import { dataActions } from '../redux/actions'
import { connect } from 'react-redux'


const Gallery = ({ fetchData,data }) => {
    useEffect( () => {
        fetchData('https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9')
      },[]);
    return (
        <BaseGallery 
        data={data}
        />
    )
}
export default connect(({data}) => {
   return data
},dataActions)(Gallery)