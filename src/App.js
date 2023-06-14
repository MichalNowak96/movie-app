import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import ActorPage from './pages/ActorPage/ActorPage';
import DetailsPage from './pages/DetailsPage/DetailsPage';
import SearchPage from './pages/SearchPage/SearchPage';


const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/actor/:id" element={<ActorPage />} />
          <Route path="/detail/:id" element={<DetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
