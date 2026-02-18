import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Packages from "./pages/Packages"
import Portfolio from "./pages/Portfolio"
import Enquiry from "./pages/Enquiry"
import About from "./pages/About"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
  )
}

export default App
