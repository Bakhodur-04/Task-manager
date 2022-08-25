import React from 'react'

const TableDay = ({day}) => {
  return (
    <li className='table-day'>
        <ul className='tasks-list'>
            <li className='tasks-item'>1. Анжуманя в 8:00</li>
        </ul>
        <span className='list-day'>{day}</span>
    </li>
  )
}

export default TableDay