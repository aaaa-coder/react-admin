import React, { Children, lazy } from "react";
import { RouteObject } from "@/types/routerInterface";
 
const Login = lazy(() => import("../views/Login"))
const Layout = lazy(() => import("../components/Layout"))
const Home = lazy(()=>import("@/views/Home"))
const Test = lazy(()=>import("@/views/Test"))
const User1 = lazy(()=>import("@/views/User/User1"))
const User2 = lazy(()=>import("@/views/User/User2"))
const User3 = lazy(()=>import("@/views/User/User3"))
const Team1 = lazy(()=>import("@/views/Team/Team1"))
const Team2 = lazy(()=>import("@/views/Team/Team2"))

const loadComp = (comp:React.JSX.Element) => (
    <React.Suspense fallback={ <div>Lading...</div> }>
        {comp}
     </React.Suspense>
)

const routes:RouteObject[] = [
    {
        path: "/login",
        element: loadComp(<Login />)
    },
    {
        path: "/",
        element: loadComp(<Layout />),
        children: [
            {
                path: "/home",
                element:loadComp(<Home />)
            },
            {
                path: "/test",
                element:loadComp(<Test />)
            },
            {
                path: "/user1",
                element:loadComp(<User1 />)
            },
            {
                path: "/user2",
                element:loadComp(<User2 />)
            },
            {
                path: "/user3",
                element:loadComp(<User3 />)
            },
            {
                path: "/team1",
                element:loadComp(<Team1 />)
            },
            {
                path: "/team2",
                element:loadComp(<Team2 />)
            },
        ]
    }
];

export default routes