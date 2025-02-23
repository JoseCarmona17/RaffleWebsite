import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from "./components"
import { MainPage } from "./pages/MainPage"
import { FromBuild } from "./pages/FromBuild"
import { SearchTicket } from './pages/SearchTicket';

function App() {

  return (
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/compra-boleta" element={<FromBuild/>}/>
          <Route path="/buscar-boleta" element={<SearchTicket/>}/>
        </Routes>
        <Footer/>
      </Router>
  )
}

export default App
