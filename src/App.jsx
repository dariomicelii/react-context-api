import { BrowserRouter, Routes, Route } from "react-router-dom";

//* Contexts
import { PostContextProvider } from "./Contexts/postContext";

//* Layout import
import DefaultLayout from "./Layouts/DefaultLayout";

//* Pages import
import HomePage from "./Pages/HomePage";
import ChiSiamoPage from "./Pages/ChiSiamoPage";
import Posts from "./Pages/PostsPage";
import Details from "./Pages/Details";

BrowserRouter;

function App() {
  return (
    <PostContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/about" Component={ChiSiamoPage} />
            <Route path="/posts">
              <Route path="/posts" Component={Posts} />
              <Route path=":id" Component={Details} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostContextProvider>
  );
}

export default App;
