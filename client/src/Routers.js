import { Routes, Route} from 'react-router-dom'
import Main from './pages/Main'
import Page404 from './pages/Page404'


function Routers() {
  return (
    <Routes>
        <Route path={'/'} element={<Main/>} />
        <Route path={'*'} element={<Page404/>} />
    </Routes>
  )
}

export default Routers