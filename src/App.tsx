import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EstiloGlobal from './styles';
import { store } from './features/store';
import NovoContato from './pages/novoContato';
import Lista from './pages/lista';
import EditContact from './pages/editContato'; 
import { Layout } from './styles/layout';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Lista />,
  },
  {
    path: '/new',
    element: <NovoContato />,
  },
  {
    path: '/edit/:index',  
    element: <EditContact />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Layout>
      <EstiloGlobal />
      <RouterProvider router={rotas} />
      </Layout>
    </Provider>
  );
}

export default App;
