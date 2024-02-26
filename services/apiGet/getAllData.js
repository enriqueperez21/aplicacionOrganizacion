import axios from 'axios';

export const getAllDataUser = async (userEmail) =>{
  const url = 'https://test-expressjs.onrender.com/users/allData/byEmail/'+userEmail;

  const response = await axios.get(url);
  const data = response.data;
  return data
}