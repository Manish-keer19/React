import React, { useState, useEffect } from 'react'
import ThemeUi from "./component/ThemeUi.jsx"
import Card from "./component/Card.jsx"
import { ThemeProvider } from './context/theme.js'
import Card2 from './component/Card2.jsx'

export default function App() {

  const [themeMod, setthemeMod] = useState("light")

  const lightTheme = () => {
    setthemeMod('light');
  }

  const darkTheme = () => {
    setthemeMod('dark');
  }

  useEffect(() => {
    document.querySelector("html").classList.remove('light', 'dark')
    document.querySelector("html").classList.add(themeMod)
  }, [themeMod])

  return (

    <ThemeProvider value={{ themeMod, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeUi />
          </div>

          <div className="w-full max-w-sm mx-auto flex">
            <Card />
           <Card/>
           <Card/>
          </div>
        </div>
      </div>

    </ThemeProvider>




  )
}
