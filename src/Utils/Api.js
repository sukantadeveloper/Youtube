import axios from "axios";

const baseUrl = "https://youtube138.p.rapidapi.com";
const options = {
  params: { hl: "en", gl: "US" },
  headers: {
    "X-RapidAPI-Key": "2e3af27c8bmshb42a6817dbdd5b3p144c08jsn815c656a24ac",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options);

  return data;
};
