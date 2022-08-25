import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {getYear, getNowMonth, getNowDay} from './utils/date';

function App() {
  const [modalReg, setModalReg] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);

  let year = getYear();
  let month = getNowMonth();
  let day = getNowDay();

  let dayArray = [];
  for (let index = 1; index < 29; index++) {
      dayArray.push(index)
  }

  return (
    <div className="App">
      <Header />

      <Main modalReg={modalReg} setModalReg={setModalReg} 
            year={year} month={month} day={day} dayArray={dayArray} 
            modalLogin={modalLogin} setModalLogin={setModalLogin}
      />
    </div>
  );
}

export default App;
