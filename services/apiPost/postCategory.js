import axios from 'axios';


export const postCategory = async (data, userData) =>{
  const url = 'http://20.51.181.5/expenseCategory'
  const urlUser = 'http://20.51.181.5/users/update/'+userData.email

  const response = await axios.post(url, data);
  const newData = response.data;

  userData.expenseCategoryIds.push(newData._id)
  const userResponse = await axios.put(urlUser, userData);
  const newUserData = userResponse.data

  return newUserData
}