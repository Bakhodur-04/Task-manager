import React from 'react'
import TableDay from './TableDay'
import DateNow from './DateNow';

const TableMonth = ({year, month, dayArray}) => {

    return (
        <>
            <DateNow year={year} month={month}/>

            <div className='table-month'>
                <div className='week'>
                    <ul className='week_list'>
                        <li className='week_item'>Понедельник</li>
                        <li className='week_item'>Вторник</li>
                        <li className='week_item'>Среда</li>
                        <li className='week_item'>Четверг</li>
                        <li className='week_item'>Пятница</li>
                        <li className='week_item'>Суббота</li>
                        <li className='week_item'>Воскресенье</li>
                    </ul>
                </div>

                <div className='month'>
                    <ul className='month__list'>
                        {dayArray.map(el =>
                            <TableDay key={el} day={el}/>
                        )}
                    </ul>
                    
                </div>
            </div>
        </>
    )
}

export default TableMonth