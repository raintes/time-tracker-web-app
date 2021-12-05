import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Signup, Login, PageNotFound } from 'app/screens'
import { NAVIGATION } from 'app/utils/enums/enums'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path={NAVIGATION.HOME} element={<Home />} />
        <Route path={NAVIGATION.SIGNUP} element={<Signup />} />
        <Route path={NAVIGATION.LOGIN} element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
