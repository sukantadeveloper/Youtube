import axios from "axios";

const baseUrl="https://youtube138.p.rapidapi.com";
const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_YOUTUBE_API,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchData=async(url)=>{
    const {data}=await axios.get(`${baseUrl}/${url}`,options);
    

    return data;
}