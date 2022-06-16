import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import SigninPage from './pages/signin'

import './App.css'

function App() {
  return (
   <Router>
     <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/signin' element={<SigninPage />} exact />
     </Routes>
   </Router>
  )
}

export default App;   
