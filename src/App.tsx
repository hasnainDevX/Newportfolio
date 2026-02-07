import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Packages from "./pages/Packages"
import Portfolio from "./pages/Portfolio"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
  )
}

export default App
