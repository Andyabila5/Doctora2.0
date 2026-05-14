import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'

function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true,      element: <App /> },
      { path: 'sobre-mi', element: <About /> },
      // { path: 'servicios', element: <Services /> },
      // { path: 'pacientes', element: <Patients /> },
      // { path: 'contacto',  element: <Contact /> },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)