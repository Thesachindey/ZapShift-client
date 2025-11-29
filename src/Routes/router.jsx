import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import NotFound from "../pages/404/NotFound";
import AboutUs from "../pages/AboutUs/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BeARider from "../pages/Rider/BeARider";
import SendParcel from "../pages/SendParcel/SendParcel";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/coverage',
                Component: Coverage,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            },
            {
                path: '/about_us',
                Component: AboutUs,
            },
            {
                path: '/rider',
                element:
                    <PrivateRoute>
                        <BeARider />
                    </PrivateRoute>,
            },
            {
                path: '/send_parcel',
                element:
                    <PrivateRoute>
                        <SendParcel />
                    </PrivateRoute>,
                loader: () => fetch('/serviceCenters.json').then(res => res.json())
            },
            {
                path: '*',
                Component: NotFound,

            }
        ]
    },
    {
        path: '/',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                Component: Login,
            },
            {
                path: 'register',
                Component: Register,
            }
        ]
    }
]);