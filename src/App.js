import './styles/globals.css'
import SideBar from './components/SideBar/index'
import Main from './components/Main/index'
import { SkeletonTheme } from 'react-loading-skeleton'

import { GlobalStorage } from './context/GlobalContext'

function App() {
  return (
    <GlobalStorage>
      <SkeletonTheme baseColor="#1E213A" highlightColor="#E7E7EB">
        <div className="wrapper">
          <SideBar />
          <Main />
        </div>
      </SkeletonTheme>
    </GlobalStorage>
  )
}

export default App
