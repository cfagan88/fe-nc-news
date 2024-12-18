import { Route, Routes } from "react-router";
import Header from "./components/Header";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Footer from "./components/Footer";
import UserLogin from "./components/UserLogin";
import TopicsList from "./components/TopicsList";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Articles />}></Route>
          <Route
            path="/articles/:article_id"
            element={<SingleArticle />}
          ></Route>
          <Route path="/topics" element={<TopicsList />}></Route>
          <Route path="/user-login" element={<UserLogin />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
