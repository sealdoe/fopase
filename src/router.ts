import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const isGitHubPages =
    typeof window !== "undefined" &&
    window.location.hostname.endsWith("github.io");

  const router = createRouter({
    routeTree,
    basepath: isGitHubPages ? "/fopase" : "/",
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
