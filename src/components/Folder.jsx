import React from 'react'
import URLs from './URLs'

const Folder = ({name, links}) => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{name}</h2>
      <div className="space-y-2">
        {links.map((link, index) => (
          <URLs key={index} name={name} address={link} />
        ))}
      </div>
    </div>
  )
}

export default Folder
