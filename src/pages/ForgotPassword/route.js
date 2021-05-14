import {lazy} from "react";

export default {
        path: "/forgotPassword",
        exact: true,
        component: lazy(() => import("./ForgotPassword"))
    };