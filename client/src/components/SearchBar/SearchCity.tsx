import React from 'react';
import {
    Grid,
    InputAdornment,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import {
    LocationOn as PinIcon,
    Search as MagnifierIcon,
} from "@material-ui/icons";
import clsx from "clsx";
import { SuggestedCities } from '../../interfaces/HotelSearch';
import { useCitySearch ,useGetSuggestedCities,useSetCityCode} from '../../state/hotels/hook';
const useStyles = makeStyles((theme) => ({
    cityName: {
        fontWeight: 400,
      },
      icon: {
        color: theme.palette.text.secondary,
      },
      optionIcon: {
        marginRight: theme.spacing(2),
      },
      searchIcon: {
        marginLeft: theme.spacing(1),
      },
  }));
const SearchCity = () => {
    const classes = useStyles();
    const [inputValue, setInputValue] = React.useState('')
    const suggestedCites=useGetSuggestedCities()
    const citySearch=useCitySearch()
    const setCityCode=useSetCityCode()
    React.useEffect(()=>{
        console.log(suggestedCites.length)
    },[suggestedCites])
    return (
        <div>
            <Autocomplete
                autoComplete
                autoHighlight
                freeSolo
                // disableClearable
                // blurOnSelect
                // clearOnBlur
                options={ suggestedCites||[]}
                onChange={(event, newValue) => {
                   setCityCode(newValue)
                }}
                onInputChange={(event, newInputValue) => {
                    // setInputValue(newInputValue)
                    citySearch(newInputValue);
                }}
                getOptionLabel={(option) => option.cityName || ""}
                renderOption={(option) => {
                    return (
                        <Grid container alignItems="center">
                            <Grid item>
                                <PinIcon className={clsx(classes.icon, classes.optionIcon)} />
                            </Grid>
                            <Grid item xs>
                                <span className={classes.cityName}>{option.cityName}</span>
                                <Typography variant="body2" color="textSecondary">
                                    { option.countryName}
                                    { option.stateCode ? `, ${option.stateCode}` : ""}
                                </Typography>
                            </Grid>
                        </Grid>
                    );
                }}
                renderInput={(props) => (
                    <TextField
                        {...props}
                        placeholder="Search"
                        label="City"
                        variant="outlined"
                        InputProps={{
                            ...props.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MagnifierIcon
                                        className={clsx(classes.icon, classes.searchIcon)}
                                    />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
        </div>
    );
}
export default SearchCity ;