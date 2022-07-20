import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import './index.css';

// @Routes
// Lazy loading doesn't seem to work.
// Need to refresh the page to see the changes after navigating.
import Home from './routes/Home';
import Journey from './routes/Journey';
import Projects from './routes/Projects';
import About from './routes/About';
import ErrorRoute from './routes/Error';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="journey" element={<Journey />} />
            <Route path="projects" element={<Projects />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<ErrorRoute />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
