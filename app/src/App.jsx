import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard, Footer, Header } from "./layouts"
import { Landing, Login, Register, Rfq, Service, Services } from "./pages"
import { ToastContainer } from 'react-toastify'
import { ProtectedRoute } from "./helper"

function App() {
 
  return (
    <>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<Service />} />
        
        <Route element={<ProtectedRoute />} >
        <Route path="/request-for-quotation" element={<Rfq />} />
        <Route path="/client-area" element={<Dashboard />} />
        </Route>


      </Routes>
      <Footer />
     </BrowserRouter>
     <ToastContainer />
    </>
  )
}

export default App
