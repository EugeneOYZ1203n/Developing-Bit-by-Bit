import './App.css'
import MainContentPanel from './components/MainContentPanel'

import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='App'>
      <div className='HorizontalFlexBox'>
        <Sidebar />
        <MainContentPanel />
      </div>
    </div>
  )
}

export default App
