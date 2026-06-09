import { ClientLayout } from "../layouts";
import { Home } from "../pages/Client";
//import { Error404 } from "../pages";

const routesClient = [
    {  
        path: "/",
        layout: ClientLayout,
        component: Home,
        exact: true,
    },
 
];

export default routesClient;