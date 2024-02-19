import Navbar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import Contacto from "./Pages/Contacto";
import Blog from "./Pages/Blog";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./Pages/NotFound";
import BlogDetails from "./Pages/BlogDetails";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route element={<LayoutPublic />} path="/">
            <Route element={<Inicio />} path="/"></Route>
            <Route element={<Contacto />} path="/contacto"></Route>
            <Route element={<Blog />} path="/blog"></Route>
            <Route element={<BlogDetails />} path="/blog/:id"></Route>
            <Route element={<NotFound />} path="*"></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
