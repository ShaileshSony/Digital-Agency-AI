import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBY';
import Services from './components/Services';
import OurWork from './components/OurWork';
import Teams from './components/Teams';

const App = () => {

  const [theme, setTheme] = React.useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <div className="dark:bg-black relative">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
    </div>
  )
}

export default App
