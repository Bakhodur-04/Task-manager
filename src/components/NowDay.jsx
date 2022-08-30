import React from 'react'
import DateNow from './DateNow'

const NowDay = ({ year, month, day, isPlaned, nowDayTask, taskArray }) => {
  return (
    <div className='nowday'>
      <DateNow year={year} month={month} day={day}/>
      {
        29 === day
        ? <>
            <h1 className='nowday__title'>Задачи на сегодня</h1>
            <ul className='nowday__list'>
              {
                taskArray !== null && taskArray !== undefined
                ? taskArray.map(el =>
                    <li key={el.taskId} className='nowday__item' style={el.isCompleted === true ? {textDecoration: 'line-through'} : {}}>
                      {el.taskId}. {el.text}
                      <button className='btn btn-pen'></button>
                      <button className='btn btn-done'></button>
                      <button className='btn btn-cross'></button>
                    </li>
                  )
                
                : <li className='nowday__item'>
                    <button className='btn btn-pen'></button>
                  </li>
              }
            </ul>
          </>
        : <h1 className='nowday-title'>Дел на сегодня не запланировано</h1>
      }
    </div>
  )
}

export default NowDay