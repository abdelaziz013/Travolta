import React from 'react';
import styles from "./Styles/Styles.module.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from '../../state';
import { setAdultGuest } from '../../state/hotels/action';

const Guest = () => {
    const adult = useSelector((state: AppState) => state.hotels.adult)
  const dispatch = useDispatch()
  React.useEffect(()=>{
    console.log(adult)
  },[dispatch,adult])
    return (
        <div className={styles.guest}>
            <div className={styles.adults}>
                <label>Adults</label>
                <div className={styles.guestSelect}>
                    <div
                        className={styles.btnSm}
                    // name="adults"
                    // onClick={() => dispatch ())}
                    onClick={()=> dispatch(setAdultGuest(1))}
                    >
                        <AddIcon />
                    </div>
                    <span>{adult}</span>
                    <div
                        className={styles.btnSm}
                    // name="adults"
                    // onClick={() => {
                    //   updateAdultQuantity(-1);
                    // }}
                    >
                        <RemoveIcon />
                    </div>
                </div>
            </div>
            <div className="children">
                <label>Children</label>
                <div className={styles.guestSelect}>
                    <div
                        className={styles.btnSm}
                    // name="children"
                    // onClick={() => {
                    //   updateChildrenQuantity(1);
                    // }}
                    >
                        <AddIcon />
                    </div>
                    <span>2</span>
                    <div
                        className={styles.btnSm}
                    // name="children"
                    // onClick={() => {
                    //   updateChildrenQuantity(-1);
                    // }}
                    >
                        <RemoveIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guest;