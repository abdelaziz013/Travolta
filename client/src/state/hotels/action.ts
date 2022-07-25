import { createAsyncThunk,createAction } from '@reduxjs/toolkit';
import { citySearch } from '../../services/Hotels';
import dayjs from "dayjs";
import { CancelTokenSource } from 'axios';
import { SuggestedCities } from '../../interfaces/HotelSearch';

export const suggestCitySearch=createAsyncThunk('hotels/searchCity', citySearch);
export const setCityCode = createAction<{ cityCode: string }>('hotel/cityCode');
export const setSearchForm=createAction<{ name: string ,value:string|dayjs.Dayjs}>('hotel/searchForm');
export const setAdultGuest = createAction<number>('hotel/adult');
