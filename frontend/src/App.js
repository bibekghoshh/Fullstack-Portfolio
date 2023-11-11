import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Projects";
import Login from "./components/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";
import AdminPanel from "./components/Admin/AdminPanel";
import Timeline from "./components/Admin/Timeline";
import Youtube from "./components/Admin/Youtube";
import Project from "./components/Admin/Project";
import Skill from "./components/Admin/Skill";
import Loader from "./components/Loader/Loader";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  youtubes={user && user.youtube ? user.youtube : []}
                  timelines={user && user.timeline ? user.timeline : []}
                  skills={user && user.skills ? user.skills : []}
                  about={user && user.about ? user.about : ""}
                />
              }
            />

            <Route
              path="/projects"
              // element={<Projects projects={user.projects} />}
              element={
                user && user.projects ? (
                  <Projects projects={user.projects} />
                ) : null
              }
            />

            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/youtube"
              element={isAuthenticated ? <Youtube /> : <Login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Project /> : <Login />}
            />
            <Route
              path="/admin/skill"
              element={isAuthenticated ? <Skill /> : <Login />}
            />
          </Routes>

          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
