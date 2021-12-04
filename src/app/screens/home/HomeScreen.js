import { NavBarComponent, SideBarComponent } from 'app/components'
import { NAVIGATION } from 'app/utils/enums/enums'
import React from 'react'

const navigation = [
  { name: 'TIME TRACKER', icon: null, href: NAVIGATION.HOME, selected: true },
  { name: 'REPORTS', icon: null, href: '', selected: false },
]

class HomeScreen extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <div className='header'>
          <NavBarComponent />
        </div>
        <div className='sidebar'>
          <SideBarComponent {...{ navigation }} />
        </div>
      </div>
    )
  }
}

export default HomeScreen
