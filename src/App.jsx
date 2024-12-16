import { Route, Routes } from "react-router";
import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<ArticlesList />}></Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
