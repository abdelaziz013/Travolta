import { createAsyncThunk,createAction } from '@reduxjs/toolkit';
import { citySearch } from '../../services/Hotels';

export const suggestCitySearch=createAsyncThunk('hotels/searchCity', citySearch);
export const setCityCode = createAction<{ cityCode: string }>('hotel/cityCode');

