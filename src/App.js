import logo from './logo.svg';
import './App.css';
import Login from './components/loginpage/login'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {path: "/",element: <Login/>},
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
