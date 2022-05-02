import Head from 'next/head'
import { getTopRated, getTrending, getUpcoming } from '../api/getAllData'
import Category from '../components/category/Category'
import styles from '../styles/Home.module.css'
export async function getStaticProps() {
  const trendings = await getTrending(1)
  const toprated = await getTopRated(1)
  const upComing = await getUpcoming(1)

  return {
    props: {
      trendings,
      toprated,
      upComing,
    },
    revalidate: 60 * 5, // In seconds
  }
}

function Home({ trendings, toprated, upComing }) {
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
        <Category
          data={trendings?.results.slice(0, 10) || []}
          title='Trending'
          url='/view-all/trending'
        />
        <Category
          data={toprated?.results.slice(0, 10) || []}
          title='Toprated'
          url='/view-all/toprated'
        />
        <Category
          data={upComing?.results.slice(0, 10) || []}
          title='Upcoming'
          url='/view-all/upcoming'
        />
      </section>
    </div>
  )
}
Home.layout = 'L1'
export default Home
