import axios from 'axios';

export const getAllDataUser = async (userEmail) =>{
  const url = 'http://192.168.100.12:3000/users/allData/byEmail/'+userEmail;

  const response = await axios.get(url);
  const data = response.data;
  return data
}