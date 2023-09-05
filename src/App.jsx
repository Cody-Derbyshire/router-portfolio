import { BrowserRouter, Routes, Route, useRouteError } from 'react-router-dom';
import Landing from './pages/Landing';
import Menu from './pages/Menu';
import Projects from './pages/Projects';
import Graphics from './pages/Graphics';
import Furniture from './pages/Furniture';
import ThreeD from './pages/ThreeD';
import Motion from './pages/Motion';
import Costume from './pages/Costume';
import Contact from './pages/Contact';
import Error from './pages/Error';
import './assets/css/App.css';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path='/home' element={<Landing />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/graphics' element={<Graphics />} />
          <Route path='/furniture' element={<Furniture />} />
          <Route path='/3d' element={<ThreeD />} />
          <Route path='/motion' element={<Motion />} />
          <Route path='/costume' element={<Costume />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
