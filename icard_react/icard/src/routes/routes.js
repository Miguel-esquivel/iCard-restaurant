import routerAdmin from './routes.admin';
import routerClient from './routes.client';
import { Error404 } from "../pages";
import { BasicLayout } from "../layouts";

const routes = [
    ...routerAdmin, 
    ...routerClient, 
    { 
        path: "*", 
        component: Error404,
        layout: BasicLayout,
    }];       

export default routes;