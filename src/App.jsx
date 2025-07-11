import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import './App.css'
import ExpensePage from './pages/ExpensePage'
import Login from './pages/Login'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import ExpenseForm from './components/ExpenseForm'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'


function App() {
 

  return (
    <Router>
      <Routes>
        {<Route path="" element={<Home/>}/>}
        {<Route path="/signup" element={<Signup/>}/> }
        <Route path="/login" element={<Login/>}/>
        <Route element={<PrivateRoute/>}>
        {<Route path="/dashboard" element={<Dashboard/>}/> }
        <Route path="/expense-form" element={<ExpenseForm />} />
        <Route path='/expenses' element={<ExpensePage/>} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<NotFound />} />
        
        </Route>
      </Routes>
    </Router>
    
  )
}

export default App
