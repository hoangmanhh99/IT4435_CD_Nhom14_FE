import {lazy} from "react";

export default {
        path: "/rank",
        exact: true,
        component: lazy(() => import("./Rank"))
    };