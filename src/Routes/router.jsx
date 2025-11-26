import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import NotFound from "../pages/404/NotFound";
import AboutUs from "../pages/AboutUs/AboutUs";

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
                path: '*',
                Component: NotFound,

            }
        ]
    },
]);