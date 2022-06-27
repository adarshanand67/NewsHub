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
          {/* <Route path="/:category" element={<div> <Navbar /> <News key={Math.random()} /> </div>} /> */}
          {/* <Route exact path="/:category" element={
            <div>
              <Navbar />
              <News key={Math.random()} />
            </div>
          } /> */}
          <Route exact path="/business" element={<div> <Navbar /> <News key={Math.random()} category="business" /> </div>} />
          <Route exact path="/entertainment" element={<div> <Navbar /> <News key={Math.random()} category="entertainment" /> </div>} />
          <Route exact path="/general" element={<div> <Navbar /> <News key={Math.random()} category="general" /> </div>} />
          <Route exact path="/health" element={<div> <Navbar /> <News key={Math.random()} category="health" /> </div>} />
          <Route exact path="/science" element={<div> <Navbar /> <News key={Math.random()} category="science" /> </div>} />
          <Route exact path="/sports" element={<div> <Navbar /> <News key={Math.random()} category="sports" /> </div>} />
          <Route exact path="/technology" element={<div> <Navbar /> <News key={Math.random()} category="technology" /> </div>} />



        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  )
}

export default App