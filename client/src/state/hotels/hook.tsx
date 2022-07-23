import React from "react"
import { useDispatch,useSelector } from "react-redux"
import { AppState } from ".."
import { SuggestedCities } from "../../interfaces/HotelSearch"
import { setCityCode, suggestCitySearch } from "./action"

// call api to suggest city for user
export const useCitySearch=()=>{
    const dispatch = useDispatch()
    return React.useCallback((input:string) => {
        dispatch(suggestCitySearch(input))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}
// get SuggestedCities
export const useGetSuggestedCities= ():SuggestedCities[]  => {
    return useSelector((state: AppState) => state.hotels.suggestedCities)
}

// set city code
export const useSetCityCode=()=>{
    const dispatch = useDispatch()
    return React.useCallback((suggestedCity:any) => {
        dispatch(setCityCode({cityCode:suggestedCity.cityCode}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
}