import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from '../components/SearchBar/SearchBar';
import { AppState } from '../state';
import { setAdultGuest } from '../state/hotels/action';
const Hotel = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
export default Hotel;