import React from 'react';
import { makeStyles } from "@material-ui/core";
import { DatePicker } from "@material-ui/pickers";
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { ParsableDate } from '@material-ui/pickers/constants/prop-types'
import dayjs from "dayjs"
interface DateFilterProps {
    checkInDate: dayjs.Dayjs
    checkOutDate: dayjs.Dayjs
    setCheckOutDate: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
    setCheckInDate: (name:string,value:dayjs.Dayjs)=>void;
}
const useStyles = makeStyles((theme) => ({
    datePickersContainer: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    datePicker: {
        flex: 1,
    },
    spacer: {
        width: theme.spacing(2),
    },
}));
const DateFilter = ({ checkInDate, checkOutDate, setCheckInDate, setCheckOutDate }: DateFilterProps) => {
    const classes = useStyles();
    const minCheckIn = React.useRef(dayjs());
    return (
        <div className={classes.datePickersContainer}>
            <DatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="Check In"
                value={checkInDate}
                minDate={minCheckIn.current}
                onChange={(date) =>
                    // console.log(date)
                    setCheckInDate('checkInDate',date as dayjs.Dayjs)
                 }
                className={classes.datePicker}
            />
            <div className={classes.spacer} />
            <DatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="Check Out"
                value={checkOutDate}
                // minDate={checkInDate?checkInDate.add(1, "day"):null}
                onChange={(date) => setCheckOutDate(date as dayjs.Dayjs )}
                className={classes.datePicker}
            />
        </div>
    );
}
export default DateFilter;