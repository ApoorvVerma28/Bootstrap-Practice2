import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Category from './Pages/Category'
import FeaturedProduct from './Pages/FeaturedProduct'
import AllProduct from './Pages/AllProduct'

const App = () => {
  return (
    <>
    <Layout>
      <Home/>
      <Category/>
      <FeaturedProduct/>
      <AllProduct/>
    </Layout>
    </>
  )
}

export default App