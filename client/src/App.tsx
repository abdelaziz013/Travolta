import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';

import Hotel from './pages/Hotel';
import { AppState } from './state';
import { setAdultGuest } from './state/hotels/action';

function App() {
  const adult = useSelector((state: AppState) => state.hotels.adult)
  const dispatch = useDispatch()

  return (
    <div>
        <div  onClick={()=> dispatch(setAdultGuest(1))}>
                    trial xxnj
                </div>
                <div>{adult}</div>
   <Hotel/>
    </div>

  );
}

export default App;
