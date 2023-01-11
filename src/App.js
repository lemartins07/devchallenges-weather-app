import './styles/globals.css'
import SideBar from './components/SideBar/index'
import Main from './components/Main/index'

function App() {
  return (
    <>
      <div className="wrapper">
        <SideBar />
        <Main />
      </div>
    </>
  )
}

export default App
