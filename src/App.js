import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home, Signup, Login, PageNotFound, Report } from 'app/screens'
import { NAVIGATION } from 'app/utils/enums/enums'
import { navigation } from 'app/utils/constants/constants'
import { SideBarComponent } from 'app/components'

function App() {
  return (
    <BrowserRouter>
      <div className='justify-between flex'>
        <div className='sidebar flex overflow-hidden min-w-sm'>
          <SideBarComponent {...{ navigation }} />
        </div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path={NAVIGATION.HOME} element={<Home />} />
          <Route path={NAVIGATION.SIGNUP} element={<Signup />} />
          <Route path={NAVIGATION.LOGIN} element={<Login />} />
          <Route path={NAVIGATION.REPORTS} element={<Report />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
