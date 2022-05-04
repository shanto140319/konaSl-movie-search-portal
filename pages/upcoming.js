import React, { useState } from 'react'
import style from '../styles/ViewAll.module.scss'
import InfiniteScroll from 'react-infinite-scroll-component'
import Head from 'next/head'
import { getUpcoming } from '../api/getAllData'
import MovieCard from '../components/common/movie-card/MovieCard'
import Title from '../components/common/Title'

const Upcoming = ({ data }) => {
  const [page, setPage] = useState(data.page)
  const [totalPage, setTotalPage] = useState(data.total_pages)
  const [allCategory, setAllCategory] = useState(data.results)

  const fetchNext = async (page) => {
    const items = await getUpcoming(page + 1)

    setAllCategory([...allCategory, ...items.results])
    setPage(items.page)
    setTotalPage(items.total_pages)
  }

  return (
    <section className='section' style={{ marginTop: 50 }}>
      <Head>
        <title>Upcoming</title>
      </Head>
      <Title>Upcoming</Title>
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
Upcoming.layout = 'L1'
export default Upcoming

export async function getStaticProps(contex) {
  const data = await getUpcoming(1)

  return {
    props: {
      data,
    },
    revalidate: 60 * 5, // In seconds
  }
}
