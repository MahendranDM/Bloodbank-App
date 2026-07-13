import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddDonor from './components/AddDonor'
import ViewDonors from './components/ViewDonor'
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
<BrowserRouter>
<Routes>

<Route path='/' element={<ViewDonors/>}/>
<Route path='/add' element={<AddDonor/>}/>


</Routes>

</BrowserRouter>



    </>
  )
}

export default App
