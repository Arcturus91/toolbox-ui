import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import './App.css'
import { HomePage } from './pages'

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
)

function App () {
  return <RouterProvider router={router} />
}

export default App
