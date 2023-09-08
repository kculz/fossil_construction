import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Footer, Header } from "./layouts"
import { Landing } from "./pages"


function App() {
 
  return (
    <>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
