import axios from "axios";
import base_url from "../utils/Baseurl";
import { useSelector,useDispatch } from "react-redux";
import { login,logout } from "../redux/LoginReducer";
import { useNavigation } from "@react-navigation/native";
const useAPI = () => {  
  const navigate = useNavigation()
  const dispatch  = useDispatch()
  const StoredTokens = useSelector(state => state.isLoggedIn.token)
  const CallAPI = async (tokens=StoredTokens,reqInstance, endpoint, method, headers, body = null, params = null) => {
    headers['Authorization'] = `Bearer ${tokens.access}`;
    try {
      const response = await makeRequest(reqInstance, endpoint, method, headers, body, params);
      return { error: false, response };
    } catch (error) {            
        if (error.response && error.response.status === 401) {
          const result = await expireToken(tokens.refresh);          
          if(result.access && result.refresh){

            dispatch(login(result))
            return CallAPI(result, reqInstance, endpoint, method, headers, body, params);
          }
          if(result.action == 'tokenExpired' && result.status === 401){
            dispatch(logout())
            navigate.replace("login")
            return { error: true, result };
          }
        } else {
          return { error: true, errorMessage: error.message || 'Unknown error' };
        }      
    }
  }
  return [StoredTokens,CallAPI]
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
    if(error.response.status === 401){       
      return {'action':'tokenExpired','status':error.response.status};
    }
  }
};

export default useAPI;