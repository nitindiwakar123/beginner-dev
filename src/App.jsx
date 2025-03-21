import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'

function App() {

  return (
    <div className='w-full bg-[#111827] px-14 py-5'>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
