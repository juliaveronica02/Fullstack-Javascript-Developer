import axios from 'axios'


export const apiGetEvent = (token) => {
    console.log('token nya ',token)
    let headers = {
        'Authorization': token
    }
    return  axios.get('http://ec2-3-0-98-199.ap-southeast-1.compute.amazonaws.com:3000/events/all', {headers: headers})
    .then(function(res){
        return res.data.results
    })
    
}