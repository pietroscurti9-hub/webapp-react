import AppLayout from './Layouts/appLayout'
import Homepage from './Pages/homePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <>
     
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path='/' element={<Homepage />} />
              
            </Route>
          </Routes>
        </BrowserRouter>
     
    </>
  )
}

export default App
