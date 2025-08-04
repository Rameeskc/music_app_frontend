import React from 'react'


const ArtistCard = ({ image, artist }) => {
  return (
    <div className="w-full max-w-[180px] flex flex-col items-center rounded-2xl">
    <img
      src={image}
      alt={artist}
      crossOrigin="anonymous"
      className="w-36 h-36 object-cover rounded-full mb-2 border-2 border-white"
    />
    <p className="text-white text-sm font-semibold text-center">{artist}</p>
  </div>
  )
}

export default ArtistCard;