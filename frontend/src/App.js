import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import HeaderShimmer from "./components/ShimmerUi/HeaderShimmer";
import HomeShimmer from "./components/ShimmerUi/HomeShimmer";


const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  
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
                
              />
            </Suspense>
          }
        />
      </Routes>

      <Suspense fallback={<div>Footer is loading</div>}>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
