import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Signup, Login } from 'app/screens'
import { NAVIGATION } from 'app/utils/enums/enums'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={NAVIGATION.HOME} element={<Home />} />
        <Route exact path={NAVIGATION.SIGNUP} element={<Signup />} />
        <Route exact path={NAVIGATION.LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
