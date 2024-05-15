
import './App.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';
import Home from './components/Home/Home';
import CreatePresident from './components/CreatePresident/CreatePresident';
import CreateCountry from './components/CreateCountry/CreateCountry';

function App() {
  const pages = createBrowserRouter([
    {
      path:"/",
      element:<Home/>,
    },
    {
      path:"/create/president",
      element:<CreatePresident/>,
    },
    {
      path:"/create/country",
      element:<CreateCountry/>,
    },

  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
