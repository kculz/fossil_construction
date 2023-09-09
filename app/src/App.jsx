import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer, Header } from "./layouts"
import { Landing, Register } from "./pages"


function App() {
 
  return (
    <>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
