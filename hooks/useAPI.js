import axios from "axios";
import useAsyncStorage from "./useAsyncStorage";
import base_url from "../utils/Baseurl";

const useAPI = async (reqInstance, endpoint, method, headers, body = null, params = null) => {
  const tokens = await useAsyncStorage('get', 'tokens');
  headers['Authorization'] = `Bearer ${tokens.access}`;  
  
  try {
    const response = await makeRequest(reqInstance, endpoint, method, headers, body, params);
    return { error: false, response };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const result = await expireToken(tokens.refresh);
      await useAsyncStorage('set', 'tokens', result);
      return useAPI(reqInstance, endpoint, method, headers, body, params);
    } else {
      return { error: true, errorMessage: error.message || 'Unknown error' };
    }
  }
};

const makeRequest = async (reqInstance, endpoint, method, headers, body, params) => {
  if (method === 'get') {
    return await reqInstance.get(`${base_url}${endpoint}`, { headers, params });
  } else if (method === 'post') {
    return await reqInstance.post(`${base_url}${endpoint}`, body, { headers });
  } else {
    throw new Error('Invalid HTTP method');
  }
};

const expireToken = async (refreshToken) => {
  const header = {
    'ngrok-skip-browser-warning': true,
  };

  try {
    const response = await axios.post(`${base_url}/auth/api/token/refresh/`, { refresh: refreshToken }, { headers: header });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default useAPI;