import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (    
        <header className='header'>
            <div className='header__container container'>
                <nav className='header__nav'>
                    <ul className='header__list'>
                        <li className='header__item'>
                            <Link to='/profile' className='header__link header__user-svg'> </Link>
                        </li>

                        <li className='header__item'>
                            <Link to='/nowday' className='header__link header__file-svg'> </Link>
                        </li>

                        <li className='header__item'>
                            <Link to='/' className='header__link header__calendar-svg'> </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header