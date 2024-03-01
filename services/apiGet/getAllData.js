import axios from 'axios';

export const getAllDataUser = async (userEmail) =>{
  const url = 'http://20.51.181.5/users/allData/byEmail/'+userEmail;

  const response = await axios.get(url);
  const data = response.data;
  return data
}