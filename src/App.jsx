import { useState } from 'react'
import './App.css'
import Folder from './components/Folder'

function App() {
  let folders = [
    {
      name: "Dev",
      links: [
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup"
      ]
    },
    {
      name: "DSA",
      links: [
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup",
      ]
    },
    {
      name: "College",
      links: [
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup"
      ]
    },
    {
      name: "Internship",
      links: [
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup",
        "https://www.apnacollege.in/?msg=signup",
      ]
    }
  ]
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="p-4">
        {
          folders.map((folder) => (
            <Folder key={folder.name} name={folder.name} links={folder.links} />
          ))
        }
      </div>
    </div>
  )
}

export default App
