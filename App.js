import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './pages/about';
import Home from './pages/home';
import Contact from './pages/contact';

import Sefty from './pages/sefty';
import Career from './pages/career';
import Blog1 from './pages/blog1';


function App() {
  return (
    <>
      
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/sefty' element={<Sefty/>}/>
        <Route path='/career' element={<Career/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog1' element={<Blog1/>}/>
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
