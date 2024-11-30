import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

const Header = () => {
    const {theme,toggleTheme}=useContext(ThemeContext)
  return (
    <div>
      <header style={{
        padding:"20px",
        backgroundColor:theme==="light"?"#fffcdc":"#1a4862",
        color:theme==="light"?"#1a4862":"#fffcdc"
      }}>
        <h1>Theme</h1>
        <button style={{
        padding:"10px",
        backgroundColor:theme==="light"?"#1a4862":"#fffcdc",
        color:theme==="light"?"#fffcdc":"#1a4862",
        border:"none",
        borderRadius:"4px"
      }} onClick={toggleTheme}>
        Toggle Theme
        </button>
      </header>

    </div>
  )
}

export default Header
