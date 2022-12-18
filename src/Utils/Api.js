import axios from "axios";

const baseUrl="https://youtube138.p.rapidapi.com";
const options = {
    params: { hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key':"a0d7ebb156mshd6f97f6417cd652p1e7c03jsnd95f19362e47",
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchData=async(url)=>{
    const {data}=await axios.get(`${baseUrl}/${url}`,options);
    

    return data;
}