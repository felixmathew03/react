import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'
const Content = () => {
    const {theme,toggleTheme}=useContext(ThemeContext)

  return (
    <div>
      <p style={{
        padding:"20px",
        backgroundColor:theme==="light"?'rgb(250, 243, 244)':'rgb(4, 77, 47)',
        color:theme==="light"?'rgb(4, 77, 47)':'rgb(250, 243, 244)',
      }}>
     <h3>
     1
      a
      : a subject or topic of discourse or of artistic representation
      guilt and punishment is the theme of the story
      b
      : a specific and distinctive quality, characteristic, or concern
      the campaign has lacked a theme
      2
      : a melodic subject of a musical composition or movement
      3
      : a written exercise : composition
      a research theme
     </h3>
      <button style={{
        padding:"10px",
        backgroundColor:theme==="light"?'rgb(4, 77, 47)':'rgb(250, 243, 244)',
        color:theme==="light"?'rgb(250, 243, 244)':'rgb(4, 77, 47)',
        border:"none",
        borderRadius:"4px"
      }} onClick={toggleTheme}>Toggle Theme</button>
      </p>
      
    </div>
  )
}

export default Content
