import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <header>
      <Header />
    </header>
    <main>
      <Routes>
        <Route path="/" element={<Articles />}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
      </Routes>
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  );
}

export default App;
