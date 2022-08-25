import React from 'react'
import DateNow from './DateNow'
import FormReg from './FormReg'
import Modal from './UI/Modal/Modal'

const Profile = ({ year, month, day, isLogin, name, secondName, modalReg, setModalReg, modalLogin, setModalLogin }) => {

  return (
    <div className='profile'>
      {
        isLogin === true
        ? <>
            <DateNow year={year} month={month} day={day}/>
            <h1 className='nowday-title'>Hello {name} {secondName}</h1>
          </>
        : <div className='btn-group'>
            <button onClick={() => setModalLogin(true)} className='btn btn-profile-log btn-profile-log_login'>Войти</button>
            <button onClick={() => setModalReg(true)} className='btn btn-profile-log'>Регистрация</button>

            <Modal visible={modalReg} setVisible={setModalReg}>
              <FormReg legend={'Регистрация'} btnReg={'Зарегистрироваться'}/>
            </Modal>

            <Modal visible={modalLogin} setVisible={setModalLogin}>
              <FormReg legend={'Войти'} btnReg={'Войти'} isLoginBtn={true}/>
            </Modal>
          </div>
      }

    </div>
  )
}

export default Profile