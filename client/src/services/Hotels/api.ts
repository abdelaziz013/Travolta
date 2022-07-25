import axios from 'axios';
import { CancelTokenSource } from 'axios';
import { SuggestedCities } from '../../interfaces/HotelSearch';
const SERVER_URL = process.env.REACT_APP_SERVER_URL as string;
let cancelToken: CancelTokenSource;
export const citySearch = async (
  input: string
): Promise<
  | {
      data: SuggestedCities[];
      cancelToken: CancelTokenSource;
    }
  | undefined
> => {
  cancel(cancelToken);

  if (input) {
    try {
      cancelToken = axios.CancelToken.source();
      const { data } = await axios.get(`${SERVER_URL}/hotel/search?keyword=${input}`, {
        cancelToken: cancelToken.token
      });
      return { data, cancelToken };
    } catch (error) {
      console.log('api', error);
      throw error;
    }
  }
};
const cancel = (cancelToken: CancelTokenSource) => {
  if (cancelToken) cancelToken.cancel('Operation canceled due to new request.');
};
