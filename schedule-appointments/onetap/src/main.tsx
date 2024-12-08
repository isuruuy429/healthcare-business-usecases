import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import AppointmentReceipt from './components/appointment_receipt.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/appointment-receipt' element={<AppointmentReceipt />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
