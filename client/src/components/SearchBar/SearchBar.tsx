import React from 'react';
import { Container, makeStyles } from "@material-ui/core";
import SearchCity from './SearchCity';
import DateFilter  from "./DateFilter";
import dayjs from "dayjs";
const useStyles = makeStyles({
    container: {
        padding: "1rem",
        margin:"5rem auto"
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
    const [checkInDate, setCheckInDate] = React.useState(dayjs());
    const [checkOutDate, setCheckOutDate] = React.useState(dayjs().add(1, "day"));
    return (
        <Container maxWidth="sm" className={classes.container}>
            <SearchCity

            />
            <DateFilter
               checkInDate={checkInDate}
               checkOutDate={checkOutDate}
               setCheckInDate={setCheckInDate}
               setCheckOutDate={setCheckOutDate}
            />
        </Container>
    );
}
export default SearchBar;