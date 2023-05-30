import { Suspense, lazy } from 'react'

import ErrorPage from './Errors/ErrorPage'
import Layout from './Layout/Layout'

const Login = lazy(() => import('./pages/Login/Login')) //Lazy load example
const Home = lazy(() => import('./pages/Home/Home'))

export const routesList = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contacts/:id',
        element: (
          <Suspense
            // use a children spinner here
            fallback={
              <div className="bg-blue-500 h-[100dvh] w-screen">Loading...</div>
            }
          >
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: (
      <Suspense
        fallback={
          // use a normal full screen spinner here
          <div className="h-[100dvh] w-screen bg-green-300">Loading...</div>
        }
      >
        <Login />
      </Suspense>
    ),
  },
]
