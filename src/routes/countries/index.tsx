import { createFileRoute } from "@tanstack/react-router";
import { Countries } from "../../countries/Countries";

export const Route = createFileRoute("/countries/")({
  component: () => <Countries />,
});
