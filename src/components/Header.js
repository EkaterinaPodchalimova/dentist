import {Link} from 'react-router-dom';
import React from "react";

function Header({AboutPage,Prise, Certificate, Contacts}) {
    const [menu, editMenu] = React.useState(false);

    const handleButtonMenu = () => {
        editMenu(!menu)
    }

    return (
        <header className="header">
            <p className="header__title">Ариадна</p>
            <button className='header__menu-button' onClick={handleButtonMenu}/>
            <div className={`header__menu  ${menu ? 'header__menu_active' : ''}`}>
                <Link to='/' className={`header__navigation ${AboutPage && 'header__navigation_active'}`} onClick={() => {editMenu(false)}}>О Клинике</Link>
                <Link to='/prise' className={`header__navigation ${Prise && 'header__navigation_active'}`} onClick={() => {editMenu(false)}}>Прайс</Link>
                <Link to='/certificates' className={`header__navigation ${Certificate && 'header__navigation_active'}`} onClick={() => {editMenu(false)}}>Сертификаты</Link>
                <Link to='/contacts' className={`header__navigation ${Contacts && 'header__navigation_active'}`} onClick={() => {editMenu(false)}}>Контакты</Link>
                <a className="header__button" href='https://yandex.ru/business/widget/request/company/166797399456' target='_blank' onClick={() => {editMenu(false)}}>Заказать звонок</a>
            </div>
        </header>
    )
}

export default Header;