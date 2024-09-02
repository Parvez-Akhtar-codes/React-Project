import axios from 'axios';

const fetchGetData = (url) =>{
    return axios.get(url)
    .catch(error => {
        console.error('Error fetching data from URL: ', url , 'Error' , error.message);
        throw error;
    });
};

export default fetchGetData;