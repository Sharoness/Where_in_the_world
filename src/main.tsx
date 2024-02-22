import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CountryDetails from './CountryDetails.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout.tsx';

const countriesContext = createContext();
const [countries, setCountries] = useState([]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><App /></Layout>,
  },
  {
    path: "/details/:country",
    element: <Layout><CountryDetails /></Layout>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App></App>
    <countriesContext.Provider value={countries}>
        <RouterProvider router={router} />
    </countriesContext.Provider> 
  </React.StrictMode>,
)
function createContext() {
  throw new Error('Function not implemented.');
}

