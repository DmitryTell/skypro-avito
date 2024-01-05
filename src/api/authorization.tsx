import axios from 'axios';


export const registerUser = async (
  email: string,
  password: string,
  phone: string,
  name: string,
  surname: string,
  city: string,
) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}auth/register/`, {
      email, password, phone, name, surname, city
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response && error.response.status === 400) {
        throw new Error('такой пользователь уже зарегестрирован');
      } else if (error.response) {
        throw new Error(error.response.statusText);
      } else if (error.request) {
        throw new Error('нет ответа от сервера');
      } else {
        throw new Error(error.message);
      }
    } else {
      throw error;
    }
  }
};
