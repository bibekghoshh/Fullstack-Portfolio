import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./actions/user";

import HeaderShimmer from "./components/ShimmerUi/HeaderShimmer";
import HomeShimmer from "./components/ShimmerUi/HomeShimmer";


const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const Login = lazy(() => import("./components/Admin/Login"));
const AdminPanel = lazy(() => import("./components/Admin/AdminPanel"));
const Timeline = lazy(() => import("./components/Admin/Timeline"));
const Project = lazy(() => import("./components/Admin/Project"));
const Skill = lazy(() => import("./components/Admin/Skill"));
const Youtube = lazy(() => import("./components/Admin/Youtube"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Suspense fallback={<HeaderShimmer />}>
        <Header />
      </Suspense>

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<HomeShimmer/>}>
              <Home
                youtubes={user && user.youtube ? user.youtube : []}
                timelines={user && user.timeline ? user.timeline : []}
                skills={user && user.skills ? user.skills : []}
                projects={user && user.projects ? user.projects : []}
                about={user && user.about ? user.about : ""}
              />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Suspense fallback={<div>Loading...adminpanel</div>}>
                <AdminPanel />
              </Suspense>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/admin/timeline"
          element={
            isAuthenticated ? (
              <Suspense fallback={<div>Loading...Timeline</div>}>
                <Timeline />
              </Suspense>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/admin/youtube"
          element={
            isAuthenticated ? (
              <Suspense fallback={<div>Loading...youtube</div>}>
                {" "}
                <Youtube />
              </Suspense>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/admin/project"
          element={
            isAuthenticated ? (
              <Suspense fallback={<div>Loading...Project</div>}>
                <Project />
              </Suspense>
            ) : (
              <Login />
            )
          }
        />
        <Route
          path="/admin/skill"
          element={
            isAuthenticated ? (
              <Suspense fallback={<div>Loading...Skill</div>}>
                <Skill />
              </Suspense>
            ) : (
              <Login />
            )
          }
        />
      </Routes>

      <Suspense fallback={<div></div>}>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
