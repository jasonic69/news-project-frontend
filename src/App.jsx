import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Navigation from './components/Navigation'
import SingleArticle from './components/SingleArticle'

function App() {

  return (
    <>
    <Header/>
      <main>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/article/:id" element={<SingleArticle />}/>
        </Routes>
      </main>
    <Navigation/>
    </>
  )
}

export default App
