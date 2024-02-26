import { Menu } from "../../Menu";
const menuItems = [{ label: "South America", to: "/cities/south-america" }];
export const Cities = () => {
  return <Menu header="Cities" menuItems={menuItems} />;
};
