import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Shorts from './pages/Shorts/Shorts'
import Subscriptions from './pages/Subscriptions/Subscriptions'

function App() {

  return (
    <>
      <Header />
      <Sidebar />
      <Routes>
        <Route
          path='/home'
          element={<Home />}
        />
        <Route
          path='/shorts'
          element={<Shorts />}
        />
        <Route
          path='/subscriptions'
          element={<Subscriptions />}
        />
      </Routes>
    </>
  )
}

export default App
