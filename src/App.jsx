import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
import './App.css'
import Expense from '../../../server/pennywise-server/models/Expense.model'


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
