import AsyncStorage from '@react-native-async-storage/async-storage';

const useAsyncStorage = async (type, key = null, value = null) => {
  try {
    if (type === 'get' && key) {
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    } else if (type === 'set' && key && value) {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      return true;
    } else if(type === 'delete' && key){
      await AsyncStorage.removeItem(key);
      return true;
    }
    else {
      console.error('Invalid parameters for useAsyncStorage');
      return null;
    }
  } catch (error) {
    console.error('AsyncStorage operation failed:', error);
    return null;
  }
};

export default useAsyncStorage;