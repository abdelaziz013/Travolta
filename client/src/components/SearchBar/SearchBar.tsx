import React from 'react';
import { Container, makeStyles } from "@material-ui/core";
import SearchCity from './SearchCity';
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
    return (
        <Container maxWidth="sm" className={classes.container}>
            <SearchCity />
        </Container>
    );
}
export default SearchBar;