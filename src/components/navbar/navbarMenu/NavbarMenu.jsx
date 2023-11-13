import { NavLink } from "react-router-dom";
import "./navbarMenu.css";

const NavbarMenu = ({ NavbarMenuList, handleClickSetNavLayout }) => {
  const navLinkStyle = ({ isActive }) => ({
    fontWeight: isActive ? "1000" : "580",
  });

  return (
    <>
      {NavbarMenuList.map((menu) => (
        <p>
          {menu.name === "FACEBOOK" ? (
            <a href={menu.link} className="fb neon-light-border">
              {menu.name}
            </a>
          ) : (
            <NavLink
              style={navLinkStyle}
              name={menu.name}
              to={menu.link}
              onClick={handleClickSetNavLayout}
            >
              {menu.name}
            </NavLink>
          )}
        </p>
      ))}
    </>
  );
};

export { NavbarMenu };
