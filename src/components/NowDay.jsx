import React from 'react'
import DateNow from './DateNow'

const NowDay = ({ year, month, day, isPlaned }) => {
  return (
    <div className='nowday'>
      <DateNow year={year} month={month} day={day}/>
      {
        isPlaned === true
        ? <>
            <h1 className='nowday-title'>Дела на сегодня</h1>
            <ul className='nowday__list'>
              <li className='nowday__item'></li>
            </ul>
          </>
        : <h1 className='nowday-title'>Дел на сегодня не запланировано</h1>
      }
    </div>
  )
}

export default NowDay