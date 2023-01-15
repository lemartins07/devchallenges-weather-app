import './styles/globals.css'
import SideBar from './components/SideBar/index'
import Main from './components/Main/index'

import { GlobalStorage } from './context/GlobalContext'

function App() {
  return (
    <GlobalStorage>
      <div className="wrapper">
        <SideBar />
        <Main />
      </div>
    </GlobalStorage>
  )
}

export default App
