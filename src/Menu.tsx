import { Link } from "@tanstack/react-router";

interface MenuItem {
  label: string;
  to: string;
}

interface MenuProps {
  header: string;
  menuItems: MenuItem[];
}

export const Menu = ({ header, menuItems }: MenuProps) => {
  const MenuElement = ({ label, to }: MenuItem) => {
    return (
      <Link to={to} className="bg-gray-300 w-96 rounded-lg shadow-lg p-8 text-2xl text-slate-700">
        {label}
      </Link>
    );
  };

  // const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  //   return (
  //     <div className="bg-slate-700 p-8 flex flex-col h-full">
  //       <a href="#" onClick={() => setCurrentPage("Menu")} className="text-white">
  //         &lt;- Back to menu
  //       </a>
  //       {children}
  //     </div>
  //   );
  // };

  return (
    <main className="bg-slate-700 h-screen text-center flex flex-col space-y-10">
      <h1 className="text-gray-200 text-4xl m-8">{header}</h1>
      <nav className="flex flex-col items-center space-y-4">
        {menuItems.map((item) => (
          <MenuElement key={item.to} label={item.label} to={item.to} />
        ))}
      </nav>
    </main>
  );
};
