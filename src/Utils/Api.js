import axios from "axios";


const baseUrl="https://youtube138.p.rapidapi.com";
const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':"8e737036dbmshad54fc878379508p1b8c45jsn5b2ba46a47ff",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};


export const fetchData=async(url)=>{
    const {data}=await axios.get(`${baseUrl}/${url}`,options);
    return data;
}