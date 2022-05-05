import React from 'react'
import { getDetails } from '../../api/getAllData'
import style from '../../styles/Details.module.scss'
import Image from 'next/image'
import MovieDetails from '../../components/movieDetails/MovieDetails'
import CastAndCrew from '../../components/cast&crew/CastAndCrew'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const Details = ({ data }) => {
  return (
    <section className='section'>
      <div
        className={style.posterWrapper}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7)50%, rgba(255, 0, 150, 0.5)), url(
            ${process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_ORIGINAL}${data.backdrop_path}
          )`,
        }}
      >
        <div className={style.poster}>
          <Image
            src={`${process.env.NEXT_PUBLIC_REACT_APP_IMAGE_BASE_500}${data.poster_path}`}
            alt=''
            width={500}
            height={750}
            layout='responsive'
            className={style.poster}
          />
        </div>
        <MovieDetails movie={data} />
      </div>
      <CastAndCrew credits={data.credits} />
    </section>
  )
}
Details.layout = 'L1'
export default Details
export async function getStaticProps(contex) {
  const { id } = contex.params
  try {
    var data = await getDetails(id)
  } catch (error) {
    console.log(error)
    return {
      props: {},
      notFound: true,
    }
  }

  return {
    props: {
      data: data,
    },
    revalidate: 60 * 5,
  }
}
