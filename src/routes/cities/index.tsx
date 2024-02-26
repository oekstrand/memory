import { createFileRoute } from "@tanstack/react-router";
import { Cities } from "../../features/cities/Cities";

export const Route = createFileRoute("/cities/")({
  component: () => <Cities />,
});
