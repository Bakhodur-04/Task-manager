import React from 'react'

const TableDay = ({day}) => {
  return (
    <li className='table-day'>
        <ul className='tasks-list'>
            <li className='tasks-item'></li>
        </ul>
        <span className='list-day'>{day}</span>
    </li>
  )
}

export default TableDay