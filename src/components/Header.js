function Header() {
    return (
        <header className="header">
            <p className="header__title">Ариадна</p>
            <div className="header__menu">
                <a className="header__navigation">О Клинике</a>
                <a className="header__navigation">Прайс</a>
                <a className="header__navigation">Сертификаты</a>
                <a className="header__navigation">Контакты</a>
                <a className="header__button">Заказать звонок</a>
            </div>
        </header>
    )
}

export default Header;