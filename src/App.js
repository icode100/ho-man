import logo from './logo.svg';
import './App.css';
import Login from './components/loginpage/login'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Nonlocal from './components/nonlocal/nonlocal';

const router = createBrowserRouter([
  {path: "/",element: <Login/>},
  {path:"/nonlocal",element:<Nonlocal name="Alex" roll="123456" branch="cse" sem="4" block="ABC" room="s01"/>}
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
