import "./App.css";
import routes from "./routing/route.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { JobsProvider } from "./context/jobsContext.jsx";

function App() {
  const queryClient = new QueryClient();

  const router = createBrowserRouter(routes);
  return (
    <JobsProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster richColors position="top-right" closeButton />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </JobsProvider>
  );
}
export default App;
