import axios from 'axios';

const { REACT_APP_API_URL } = process.env;

export const getData = async (params) => {
    try {
      return await axios.get(`${REACT_APP_API_URL}${params}`);
    } catch (error) {
      console.error('error');
    };
  };

export const postData = async (params, data) => {
    try {
        return await axios.post(`${REACT_APP_API_URL}${params}`, {task: data});
    } catch (error) {
        console.error('error');
    };
  };

export const patchData = async (params, data) => {
    try {
        return await axios.patch(`${REACT_APP_API_URL}${params}`, {task: data});
    } catch (error) {
        console.error('error');
    };
  };