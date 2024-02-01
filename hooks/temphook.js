import axios from "axios";
import { base_url } from "@/base_url";
import { useSelector,useDispatch } from "react-redux";
import { set_Token } from "@/action";
import { useNavigate } from "react-router-dom";

const useAPI = () => {  
  const navigate = useNavigate()
  const dispatch  = useDispatch()
  const StoredTokens = useSelector((state) => state.userTokenAccess.Token)
  const CallAPI = async (tokens=StoredTokens,reqInstance, endpoint, method, headers, body = null, params = null) => {
    headers['Authorization'] = `Bearer ${tokens.accessToken}`;
    try {
      const response = await makeRequest(reqInstance, endpoint, method, headers, body, params);
      return { error: false, response };
    } catch (error) {            
        if (error.response && error.response.status === 401) {
          const result = await expireToken(tokens.refreshToken);          
          if(result.access && result.refresh){
            const token_data = {
              "accessToken" : result.access,
              "refreshToken": result.refresh
            }
            localStorage.setItem('accessToken',result.access)
            localStorage.setItem('refreshToken',result.refresh)
            dispatch(set_Token(token_data))
            return CallAPI(token_data, reqInstance, endpoint, method, headers, body, params);
          }
          if(result.action == 'tokenExpired' && result.status === 401){
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            navigate('/auth/sign-in/')
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