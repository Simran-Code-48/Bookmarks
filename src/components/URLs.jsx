import React from 'react'

const URLs = ({name, address}) => {
  return (
    <div className="bg-gray-800 w-20 h-20 rounded-lg mr-4 my-4 flex justify-center p-2 items-center ">
      <div className=""></div>
      <a href={address} target='_blank' className="text-blue-400 hover:underline max-w-20 text-wrap ">{name}</a>
    </div>
  )
}

export default URLs
