import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom' // eslint-disable-line import/no-extraneous-dependencies
import { routesList } from './Routes'

function App() {
  const router = createBrowserRouter(routesList)

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
