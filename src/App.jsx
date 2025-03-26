import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components'
import projects from "../api/projects.json";
import { useDispatch } from 'react-redux';
import { setProjects } from "./features/projectSlice/projectSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProjects(projects));
  }, [dispatch, projects])
  
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
