import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Creditscard from './Creditscard'

const CreditsSlider = ({ data }) => {
  const settings = {
    dots: false,
    // infinite: true,
    lazyLoad: true,
    autoplay: false,
    speed: 500,
    slidesToShow: data.length > 10 ? 10 : data.length,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: data.length > 6 ? 6 : data.length,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {data.map((item, index) => {
        return <Creditscard key={index} card={item} />
      })}
    </Slider>
  )
}

export default CreditsSlider
