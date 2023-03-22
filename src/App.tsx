import { RouteObject, useRoutes } from 'react-router-dom';
import './App.css';
import Delivery from './components/Delivery';
import OrderTracking from './components/OrderTracking';
import SearchBar from './components/SearchBar';

function App() {
  const routes = (): RouteObject[] => {
    return [
      {
        path: '/',
        element: <SearchBar />,
      },
      {
        path: 'order-tracking',
        element: <OrderTracking />,
      },
      {
        path: 'delivery',
        element: <Delivery />,
      },
    ];
  };
  const content = useRoutes(routes());
  return <div className="App">{content}</div>;
}

export default App;
