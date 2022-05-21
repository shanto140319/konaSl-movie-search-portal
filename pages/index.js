import React from 'react'
import Head from 'next/head'
import { getTopRated, getTrending, getUpcoming } from '../api/getAllData'
import Category from '../components/category/Category'
import styles from '../styles/Home.module.scss'

export async function getStaticProps() {
  // const trendings = await getTrending(1)
  // const toprated = await getTopRated(1)
  // const upComing = await getUpcoming(1)

  //getting all data at a time
  const response = await Promise.all([
    getTrending(1),
    getTopRated(1),
    getUpcoming(1),
  ])
  return {
    props: {
      trendings: response[0],
      toprated: response[1],
      upComing: response[2],
    },
    revalidate: 60 * 5, // In seconds
  }
}

function Home({ trendings, toprated, upComing }) {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    trendings && toprated && upComing && setLoading(false)
  }, [trendings, toprated, upComing])

  //categories data
  const categories = [
    {
      data: trendings?.results.slice(0, 10) || [],
      title: 'Trending',
      url: '/view-all/trending',
    },
    {
      data: toprated?.results.slice(0, 10) || [],
      title: 'Toprated',
      url: '/view-all/toprated',
    },
    {
      data: upComing?.results.slice(0, 10) || [],
      title: 'Upcoming',
      url: '/view-all/upcoming',
    },
  ]

  if (loading) {
    return <div className='loader'></div>
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Search Portal</title>
        <meta
          name='description'
          content='A assignment project made for KonaSl'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='section'>
        {categories.map((category, index) => {
          const { data, title, url } = category
          return <Category key={index} data={data} title={title} url={url} />
        })}
      </section>
    </div>
  )
}
Home.layout = 'L1'
export default Home
