import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay} from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import sliderOne from '../../images/slider001.png';
import sliderTwo from '../../images/slider002.jpg';
import sliderThree from '../../images/slider003.jpg';
import sliderFour from '../../images/slider004.jpg';
import sliderFive from '../../images/slider005.jpg';
import sliderSix from '../../images/slider006.jpg';
import './home.css'
const Banner = () => {
    return (
        <div>
            <div className="container">
                <div className="grid-cols-2 xl:grid-cols-3 p-5 space-y-2 bg-gray-100 lg:space-y-0 lg:grid justify-items-center lg:gap-3 lg:grid-rows-2">
                    <div class="w-full col-span-2 row-span-2 rounded">
                        {/* <img src={sliderOne} alt="" className='' /> */}

                        {/* slider with pagination */}

                        <Swiper
                            pagination={{
                                dynamicBullets: true,
                            }}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            navigation={true}
                            modules={[Pagination, Navigation, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={sliderOne} alt="" className='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderTwo} alt="" className='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderThree} alt="" className='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderFour} alt="" className='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderFive} alt="" className='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderSix} alt="" className='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderOne} alt="" className='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderOne} alt="" className='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={sliderOne} alt="" className='' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div class="w-full rounded hidden lg:block">
                        <img src={sliderFour} alt="" />
                    </div>
                    <div class="w-full rounded hidden lg:block">
                        <img src={sliderSix} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;