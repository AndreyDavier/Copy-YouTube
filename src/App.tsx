import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Shorts from './pages/Shorts/Shorts'
import Subscriptions from './pages/Subscriptions/Subscriptions'
import styles from "./App.module.scss"

function App() {

  return (
    <>
      <Header />
      <div id={styles["content"]}>
        <div id={styles["items"]}>
          <Sidebar />
        </div>
        <div>
          <div id={styles["contents"]}>
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
          </div>
        </div>
      </div >

    </>
  )
}

export default App
