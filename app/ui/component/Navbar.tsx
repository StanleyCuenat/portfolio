import { NavLink as RNavLink } from "@remix-run/react";
import { COLORS, NAV_LINK_VARIANT, NavLink } from "../system";
import { LogoIcon } from "../icons/Logo";

export const NavBar = () => {
  return (
    <nav
      className="w-screen z-50 sticky top-0 absolute py-3 px-4 lg:px-10 gap-4 flex flex-row justify-end bg-white items-center"
      style={{}}
    >
      <RNavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-black" : "text-black")}
      >
        <LogoIcon className="w-8 h-8 duration-200" />
      </RNavLink>
      <NavLink
        variant={NAV_LINK_VARIANT.BUTTON}
        color={COLORS.BLACK}
        href="/portfolio"
        target="_self"
      >
        Portfolio
      </NavLink>
    </nav>
  );
};
