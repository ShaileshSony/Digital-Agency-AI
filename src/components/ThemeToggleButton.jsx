import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleButton = ({theme, setTheme}) => {

  useEffect(()=> {
    if(theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <>
      <button>
        {theme === 'dark' ? (
            <img src={assets.sun_icon} className=" size-8.5 p-1.5 border border-gray-500 rounded-full" onClick={()=> setTheme('light')}/>
        ) : (
            <img src={assets.moon_icon} className="size-8.5 p-1.5 border border-gray-500 rounded-full" onClick={()=> setTheme('dark')}/>   
        )}
      </button>
    </>
  )
}

export default ThemeToggleButton
