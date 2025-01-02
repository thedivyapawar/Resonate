import './App.css'
import { lazy } from 'react'
import { Suspense } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
const HomePage = lazy(()=>import ('./pages/HomePage'))
const ProductPage = lazy(()=>import ('./pages/ProductPage'))
const CartPage = lazy(()=>import ('./pages/CartPage'))
import Error from './components/Error'
import { Provider } from 'react-redux'
import myStore from './redux/CartStore'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <>
      <Provider store={myStore}>
      <Navbar/>
      <Outlet/>
      <Footer/>
      <ScrollToTop/>
      </Provider>
    </>
  )
}

export default App

export const myRoutes = createBrowserRouter ([
  {
    path:"/",
    element : <App/>,
    errorElement : <Error/>,
    children:[
      {
        path :"/",
        element : <Suspense><HomePage/></Suspense>
      },
      {
        path :"/products/:productName",
        element :<Suspense> <ProductPage/></Suspense>
      },
      {
        path:"/cart",
        element:<Suspense><CartPage/></Suspense>
      }
    ]
  }
])


