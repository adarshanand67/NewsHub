import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={
            <div>
              <Navbar />
              <News key={Math.random()} />
            </div>
          } />

          {/* Dynamic url routes */}
          <Route path="/:category" element={<div> <Navbar /> <News key={Math.random()} /> </div>} />


        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  )
}

export default App