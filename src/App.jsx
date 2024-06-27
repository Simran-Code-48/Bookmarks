import { useState } from 'react'
import './App.css'
import Folder from './components/Folder'

function App() {
  let folders = [
    {
      name: "Dev",
      links: [
        { name: "harkirat", address: "https://harkirat.classx.co.in" },
        { name: "100xdevs app", address: "https://app.100xdevs.com/" },
        { name: "100xdevs projects", address: "https://projects.100xdevs.com/" },
        { name: "100xdevs GitHub", address: "https://github.com/100xdevs-cohort-2" }
      ]
    },
    {
      name: "College",
      links: [
        { name: "Thapar questions", address: "https://cl.thapar.edu/ques.php" },
        { name: "Thapar WebKiosk", address: "https://webkiosk.thapar.edu/index.jsp" },
        { name: "Thapar LMS", address: "https://lms.thapar.edu/moodle/my/" }
      ]
    },
    {
      name: "DSA",
      links: [
        { name: "LeetCode", address: "https://leetcode.com/Simran_code/" },
        { name: "Coding Ninjas", address: "https://classroom.codingninjas.com/app/domain/dsa/16249/learn/module/3" },
        { name: "Apna College", address: "https://www.apnacollege.in/start" },
        { name: "Take U Forward", address: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
        { name: "CSES Problem Set", address: "https://cses.fi/problemset/" }
      ]
    }
  ];
  
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
