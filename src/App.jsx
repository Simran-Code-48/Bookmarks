import { useState } from 'react'
import './App.css'
import Folder from './components/Folder'

function App() {
  let folders = [
    {
      name: "Learning",
      links: [
        { name: "GFG C++", address: "https://www.geeksforgeeks.org/c-plus-plus/" },
        { name: "W3schools", address: "https://www.w3schools.com" },
        { name: "Primer", address: "https://github.com/donnemartin/system-design-primer#index-of-system-design-topics" },
        { name: "Udemy", address: "https://www.udemy.com/" },
        { name: "Online Compiler", address: "https://www.onlinegdb.com/online_c++_compiler" },
        { name: "Leetcode rating ^", address: "https://utkarshrajmishra.medium.com/from-1430-to-leetcode-guardian-2239-my-one-year-journey-e646dd22d28d" },
      ]
    },
    {
      name: "DSA",
      links: [
        { name: "LeetCode", address: "https://leetcode.com/Simran_code/" },
        { name: "Coding Ninjas", address: "https://classroom.codingninjas.com/app/domain/dsa/16249/learn/module/3" },
        { name: "Apna College", address: "https://www.apnacollege.in/start" },
        { name: "Take U Forward", address: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/" },
        { name: "CSES Problem Set", address: "https://cses.fi/problemset/" },
        { name: "Blind 75", address: "https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions" }
      ]
    },
    {
      name: "CS Fundamentals",
      links: [
        { name: "DBMS roadmap", address: "https://whimsical.com/dbms-roadmap-by-love-babbar-FmUi8ffVop33t3MmpVxPCo" },
        { name: "OS roadmap", address: "https://whimsical.com/operating-system-cheatsheet-by-love-babbar-S9tuWBCSQfzoBRF5EDNinQ" },
        { name: "CN roadmap", address: "https://whimsical.com/networking-cheatsheet-by-love-babbar-FcLExFDezehhfsbDPfZDBv" },
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
      name: "Internship",
      links: [
        { name: "Appweave dashboard", address: "https://dashboard.appweave.tech/" },
        { name: "Orange hrm", address: "https://appweave-osondemand.orangehrm.com/auth/login" }
      ]
    },
    {
      name: "Dev",
      links: [
        { name: "harkirat", address: "https://harkirat.classx.co.in" },
        { name: "100xdevs app", address: "https://app.100xdevs.com/" },
        { name: "100xdevs projects", address: "https://projects.100xdevs.com/" },
        { name: "100xdevs GitHub", address: "https://github.com/100xdevs-cohort-2" }
      ]
    },
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
