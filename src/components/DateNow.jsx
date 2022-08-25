import React from 'react'

const DateNow = ({day, month, year}) => {
  return (
    <div className='date-now'>
        <span>{day}</span>
        <span> {month} </span>
        <span>{year} год</span>
    </div>
  )
}

export default DateNow