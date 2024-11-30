import React from 'react'
import Header from './Header'
import ThemeProvider from './ThemeProvider'
import Content from './Content'
const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Header/>
        <Content/>
      </ThemeProvider>
    </div>
  )
}

export default App
