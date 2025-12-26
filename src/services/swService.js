import axios from 'axios';
import { baseUrl } from '../constants/baseUrl.js';


const getCharacters = async () => {
    try{
        const result = await axios.get(`${baseUrl}/people`)
        return result.data
    }
    catch(error){
        console.error('Error fetching the data of SW characters in swService:', error)
    }
}

export default {
    getCharacters
}
