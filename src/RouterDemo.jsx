import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Home'));     // lazy loaded
const About = lazy(() => import('./About'));   // lazy loaded

function RouterDemo() {
  return (
    <BrowserRouter>
      <h2>React Router + Lazy Loading</h2>

      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default RouterDemo;


// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Home from './Home';
// import About from './About';

// function RouterDemo() {
//   return (
//     <BrowserRouter>
//       <h2>React Router Demo</h2>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default RouterDemo;
