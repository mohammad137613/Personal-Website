import './App.css'
import Layout from '../Layout/Layout'
import Home from '../Home/Home'
import About from '../About/About'
import Experiences from '../Experiences/Experiences'
import Portfolio from '../Portfolio/Portfolio'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>

              <Route exact path="/about" element={<About />}>
              </Route>

              <Route exact path="/" element={<Home />} >
              </Route>

              <Route exact path="/portfolio" element={<Portfolio />} >
              </Route>

              <Route exact path="/experiences" element={<Experiences />} >
              </Route>

            </Routes>
        </Layout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
