
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
        // swiper.slideTo(0)
    },[data])

    return <></>
}

const Carousel = ({data, renderCardComponent}) => {
    const showArrows = data.length > 7;
    return (
    <div className={styles.wrapper}>
        <Swiper
            initialSlide = {0}
            modules={{Navigation}}
            breakpoints={{
                320: {
                    slidesPerView: 1.75,
                },
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 4,
                },
                1024: {
                    slidesPerView: 6,
                },
                1200: {
                    slidesPerView: 7,
                    spaceBetween: 6
                }
            }}
            allowTouchMove
        >
            <Controls data={data} />
            {
                showArrows && (
                    <>
                        <CarouselLeft />
                        <CarouselRight />
                    </>
                )
            }
            {data.map(item => (
                <SwiperSlide key={item.id} style={{ padding: '0 16px' }}>
                    {renderCardComponent(item)}
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
    )
}

export default Carousel;
