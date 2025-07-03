import React from 'react'

const TextArea = ({title}) => {
  return (
    <div className=' flex justify-between text-white pl-6 pr-10 pt-4 text-xl font-semibold '>
    <p>{title}</p>
    <button className=' text-sm text-[rgb(136,136,136)] hover:underline'>Show all</button>
    </div>
  )
}

export default TextArea