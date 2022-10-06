import {Link} from "react-router-dom";

function Footer() {
    return (
        <section className='footer'>
            <div className='footer__part'>
                <h2 className='footer__title'>Ариадна</h2>
                <a className='footer__text' href='https://ya.cc/t/j3Fsy4xJ3dRpiM' target='_blank'>Клиника для вашей здоровой улыбки</a>
                <iframe src="https://yandex.ru/sprav/widget/rating-badge/166797399456" width="150" height="50"
                        frameBorder="0"></iframe>
            </div>
            <div className='footer__part'>
                <h2 className='footer__title'>Разделы</h2>
                <Link to='/' className='footer__text'>О клинике</Link>
                <Link to='/prise' className='footer__text'>Прайс</Link>
                <Link to='/certificates' className='footer__text'>Сертификаты</Link>
                <Link to='/contacts' className='footer__text'>Контакты</Link>
            </div>
            <div className='footer__part'>
                <h2 className='footer__title'>Контакты</h2>
                <a className='footer__text' href='https://yandex.ru/maps/-/CCUZMKwK1A' target='_blank'>г.Курчатов, Коммунистический
                    проспект 1</a>
                <a className='footer__text' href='tel:+74713148440' target='_blank'>+7 (47131) 4-84-40</a>
                <a className='footer__text' href='https://t.me/ariadna_dentist' target='_blank'>Telegram</a>
            </div>
            <div className='footer__part'>
                <a className='main__button' href='https://yandex.ru/business/widget/request/company/166797399456' target='_blank'>Записаться</a>
                <a className='footer__link' href='https://www.gosuslugi.ru/' target='_blank'/>
            </div>
        </section>
    )
}

export default Footer;