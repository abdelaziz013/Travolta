import React from 'react';
import { useDispatch, useSelector, shallowEqual, TypedUseSelectorHook } from 'react-redux';
import { AppState } from '..';
import { SuggestedCities } from '../../interfaces/HotelSearch';
import { setCityCode, suggestCitySearch, setSearchForm } from './action';
import dayjs from 'dayjs';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

// call api to suggest city for user
export const useCitySearch = () => {
  const dispatch = useDispatch();
  return React.useCallback((input:string) => {
    dispatch(suggestCitySearch(input))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
// get SuggestedCities
export const useGetSuggestedCities = (): SuggestedCities[] => {
  return useSelector((state: AppState) => state.hotels.suggestedCities);
};

// set city code
export const useSetCityCode = () => {
  const dispatch = useDispatch();
  return React.useCallback((suggestedCity: any) => {
    dispatch(setCityCode({ cityCode: suggestedCity.cityCode }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

// set search form values
export const useSetSearchFormData = () => {
  const dispatch = useDispatch();

  return React.useCallback((name: string, value: string | dayjs.Dayjs) => {
    dispatch(setSearchForm({ name, value }));
  }, []);
};

// get search form values
export const useGetSearchFormValue = () => {
  return useSelector((state: AppState) => state.hotels.searchFormValue);
};
