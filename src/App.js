import React, { useEffect, useState } from 'react';
import './App.css';
import Info from './components/API/Info';
import Header from './components/Header';
import Main from './components/Main';
import {getYear, getNowMonth, getNowDay} from './utils/date';

function App() {
  const [modalReg, setModalReg] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [nowDayTask, setNowDayTask] = useState();
  const [taskArray, setTaskArray] = useState();
  const [modalDay, setModalDay] = useState(false);

  let year = getYear();
  let month = getNowMonth();
  let day = getNowDay();

  async function fetchInfo() {
    const response = await Info.getAll();
    console.log(response)

    if (response.data.userId !== 0) {
      setIsLogin(true)
      
    }

    setNowDayTask(response.data.date)
    setTaskArray(response.data.textDtos)
  }

  useEffect(() => {
    fetchInfo()
  }, [])

  let dayArray = [];
  for (let index = 1; index < 32; index++) {
    dayArray.push(index)
  }

  
  let arrayObj = [];
  for (let i=0; i<dayArray.length; i++) {
    let kek = taskArray.filter(x=> Number(x.date.slice(0,2)) === dayArray[i])
    console.log(kek)
    if(kek ==null)
    {

    }
    let day = {
      day: dayArray[i],
      tasks: kek.te
    }
  };

  return (
    <div className="App">
      <Header />

      <Main modalDay={modalDay} setModalDay={setModalDay} nowDayTask={nowDayTask} taskArray={taskArray} isLogin={isLogin} 
            modalReg={modalReg} setModalReg={setModalReg} 
            year={year} month={month} day={day} dayArray={dayArray} 
            modalLogin={modalLogin} setModalLogin={setModalLogin}
      />
    </div>
  );
}

export default App;
