import React from 'react'

const URLs = ({name, address}) => {
  return (
    <div className="bg-gray-800 p-2 rounded-lg">
      <a href={address} target='_blank' className="text-blue-400 hover:underline">{address}</a>
    </div>
  )
}

export default URLs
