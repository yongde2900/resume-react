import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'
import React from 'react'
import Slider from 'react-slick'
import { useState } from 'react'


export default () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        afterChange: function(index)  {
            console.log(index)
            setCurrentSlide(index)
        },
        adaptiveHeight: true
    }

    const sliderData = [
        {
            img: "/theremometer1.jpg",
            title: '溫濕度APP',
            text: '溫濕度歷史資料圖表'
        },
        {
            img: '/theremometer2.jpg',
            title: '溫濕度APP',
            text: 'lorem'
        },
        {
            img: '/theremometer3.jpg',
            title: '溫濕度APP',
            text: 'lorem'
        },
        {
            img: '/theremometer4.jpg',
            title: '溫濕度APP',
            text: 'lorem'
        },
        // {
        //     img: '/simpleT.jpg',
        //     title: 'Simple Twitter',
        //     text: 'lorem'
        // }
    ]


    return (
        <div className="carousel-with-text px-10">
            <Slider {...setting} className=' '>
                {sliderData.map((item, index) => (
                    <div key={index} className='flex item-center justify-center w '>
                        <img src={item.img} alt={item.title} className=' w-[300px] ' />
                    </div>
                ))}
            </Slider>
            <div className="text-container mt-20  mx-auto ">
                <h2 className='text-center'>{sliderData[currentSlide].title}</h2>
                <p className='text-center'>{sliderData[currentSlide].text}</p>
            </div>
        </div>
    )
}