import { createReducer, createSlice } from '@reduxjs/toolkit';
import { SuggestedCities } from '../../interfaces/HotelSearch';
import { setCityCode, suggestCitySearch, setSearchForm, setAdultGuest } from './action';
import dayjs from 'dayjs';
interface SearchFormValue {
  cityCode: string;
  checkInDate: dayjs.Dayjs;
  checkOutDate: dayjs.Dayjs;
  gusts: {
    adult: number;
    children: number;
  };
}
type Dictionary = { [index: string]: string | dayjs.Dayjs | number };
export interface HotelState {
  suggestedCities: SuggestedCities[];
  cityCode: string | undefined;
  searchFormValue: Dictionary;
  adult: number;
}
const initialState: HotelState = {
  suggestedCities: [],
  cityCode: undefined,
  searchFormValue: {
    cityCode: '',

    adultGuest: 1,
    children: 0
  },
  adult: 0
};
export default createReducer(initialState, builder => {
  builder
  .addCase(suggestCitySearch.pending, (state) => {
  }).addCase(suggestCitySearch.fulfilled, (state, action) => {
    state.suggestedCities = action?.payload?.data ? [...action.payload.data] : []
  }).addCase(suggestCitySearch.rejected, (state, action) => {
    console.log('error', action.payload)
  }).addCase(setCityCode, (state, action) => {
    state.cityCode = action.payload.cityCode
  }).addCase(setSearchForm, (state, action) => {
    let search = { ...state.searchFormValue }
    const { name, value } = action.payload
    search[name] = value
    state.searchFormValue = { ...search }

  })
  .addCase(setAdultGuest, (state, action) => {
   
    state.adult += 1;
  });
});
