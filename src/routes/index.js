import { Navigate, createBrowserRouter } from "react-router-dom";
import Signup from "../app/form/signup";
import Login from "../app/form/login";
import DeafultLayout from "./deafultLayout";
import Dashboard from "../app/home/dashboard";
import Todo from "../app/home/todo_list";
import Caluculator from "../app/home/calculator";
import OrderStatus from "../app/home/orderStatus";
// import OrderComponent from "../app/home/orderStaus";

const router = createBrowserRouter([
    {
        path: '/',
        element: localStorage.getItem('loggedIn') === 'true' ? <Navigate to={'/home'} /> : <Signup />
    },
    {
        path: '/login',
        element: localStorage.getItem('loggedIn') === 'true' ? <Navigate to={'/home'} /> : <Login />
    },
    {
        path: '/',
        element: <DeafultLayout />,
        children: [
            {
                path: '/home',
                element: localStorage.getItem('loggedIn') === 'true' ? (
                    <Dashboard />
                ) : (
                    <Navigate to="/login" />
                )
            },
            {
                path: '/todo',
                element: <Todo />
            },
            {
                path: '/calculator',
                element: <Caluculator />
            },
            {
                path: '/order',
                element: <OrderStatus />
            }
        ]
    }
])
export default router;


