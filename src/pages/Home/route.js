import {lazy} from "react";

export default {
        path: "/",
        exact: true,
        component: lazy(() => import("./Home"))
    };