import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import HeaderShimmer from "./components/ShimmerUi/HeaderShimmer";
import HomeShimmer from "./components/ShimmerUi/HomeShimmer";


const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => {
      const delay = el.getAttribute("data-reveal-delay");
      if (delay) {
        el.style.transitionDelay = `${delay}ms`;
      }
      el.classList.add("reveal-on-scroll");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
