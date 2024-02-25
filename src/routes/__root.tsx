import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="bg-slate-700 p-8 flex flex-col h-screen">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
