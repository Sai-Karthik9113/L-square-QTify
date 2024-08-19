
import React, { useEffect } from 'react'
import 'swiper/css'
import {Navigation} from 'swiper/modules'
import {Swiper,useSwiper,SwiperSlide} from 'swiper/react'
import styles from './Carousel.module.css'
import CarouselLeft from './CarouselLeft/CarouselLeft'
import CarouselRight from './CarouselRight/CarouselRight'

const Controls = ({data}) => {
    let swiper = useSwiper();
    // console.log(swiper)
    useEffect(() => {
        swiper.slideTo(0)
    },[data, swiper])

    return <></>
}

const Carousel = ({data, renderCardComponent}) => {
    return (
    <div className={styles.wrapper}>
        <Swiper style={{ padding: '0px' }} initialSlide = {0} modules={{Navigation}} slidesPerView={'auto'} spaceBetween={6} allowTouchMove>
            <Controls data={data} />
            <CarouselLeft />
            <CarouselRight />
            {data.map(item => (
                <SwiperSlide key={item.id} style={{ width: 'auto', padding: '0 16px' }}>
                    {renderCardComponent(item)}
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    )
}

export default Carousel;
