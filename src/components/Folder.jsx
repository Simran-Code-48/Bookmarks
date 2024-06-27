import React from 'react'
import URLs from './URLs'

const Folder = ({name, links}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{name}</h2>
      <div className=" flex text-wrap flex-wrap">
        {links.map((link, index) => (
          <URLs key={index} name={link.name} address={link.address} />
        ))}
      </div>
    </div>
  )
}

export default Folder
