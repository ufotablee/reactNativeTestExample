import axios from 'axios'
const actions = { 
    setData: data => ({
        type: 'DATA:SET_DATA',
        payload: data
    })
    ,
    fetchData: (url) => dispatch => {
        axios.get(url)
        .then(({data})=> dispatch(actions.setData(data)))
    }
}
export default actions