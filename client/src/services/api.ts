import axios from 'axios';
import { CancelTokenSource } from 'axios';
import { CitySearch } from '../interfaces/citySearch';
const SERVER_URL = process.env.REACT_APP_SERVER_URL as string;
let cancelToken;

export const citySearch = async (input: string): Promise<CitySearch[] | undefined> => {
  if (input) {
    try {
      cancelToken = axios.CancelToken.source();
      cancel(cancelToken);
      const citySearch: CitySearch[] = await axios.get(`${SERVER_URL}/hotel/search?keyword=${input}`, {
        cancelToken: cancelToken.token
      });
      return citySearch;
    } catch (error) {
      throw error;
    }
  }
};

const cancel = (cancelToken: CancelTokenSource) => {
    if (cancelToken) cancelToken.cancel('Operation canceled due to new request.');
};
