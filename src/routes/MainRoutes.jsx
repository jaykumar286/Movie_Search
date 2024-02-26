import {Route,Routes} from 'react-router-dom'

import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import Error from '../pages/Error'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movie/:id" element={<MovieDetails/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
  )
}