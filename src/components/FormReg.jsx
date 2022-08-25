import React from 'react'

const FormReg = ({legend, btnReg, isLoginBtn}) => {
  return (
    <form className='form'>
      {
        isLoginBtn === true
        ? <div className='form__login'>
            <legend className='form__title'>{legend}</legend>

            <div>
              <label className='form__label form__label_login' htmlFor='mailLogin'>Почта</label>
              <input className='form__input form__input_login' id='mailLogin' placeholder='Введите почту' type='email'/>
            </div>

            <div>
              <label className='form__label form__label_login' htmlFor='passwordLogin'>Пароль</label>
              <input className='form__input form__input_login' id='passwordLogin' placeholder='Введите пароль' type='password'/>          
            </div>

            <div className='form__btn-line'>
              <button className='btn form__btn'>{btnReg}</button>
            </div>
          </div>

        : <div className='form__reg'>
            <legend className='form__title'>{legend}</legend>

            <div>
              <label className='form__label' htmlFor='name'>Имя</label>
              <input className='form__input' id='name' placeholder='Введите имя' type='text'/>
            </div>

            <div>
              <label className='form__label' htmlFor='second-name'>Фамилия</label>
              <input className='form__input' id='second-name' placeholder='Введите фамилию' type='text'/>
            </div>

            <div>
              <label className='form__label' htmlFor='mail'>Почта</label>
              <input className='form__input' id='mail' placeholder='Введите почту' type='email'/>
            </div>

            <div>
              <label className='form__label' htmlFor='password'>Пароль</label>
              <input className='form__input' id='password' placeholder='Введите пароль' type='password'/>          
            </div>

            <div>
              <label className='form__label' htmlFor='password-repeat'>Подтвердить пароль</label>
              <input className='form__input' id='password-repeat' placeholder='Подтвердите пароль' type='password'/>          
            </div>

            <div className='form__btn-line'>
              <button className='btn form__btn'>{btnReg}</button>
            </div>
          </div>
      }
      
    </form>
  )
}

export default FormReg