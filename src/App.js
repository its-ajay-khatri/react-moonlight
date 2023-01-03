import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Menubar from './Components/Menubar';
import ImgSection from './Components/images-section';
import SecSection from './Components/content-section';
import './Components/logic'

function App() {
  return(
    <>
      <Menubar/>
      {/* <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes> */}
      <ImgSection />
      <SecSection />
    </>
  )
}

export default App;
