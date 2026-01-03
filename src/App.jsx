// Import Layout wrapper component
import Layout from './Layout/Layout'
// Import Home page component
import Home from './Pages/Home'
// Import Category page component
import Category from './Pages/Category'
// Import FeaturedProduct page component
import FeaturedProduct from './Pages/FeaturedProduct'
// Import AllProduct page component
import AllProduct from './Pages/AllProduct'

// Main App component - renders all pages within Layout
const App = () => {
  return (
    <>
    {/* Layout component wraps all pages with common header/footer */}
    <Layout>
      {/* Home page section */}
      <Home/>
      {/* Category section displaying product categories */}
      <Category/>
      {/* Featured products section */}
      <FeaturedProduct/>
      {/* All products listing section */}
      <AllProduct/>
    </Layout>
    </>
  )
}

// Export App as default
export default App