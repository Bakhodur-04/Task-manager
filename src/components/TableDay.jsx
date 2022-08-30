import React from 'react'

const TableDay = ({day, taskArray, isComplete, setModalDay}) => {
  
  return (
    <li className='table-day' onClick={() => setModalDay(true)}>
        <ul className='tasks-list'>
          {
            taskArray !== null && taskArray !== undefined
            ? taskArray.map(el =>
                <li key={el.taskId} className='tasks-item' style={el.isCompleted === true ? {textDecoration: 'line-through'} : {}}>{el.taskId}. {el.text}</li>
              )
            
            : <li className='tasks-item'></li>
          }
          
        </ul>
        <span className='list-day'>{day}</span>
    </li>
  )
}

export default TableDay