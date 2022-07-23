import { createReducer } from '@reduxjs/toolkit';
import { SuggestedCities } from '../../interfaces/HotelSearch';
import { setCityCode, suggestCitySearch } from './action';
export interface HotelState {
  suggestedCities:SuggestedCities[]
  cityCode:string|undefined
}
const initialState:  HotelState = {
  suggestedCities:[],
  cityCode:undefined
};
export default createReducer(initialState, builder => {
  builder
  .addCase(suggestCitySearch.pending,(state)=>{
  }).addCase(suggestCitySearch.fulfilled,(state,action)=>{
    state.suggestedCities= action?.payload?.data?[...action.payload.data]:[]
  }).addCase(suggestCitySearch.rejected,(state,action)=>{
    console.log('error',action.payload)
  }).addCase(setCityCode,(state,action)=>{
    state.cityCode=action.payload.cityCode

  })
});
