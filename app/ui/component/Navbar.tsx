import { NavLink as RNavLink } from "@remix-run/react";
import { COLORS, NAV_LINK_VARIANT, NavLink } from "../system";
import { LogoIcon } from "../icons/Logo";

export const NavBar = () => {
  return (
    <nav
      className="w-screen z-50 sticky top-0 absolute py-3 px-4 lg:py-6 lg:px-10 gap-4 flex flex-row justify-end bg-transparent bg-custom-dot bg-[length:4px_4px] backdrop-blur opacity-1 items-center"
      style={{
        mask: "linear-gradient(rgb(0, 0, 0) 60%, rgba(0, 0, 0, 0) 100%)",
      }}
    >
      <RNavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-main-red" : "text-black"
        }
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
      <NavLink
        variant={NAV_LINK_VARIANT.BUTTON}
        color={COLORS.BLACK}
        href="/blog"
        target="_self"
      >
        Blog
      </NavLink>
    </nav>
  );
};
