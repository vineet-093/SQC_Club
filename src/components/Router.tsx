import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import MembersPage from '@/components/pages/MembersPage';
import ActivitiesPage from '@/components/pages/ActivitiesPage';
import AchievementsPage from '@/components/pages/AchievementsPage';
import ContactPage from '@/components/pages/ContactPage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "members",
        element: <MembersPage />,
        routeMetadata: {
          pageIdentifier: 'members',
        },
      },
      {
        path: "activities",
        element: <ActivitiesPage />,
        routeMetadata: {
          pageIdentifier: 'activities',
        },
      },
      {
        path: "achievements",
        element: <AchievementsPage />,
        routeMetadata: {
          pageIdentifier: 'achievements',
        },
      },
      {
        path: "contact",
        element: <ContactPage />,
        routeMetadata: {
          pageIdentifier: 'contact',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
