import React, { useState } from 'react'
import { getTopRated, getTrending, getUpcoming } from '../../api/getAllData'
import MovieCard from '../../components/common/movie-card/MovieCard'
import style from '../../styles/ViewAll.module.scss'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useRouter } from 'next/router'
import Head from 'next/head'

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const ViewAll = ({ data }) => {
  const [page, setPage] = useState(data.page)
  const [totalPage, setTotalPage] = useState(data.total_pages)
  const [allCategory, setAllCategory] = useState(data.results)
  const router = useRouter()
  const { slug } = router.query

  const fetchNext = async (page) => {
    if (slug === 'trending') {
      var items = await getTrending(page + 1)
    } else if (slug === 'toprated') {
      var items = await getTopRated(page + 1)
    } else {
      var items = await getUpcoming(page + 1)
    }
    setAllCategory([...allCategory, ...items.results])
    setPage(items.page)
    setTotalPage(items.total_pages)
  }

  return (
    <section className='section'>
      <Head>
        <title>{slug}</title>
      </Head>
      <InfiniteScroll
        dataLength={allCategory.length}
        next={() => fetchNext(page)}
        hasMore={totalPage > page ? true : false}
        className={style.cardWrapper}
      >
        {allCategory.map((card, index) => {
          return <MovieCard key={index} card={card} />
        })}
      </InfiniteScroll>
    </section>
  )
}
ViewAll.layout = 'L1'
export default ViewAll

export async function getStaticProps(contex) {
  const slug = contex.params.slug

  if (slug === 'trending') {
    var data = await getTrending(1)
  } else if (slug === 'toprated') {
    var data = await getTopRated(1)
  } else {
    var data = await getUpcoming(1)
  }

  return {
    props: {
      data,
    },
    revalidate: 60 * 5, // In seconds
  }
}
