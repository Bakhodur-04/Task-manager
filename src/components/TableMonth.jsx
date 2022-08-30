import React from 'react'
import TableDay from './TableDay'
import DateNow from './DateNow';
import BtnNextPrev from './UI/Button/BtnNextPrev';
import Modal from './UI/Modal/Modal';

const TableMonth = ({year, month, day, dayArray, isLogin, nowDayTask, taskArray, modalDay, setModalDay}) => {
    console.log(taskArray, nowDayTask, "lol", day)

    return (
        <>
            {isLogin === true 
                ?   <>
                        <div className='table-month-date'>
                            <DateNow year={year} month={month}/>
                            <BtnNextPrev />
                        </div>

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
                                    {dayArray.map(el => {
                                        taskArray !== null && taskArray !== undefined
                                        ? taskArray.map(elem => 
                                            Number(elem.date.slice(0,2)) === el
                                            ? <TableDay modalDay={modalDay} setModalDay={setModalDay} taskArray={taskArray} key={el} day={el}/>
                                            : <TableDay modalDay={modalDay} setModalDay={setModalDay}  key={el} day={el}/>
                                            )
                                        : <TableDay modalDay={modalDay} setModalDay={setModalDay}  key={el} day={el}/>
                                        return (
                                            <TableDay modalDay={modalDay} setModalDay={setModalDay} key={el} day={el}/>
                                        )
                                        
                                    }
                                        //  
                                        // ? taskArray.map(elem => 
                                        //     Number(elem.date.slice(0,2)) === el
                                        //     ? <TableDay modalDay={modalDay} setModalDay={setModalDay} taskArray={taskArray} key={el} day={el}/>
                                        //     : <TableDay modalDay={modalDay} setModalDay={setModalDay}  key={el} day={el}/>
                                        //     )
                                        
                                        // Number(nowDayTask.slice(0,2)) === el 
                                        // ? <TableDay modalDay={modalDay} setModalDay={setModalDay} taskArray={taskArray} key={el} day={el}/>
                                        // : <TableDay modalDay={modalDay} setModalDay={setModalDay}  key={el} day={el}/>
                                    )}
                                </ul>
                                
                            </div>
                        </div>

                        <Modal visible={modalDay} setVisible={setModalDay}>
                            <div style={{width: '1200px', height: '680px'}}>
                                <DateNow year={year} month={month} day={day}/>
                            </div>
                        </Modal>
                    </>

                :   <>
                        <h1>Зарегистрироваться нужно!</h1>
                    </>
            }


        </>
    )
}

export default TableMonth