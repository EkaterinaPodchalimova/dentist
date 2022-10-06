import {Link} from 'react-router-dom';

function Header({AboutPage,Prise, Certificate, Contacts}) {
    return (
        <header className="header">
            <p className="header__title">Ариадна</p>
            <div className="header__menu">
                <Link to='/' className={`header__navigation ${AboutPage && 'header__navigation_active'}`}>О Клинике</Link>
                <Link to='/prise' className={`header__navigation ${Prise && 'header__navigation_active'}`}>Прайс</Link>
                <Link to='/certificates' className={`header__navigation ${Certificate && 'header__navigation_active'}`}>Сертификаты</Link>
                <Link to='/contacts' className={`header__navigation ${Contacts && 'header__navigation_active'}`}>Контакты</Link>
                <a className="header__button" href='https://yandex.ru/business/widget/request/company/166797399456' target='_blank'>Заказать звонок</a>
            </div>
        </header>
    )
}

export default Header;