import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
export default function App() {
  return (
    <>
    <h1 className="text-red-500 font-bold underline">
      Hello world!
    </h1>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-out' element={<Signout />} />
      </Routes>
    </BrowserRouter>
    </>
    
  )
}