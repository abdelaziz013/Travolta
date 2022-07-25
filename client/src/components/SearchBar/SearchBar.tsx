import React from 'react';
import { Container, makeStyles ,Grid} from "@material-ui/core";
import SearchCity from './SearchCity';
import DateFilter  from "./DateFilter";
import Guest from "./Guest"
import dayjs from "dayjs";
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { useSetSearchFormData ,useGetSearchFormValue} from '../../state/hotels/hook';
;
const useStyles = makeStyles({
    container: {
        padding: "1rem",
        margin:"5rem auto",
        display:"flex",
        alignItems: "center"
    },
    results: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "1rem",
        width: "100%",
    },
});
const SearchBar = () => {
    const classes = useStyles();
    const [checkOutDate, setCheckOutDate] = React.useState(dayjs().add(1, "day"));
    const handleChange=useSetSearchFormData()
    const {checkInDate}=useGetSearchFormValue()
    return (
        <Container maxWidth="md" className={classes.container}>
            <Grid container spacing={2}>
            <Grid item xs={3} md={3}>
            <SearchCity
            />
            </Grid>
            <Grid item xs={5} md={5}>
            <DateFilter
               checkInDate={checkInDate as dayjs.Dayjs }
               checkOutDate={checkOutDate}
               setCheckInDate={handleChange}
               setCheckOutDate={setCheckOutDate}
            />
            </Grid>
            <Grid item xs={4} md={4}>
                <Guest/>
            </Grid>
            </Grid>
        </Container>
    );
}
export default SearchBar;