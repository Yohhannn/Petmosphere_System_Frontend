import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/landing.tsx"),
    route("login", "routes/login.tsx"), 
    route("signup", "routes/signup.tsx"),

    route("team", "routes/info_pages/team.tsx"),
    route("about", "routes/info_pages/about.tsx"),
    route("contact", "routes/info_pages/contact.tsx"),
] satisfies RouteConfig;

