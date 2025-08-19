import Login from "../pages/Login";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";
import Home from "../pages/Home";


export let routerApp = [
    {
        path: "/",
        element: <Login />
    }, 
    {
        path: "/Servicios",
        element: <Servicios /> 
    },
    {
        path: "/Contacto",
        element: <Contacto /> 
    },
    {
        path: "/Home",
        element: <Home /> 
    },
    {
        path: "*",
        element: <h1>Error 404</h1>
    }
];
