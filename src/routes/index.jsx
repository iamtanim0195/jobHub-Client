import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../page/About";

const routes = createBrowserRouter([
    {
        path:'/',
        element: <App />,
        children: [
            {
                path: 'about',
                element: <About />,
            }
        ]
    }
]);

export default routes;
