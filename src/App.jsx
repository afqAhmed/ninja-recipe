import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useTheme } from './hooks/useTheme'

//Components Import
import Navbar from './components/Navbar'
import ThemeSelector from './components/ThemeSelector'


// Pages Import
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import Create from './pages/create/Create'

function App() {
  const {mode} = useTheme()
  

  return (
    <div className={`${mode} bg-gray-200 min-h-screen`} >
      <Router>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/search' element={<Search />} />
          <Route path='/recipes/:id' element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App