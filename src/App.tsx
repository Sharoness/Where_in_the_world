import "./App.css";
import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CountryDetails from "./CountryDetails";
import Layout from "./Layout";
import Home from "./Home";
import { ICountry } from "./interface";


function App() {
    const [countries, setCountries] = useState<ICountry[]>([]);
    
    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <Layout>
            <Home defaultCountries={countries} />
          </Layout>
        ),
      },
      {
        path: "/details/:country",
        element: (
          <Layout>
            <CountryDetails defaultCountries={countries} />
          </Layout>
        ),
      },
    ]);
    
    useEffect(() => {
        fetchCountries();
    }, []);

    async function fetchCountries() {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries: ICountry[] = await response.json();
        setCountries(countries);
    }

  return <RouterProvider router={router} />;
}
export default App;
