import axios from "axios";


const baseUrl="https://youtube138.p.rapidapi.com";
const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':"882d7b3713mshb4615de76ea4a08p132b75jsn1929041d5443",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


export const fetchData=async(url)=>{
    const {data}=await axios.get(`${baseUrl}/${url}`,options);
    return data;
}