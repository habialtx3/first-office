import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CityDetails from './pages/CityDetails'
import Browse from './pages/Browse'
import Details from './pages/Details'
import BookOffice from './pages/BookOffice'
import SuccessBooking from './pages/SuccessBooking'
import CheckBooking from './pages/CheckBooking'

import './App.css'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Browse />} />
        <Route path='/office/:slug' element={<Details />} />
        <Route path='/office/:slug/book' element={<BookOffice />} />
        <Route path='/city/:slug' element={<CityDetails />} />
        <Route path='/success-booking' element={<SuccessBooking />} />
        <Route path='/check-booking' element={<CheckBooking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
