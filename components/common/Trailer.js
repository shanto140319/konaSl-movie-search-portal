import React from 'react'
import YouTube from 'react-youtube'

const Trailer = ({ id }) => {
  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  return <YouTube videoId={id} opts={opts} />
}

export default Trailer
