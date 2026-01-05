import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Packages from "./pages/Packages"

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
  )
}

export default App
