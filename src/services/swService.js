import axios from 'axios';

const baseUrl = `https://swapi.dev/api`


const getCharacters = async (pageNumber) => {

    try{
        const result = await axios.get(`${baseUrl}/people`, 
            {params: {page: pageNumber}}
        )
        return result.data
    }
    catch(error){
        console.error('Error fetching the data of characters')
    }
}

export default {
    getCharacters
}
