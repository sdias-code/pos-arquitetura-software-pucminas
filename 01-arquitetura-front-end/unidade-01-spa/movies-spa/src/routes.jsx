import { createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { Movies } from "./views/Movies";
import { RootLayout } from "./views/RootLayout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/movies",
                element: <Movies />
            }
        ]
    }
])