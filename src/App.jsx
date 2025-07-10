import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import './App.css'
//import ExpensePage from './pages/ExpensePage'
import Login from './pages/Login'
//import Home from './pages/Home'
//import Signup from './pages/Signup'


function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
        <Route path='/expenses' element={<ExpensePage/>} />
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App
