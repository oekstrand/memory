import { createFileRoute } from "@tanstack/react-router";
import { SouthAmericaCitiesPage } from "../../features/cities/SouthAmericaCitiesPage";

export const Route = createFileRoute("/cities/south-america")({
  component: () => <SouthAmericaCitiesPage />,
});
