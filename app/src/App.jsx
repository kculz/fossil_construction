import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard, Footer, Header, ProtectedRoute } from "./layouts"
import { Account, Chat, Landing, Login, Logout, Project, Projects, Register, Rfq, Service, Services } from "./pages"
import { ToastContainer } from 'react-toastify'
import { Request, RequestError } from "./components"
import { UserProjects } from "./admin"

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
        <Route path="/send" element={<Request />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />} >
        <Route path="/make-request" element={<Rfq />} />
        <Route path="/faq" element={<Rfq />} />
        <Route path="/success" element={<Request />} />
        <Route path="/request-error" element={<RequestError />} />
        <Route path="/client-area" element={<Dashboard />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/my-account" element={<Account />} />
        <Route path="/project" element={<Project />} />
        <Route path="/my-project" element={<Projects />} />
        <Route path="/projects" element={<UserProjects />} />
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
