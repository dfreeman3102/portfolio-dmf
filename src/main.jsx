import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

// Import the pages
import App from './App';
import ErrorPage from './ErrorPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import ResumePage from './ResumePage';
import PortfolioPage from './PortfolioPage';

//define the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'resume',
        element: <ResumePage />
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />
      }
    ]
  }
]);

// Render the components
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);