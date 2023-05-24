import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Buzz from './Components/Buzz'
import LoadingBar from 'react-top-loading-bar'
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route exact path='/' element={<Buzz key={"general"} apiKey={apiKey} setProgress={setProgress} pagesize="6" country="us" category="general" />} />
          <Route exact path='/business' element={<Buzz key={"business"} apiKey={apiKey} setProgress={setProgress} pagesize="6" country="us" category="business" />} />
          <Route exact path='/entertainment' element={<Buzz key={"entertainment"} apiKey={apiKey} setProgress={setProgress} pagesize="6" country="us" category="entertainment" />} />
          <Route exact path='/general' element={<Buzz key={"general"} apiKey={apiKey} setProgress={setProgress} pagesize="6" country="us" category="general" />} />
          <Route exact path='/health' element={<Buzz key={"health"} apiKey={apiKey} setProgress={setProgress} pagesize="6" country="us" category="health" />} />
          <Route exact path='/science' element={<Buzz key={"science"} apiKey={apiKey} setProgress={setProgress} pagesize="6" country="us" category="science" />} />
          <Route exact path='/sports' element={<Buzz key={"sports"} apiKey={apiKey} setProgress={setProgress} pagesize="6" country="us" category="sports" />} />
          <Route exact path='/technology' element={<Buzz key={"technology"} apiKey={apiKey} setProgress={setProgress} pagesize="6" country="us" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

