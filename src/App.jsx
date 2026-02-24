import AppLayout from './Layouts/AppLayout'
import Homepage from './Pages/HomePage'
import FilmDectail from './Pages/FilmDectail'
import MovieSlider from './Functions/MovieSlider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
     
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path='/' element={<MovieSlider />} />
               <Route path='/filmDectail/:id' element={<FilmDectail />} />
            </Route>
          </Routes>
        </BrowserRouter>
     
    </>
  )
}

export default App
