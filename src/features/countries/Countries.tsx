import { Menu } from "../../Menu";
const menuItems = [{ label: "South America", to: "/countries/south-america" }];
export const Countries = () => {
  return <Menu header="Countries" menuItems={menuItems} />;
};
