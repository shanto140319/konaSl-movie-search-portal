import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieCard from '../movie-card/MovieCard'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        background: 'gray',
        height: 60,
        width: 35,
        color: '#222',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        background: 'gray',
        height: 60,
        width: 35,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClick}
    />
  )
}
const HomeSlider = ({ data }) => {
  const settings = {
    dots: false,
    infinite: true,
    lazyLoad: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          nextArrow: '',
          prevArrow: '',
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
          nextArrow: '',
          prevArrow: '',
        },
      },
    ],
  }
  return (
    <Slider {...settings}>
      {data.map((item, index) => {
        return <MovieCard key={index} card={item} />
      })}
    </Slider>
  )
}

export default HomeSlider
