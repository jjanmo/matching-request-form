import { createBrowserRouter } from 'react-router-dom'
import { Home, Form, Result } from './pages'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/clean',
    element: <Form />,
  },
  {
    path: '/lesson',
    element: <Form />,
  },
  {
    path: '/result',
    element: <Result />,
  },
])
