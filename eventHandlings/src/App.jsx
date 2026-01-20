import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './Pages/HomePage'
import AddEvent from './Pages/AddNewEvent'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './Pages/RegisterEvent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/AddEvent' element={<AddEvent/>}/>
        <Route path='/AddEvent/:eventId' element={<AddEvent/>}/>
        <Route path='/Register/:eventId' element={<Register/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
