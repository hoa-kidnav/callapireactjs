import { useLocation, Link } from "react-router-dom";
const menus = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Quản lý sản phẩm",
    to: "/product-list",
    exact: false,
  },
];

const MenuLink = ({ label, to }) => {
  let location = useLocation();
  let isActive = location.pathname === to;

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to}>{label}</Link>
    </li>
  );
};
function showMenus(menus) {
  let result = null;
  result = menus.map((menu, index) => {
    return <MenuLink key={index} label={menu.name} to={menu.to} />;
  });
  return result;
}
function Menu() {
  return (
    <>
      <div className="navbar-default">
        <Link to="/" className="navbar-brand">
          CALLAPI
        </Link>
        <ul className="nav navbar-nav">{showMenus(menus)}</ul>
      </div>
    </>
  );
}

export default Menu;
