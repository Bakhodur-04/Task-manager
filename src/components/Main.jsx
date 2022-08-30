import React from 'react';
import TableMonth from './TableMonth';
import { Routes, Route } from "react-router-dom";
import Profile from './Profile'
import NowDay from './NowDay';

const Main = ({year, month, day, dayArray, modalReg, setModalReg, modalLogin, setModalLogin, isLogin, nowDayTask, taskArray, modalDay, setModalDay}) => {

  return (
    <main className='main'>
        <div className='main-container container'>
            <Routes>
              <Route>
                  <Route path='/' element={<TableMonth year={year} month={month} day={day} 
                                                      dayArray={dayArray} isLogin={isLogin} 
                                                      nowDayTask={nowDayTask} taskArray={taskArray}
                                                      modalDay={modalDay} setModalDay={setModalDay}
                                                      />}
                  />
                  <Route path='profile' element={
                    <Profile year={year} month={month} day={day} 
                      modalReg={modalReg} setModalReg={setModalReg} 
                      modalLogin={modalLogin} setModalLogin={setModalLogin}
                    />
                  }/>
                  <Route path='nowday' element={<NowDay year={year} month={month} day={day} 
                    isLogin={isLogin} nowDayTask={nowDayTask} taskArray={taskArray}/>}
                  />
              </Route>
            </Routes>
        </div>
    </main>
  )
}

export default Main