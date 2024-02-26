import { createFileRoute } from "@tanstack/react-router";
import { Countries } from "../../features/countries/Countries";

export const Route = createFileRoute("/countries/")({
  component: () => <Countries />,
});
