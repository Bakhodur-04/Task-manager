import React from 'react';
import DateNow from './DateNow';
import TableMonth from './TableMonth';
import { Routes, Route } from "react-router-dom";
import Profile from './Profile'
import NowDay from './NowDay';

const Main = ({year, month, day}) => {

  return (
    <main className='main'>
        <div className='main-container container'>
            <DateNow year={year} month={month}/>

            <Routes>
              <Route>
                  <Route path='/' element={<TableMonth day={day}/>}/>
                  <Route path='profile' element={<Profile />}/>
                  <Route path='nowday' element={<NowDay />}/>
              </Route>
            </Routes>
        </div>
    </main>
  )
}

export default Main