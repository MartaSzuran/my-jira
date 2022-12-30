import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

export const getData = async () => {
    try {
      return await axios.get(`${REACT_APP_API_URL}/tasks/`);
    } catch (error) {
      console.error('error');
    };
  };

export const postData = async (data) => {
    try {
        return await axios.post(`${REACT_APP_API_URL}/tasks/addNew`, {task: data});
    } catch (error) {
        console.error('error');
    };
} ;