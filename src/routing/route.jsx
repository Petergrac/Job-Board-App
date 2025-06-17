import { lazy, Suspense } from "react";

import LoadingSpinner from "../components/LoadingSpinner.jsx";
const Myjobs = lazy(()=>import('../pages/Applypage.jsx'))
const Contacts = lazy(() => import("../pages/Contactspage.jsx"));
const About = lazy(() => import("../pages/Aboutpage.jsx"));
const Categories = lazy(() => import("../pages/CategoriesPage.jsx"));
const Homepage = lazy(() => import("../pages/Homepage.jsx"));
const JobsPage = lazy(() => import("../pages/Jobspage.jsx"));
const Location = lazy(() => import("../pages/LocationPage.jsx"));
const Main = lazy(() => import("../layout/Main.jsx"));
const PageNotFound = lazy(() => import("../pages/PageNotFound.jsx"));

const Loading = LoadingSpinner;

const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<Loading />}>
        <PageNotFound />
      </Suspense>
    ),
    children: [
      {
        path: "pages/homepage",
        element: (
          <Suspense
            fallback={
              <Loading />
            }
          >
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "pages/jobs",
        element: (
          <Suspense fallback={<Loading />}>
            <JobsPage />
          </Suspense>
        ),
      },
      {
        path: "pages/categories",
        element: (
          <Suspense fallback={<Loading />}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "pages/locations",
        element: (
          <Suspense fallback={<Loading />}>
            <Location />
          </Suspense>
        ),
      },
      {
        path: "pages/about",
        element: (
          <Suspense fallback={<Loading />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "pages/contacts",
        element: (
          <Suspense fallback={<Loading />}>
            <Contacts />
          </Suspense>
        ),
      },
      {
        path: "pages/apply/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Myjobs />
          </Suspense>
        ),
      },

      {
        path: "*",
        element: (
          <Suspense fallback={<Loading />}>
            <PageNotFound />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;
