import React from "react";

function Contacts(props) {
    React.useEffect(() => {
        props.openPage();
        props.editContacts(true)
    }, []);

    return (
        <div className='contacts'>
            <h2 className='contacts__title'>Номер телефона</h2>
            <a className='contacts__subtitle' href='tel:+74713148440' target='_blank'>+7(47131) 4-84-40</a>
            <h2 className='contacts__title'>Telegram</h2>
            <a className='contacts__subtitle' href='https://t.me/ariadna_dentist' target='_blank'>@ariadna_dentist</a>
            <h2 className='contacts__title'>Адрес</h2>
            <a className='contacts__subtitle' href='https://yandex.ru/maps/-/CCUZMKwK1A' target='_blank'>г.Курчатов, Коммунистический
                проспект 1</a>
            <h2 className='contacts__title'>Общество с ограниченной ответственность "Ариадна"</h2>
            <h2 className='contacts__title'>Гениральный директор: Гречишникова Наталья Николаевна</h2>
        </div>
    )
}

export default Contacts;