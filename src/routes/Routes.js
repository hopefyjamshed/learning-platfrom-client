import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/blog/Blog";
import Courses from "../pages/courses/Courses";
import FAQ from "../pages/faq/Faq";
import Leftpage from "../pages/left/Leftpage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Courses></Courses>
            },
            {
                path: '/left/:id',
                element: <Leftpage></Leftpage>,
                loader: ({ params }) => fetch(`https://learning-platform-server-xi.vercel.app/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])