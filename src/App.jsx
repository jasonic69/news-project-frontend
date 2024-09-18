import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Navigation from './components/Navigation'
import SingleArticle from './components/SingleArticle'
import Error404 from './components/404'

function App() {

  return (
    <>
    <Header/>
      <main>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/article/:id" element={<SingleArticle />}/>
            <Route path="/404" element={<Error404 />}/>
        </Routes>
      </main>
    <Navigation/>
    </>
  )
}

export default App
