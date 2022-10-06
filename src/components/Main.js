import dentist from  '../images/dentist.svg';
import smile from '../images/smile.svg';
import telephone from '../images/telephone.svg';

function Main() {
    return(
        <section className='main'>
            <h1 className='main__title'>Мы&nbsp;знаем&nbsp;формулу <img className='main__title-image' alt='смайлик' src={smile} /> красивой&nbsp;улыбки!</h1>
            <h2 className='main__subtitle'>Наша стоматологическая клиника обладает широким ассортиментом современных и&nbsp;качественных услуг. Закажи звонок прямо сейчас!</h2>
            <a className='main__button' href='https://yandex.ru/business/widget/request/company/166797399456' target='_blank'>Записаться</a>
            <a className='main__telephone' href='tel:+74713148440' target='_blank'><img className='main__telephone-image' alt='телефон' src={telephone}/>&nbsp;+7 (47131) 4-84-40 </a>
            <img className='main__image' alt='изображение доктора' src={dentist}/>
        </section>
    )
}

export default Main;