import { API } from './axios'

const key = process.env.NEXT_PUBLIC_REACT_APP_KEY

export const getTrending = async (page) => {
  const response = await API.get(
    `trending/all/week?api_key=${key}&page=${page}`
  )
  return response.data
}

export const getTopRated = async (page) => {
  const response = await API.get(
    `movie/top_rated?api_key=${key}&language=en-US&page=${page}`
  )
  return response.data
}
export const getUpcoming = async (page) => {
  const response = await API.get(
    `movie/upcoming?api_key=${key}&language=en-US&page=${page}`
  )
  return response.data
}

export const getDetails = async (id) => {
  const response = await API.get(
    `movie/${id}?api_key=${key}&language=en-US&append_to_response=credits`
  )
  return response.data
}
export const getVideos = async (id) => {
  const response = await API.get(
    `movie/${id}/videos?api_key=${key}&language=en-US`
  )
  return response.data
}

export const getSearch = async (query, page = 1, year) => {
  const response = await API.get(
    `search/movie?api_key=${key}&language=en-US&query=${query}&page=${page}&primary_release_year=${year}`
  )
  return response.data
}
