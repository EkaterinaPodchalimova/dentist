import React from "react";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {certificate} from "../utils/certificate";
import Popup from './Popup';

function Certificates(props) {
    React.useEffect(() => {
        props.openPage();
        props.editCertificates(true)
    }, []);

    const [selectPopup, editSelectPopup] = React.useState({link: ''});

    const onClose = () => {
        editSelectPopup({link: ''})
    }

    return (
        <div className='certificates'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={1}
                slidesPerView={3}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {certificate.map((el) =>
                    <SwiperSlide><img key={el} src={el} className='slider' alt='сертификат' onClick={() => {
                        editSelectPopup({link: el})
                    }}/></SwiperSlide>
                )}
            </Swiper>
            <Popup onClose={onClose} link={selectPopup.link}/>
        </div>

    )
}

export default Certificates;

