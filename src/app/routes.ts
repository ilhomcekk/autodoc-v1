import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { HomePage } from "./components/pages/HomePage";
import { AboutPage } from "./components/pages/AboutPage";
import { ProjectsPage } from "./components/pages/ProjectsPage";
import { CareerPage } from "./components/pages/CareerPage";
import { NewsPage } from "./components/pages/NewsPage";
import { NewsArticlePage } from "./components/pages/NewsArticlePage";
import { PartnersPage } from "./components/pages/PartnersPage";
import { ContactPage } from "./components/pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "projects", Component: ProjectsPage },
      { path: "career", Component: CareerPage },
      { path: "news", Component: NewsPage },
      { path: "news/:id", Component: NewsArticlePage },
      { path: "partners", Component: PartnersPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
