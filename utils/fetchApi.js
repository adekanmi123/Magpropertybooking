import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';





export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    
    headers: {
    'X-RapidAPI-Key': 'ed9bb30242msh56a90f3ceec0213p1bedbfjsnef43d068ee7e',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'

    },
  });
    
  return data;
}