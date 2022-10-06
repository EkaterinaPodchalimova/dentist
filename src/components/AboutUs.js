import cat from '../images/f4d2961b652880be432fb9580891ed62.jpeg';
import pic1 from '../images/tools.svg';
import pic2 from '../images/tooth-shine.svg';
import pic3 from '../images/forceps.svg';
import pic4 from '../images/tooth-xray.svg';
function AboutUs() {
    return(
        <section className='about'>
            <div className='left-column'>
                <h2 className='left-column__title'>Наши врачи</h2>
                <div className='left-column__point'>
                    <h3 className='left-column__point-name'>Романова Ирина Викторовна</h3>
                    <img className='left-column__point-image' alt='фото доктора' src={cat} />
                    <h4 className='left-column__point-work'>Врач стоматолог, терапевт</h4>
                </div>
                <div className='left-column__point'>
                    <h3 className='left-column__point-name'>Соглаева Ольга Михайловна</h3>
                    <img className='left-column__point-image' alt='фото доктора' src={cat} />
                    <h4 className='left-column__point-work'>Медицинская сестра</h4>
                </div>
                <div className='left-column__point'>
                    <h3 className='left-column__point-name'>Гречишникова Ирина Сергеевна</h3>
                    <img className='left-column__point-image' alt='фото доктора' src={cat} />
                    <h4 className='left-column__point-work'>Медицинская сестра</h4>
                </div>
                <div className='left-column__point'>
                    <h3 className='left-column__point-name'>Алтунина Людмила Михайловна</h3>
                    <img className='left-column__point-image' alt='фото доктора' src={cat} />
                    <h4 className='left-column__point-work'>Ренгенолаборант</h4>
                </div>
            </div>
            <div className='right-column'>
                <h2 className='right-column__title'>Почему люди выбирают нашу клинику?</h2>
                <h3 className='right-column__subtitle'>Около 80% наших пациентов узнают о нас от своих знакомых, проходивших лечение в нашей клинике.</h3>
                <div className='right-column__point'>
                    <img className='right-column__point-image' src={pic1} alt='изображение услуги'/>
                    <h4 className='right-column__point-name'>Профессиональная команда</h4>
                    <h5 className='right-column__point-about'>Индивидуальный подход к кадому пациенту</h5>
                </div>
                <div className='right-column__point'>
                    <img className='right-column__point-image' src={pic2} alt='изображение услуги'/>
                    <h4 className='right-column__point-name'>Широкий спектр услуг</h4>
                    <h5 className='right-column__point-about'>Технологическая база и компеценции врачей помогур решиь любую вашу проблему</h5>
                </div>
                <div className='right-column__point'>
                    <img className='right-column__point-image' src={pic4} alt='изображение услуги'/>
                    <h4 className='right-column__point-name'>Демократичные цены</h4>
                    <h5 className='right-column__point-about'>Мы следим за рынком стоматологических услуг и предоставляем оптимальное ценовое решение</h5>
                </div>
                <div className='right-column__point'>
                    <img className='right-column__point-image' src={pic3} alt='изображение услуги'/>
                    <h4 className='right-column__point-name'>Современные технологии</h4>
                    <h5 className='right-column__point-about'>Передовые инструменты и методы лечения являются приоритетом нашей клиники</h5>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;