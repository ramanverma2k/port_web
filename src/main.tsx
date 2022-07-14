import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';

// @Routes
// Lazy loading doesn't seem to work.
// Need to refresh the page to see the changes after navigating.
import Home from './routes/home';
import Journey from './routes/journey';
import Projects from './routes/projects';
import About from './routes/about';
import ErrorRoute from './routes/error';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="journey" element={<Journey />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
