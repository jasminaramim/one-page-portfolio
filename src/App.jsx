import { useState } from 'react'

import './App.css'
import Navber from './components/Navber'
import Banner from './components/Banner'

function App() {


  return (
    <>
      <div className='bg-slate-900'>
       <Navber></Navber>
       <Banner></Banner>
      </div>
    </>
  )
}

export default App
