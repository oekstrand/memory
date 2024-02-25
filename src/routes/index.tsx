import { createFileRoute } from "@tanstack/react-router";
import { Menu } from "../Menu";

const menuItems = [
  { label: "Countries", to: "/countries" },
  { label: "Cities", to: "/cities" },
  { label: "History", to: "/history" },
  { label: "Major system", to: "/major-system" },
];

export const Route = createFileRoute("/")({
  component: () => <Menu header="Welcome to the memory app" menuItems={menuItems} />,
});
