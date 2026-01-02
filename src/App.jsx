import { useState } from 'react'

import { projects, piDigits } from './data'
import './App.css'
import ProjectCard from './components/ProjectCard'
import Pi from './components/Pi'

function App() {

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          margin: '2.5rem auto 2rem auto',
          maxWidth: 1000, 
          width: '90vw',  
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            fontSize: '2.3rem',
            fontWeight: 700,
            marginBottom: '1.2rem',
            color: '#42506a',
            fontFamily: 'inherit',
            letterSpacing: '0.01em',
          }}
        >
          Hey, I'm Ken and I'm a computer science student at the University of Waterloo.
        </div>
        <div
          style={{
            fontSize: '1.15rem',
            color: '#64748b',
            marginBottom: '0.5rem',
            fontFamily: 'inherit',
            fontWeight: 500,
          }}
        >
          Check out some of my projects below!
        </div>
        <div
          style={{
            fontSize: '1.15rem',
            color: '#64748b',
            marginBottom: '0.5rem',
            fontFamily: 'inherit',
            fontWeight: 500,
          }}
        >
          In my free time, I like to play basketball, chess, and build PCs.
        </div>
        <div
          style={{
            fontSize: '1.15rem',
            color: '#64748b',
            fontFamily: 'inherit',
            fontWeight: 500,
          }}
        >
          One cool thing about me is that I can memorize lots of digits of pi. ({piDigits.length - 1} and counting)
        </div>
      </div>
      <ProjectCard projects={projects} />
      <Pi digits={piDigits} count={piDigits.length} />
    </>
  )
}

export default App