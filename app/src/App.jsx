import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard, Footer, Header, ProtectedRoute } from "./layouts"
import { Account, Chat, Landing, Login, Logout, Register, Rfq, Service, Services } from "./pages"
import { ToastContainer } from 'react-toastify'
import { Request } from "./components"

function App() {
 
  return (
    <>
     <BrowserRouter>
      <Header />
      <Routes>

        {/* Basic Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<Service />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />} >
        <Route path="/make-request" element={<Rfq />} />
        <Route path="/faq" element={<Rfq />} />
        <Route path="/success" element={<Request />} />
        <Route path="/client-area" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/my-account" element={<Account />} />
        <Route path="/logout" element={<Logout />} />
        </Route>
        

      </Routes>
      <Footer />
     </BrowserRouter>
     <ToastContainer />
    </>
  )
}

export default App
