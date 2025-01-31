import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import FormComponent from "./PokemonCreateForm.jsx";
import PokemonDetail from "./PokemonDetail.jsx";
import PokemonEdit from "./PokemonEdit.jsx";
import NotFound from "./NotFound.jsx";

const router = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/pokemon/create',
                element: <FormComponent/>
            },
              {
                  path: '/pokemon/:id',
                  element: <PokemonDetail/>
              },
            {
                path: '/pokemon/edit/:id',
                element: <PokemonEdit/>
            },

        ]
    },
    { path: '*', element: <NotFound/> }
]);

function App() {
  return (
      <RouterProvider router={router}/>
  )
}

export default App
