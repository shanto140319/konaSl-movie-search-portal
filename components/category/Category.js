import React from 'react'
import Heading from '../common/Heading'
import HomeSlider from '../common/slider/Slider'

const Category = ({ data, title, url }) => {
  return (
    <div>
      <Heading title={title} url={url} />
      <HomeSlider data={data} />
    </div>
  )
}

export default Category
