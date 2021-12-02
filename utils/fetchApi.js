import axios from 'axios'


export const baseUrl="https://bayut.p.rapidapi.com"

export const fetchApi=async (url)=>{
    const {data} = await axios.get((url),{
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '936c5be57emsh1580dc413ec8466p162392jsn4e301256f3be'
          }
    })
    return data;
}