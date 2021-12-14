import type { NextPage } from "next";
import HeaderNavs from "./HeaderNavs";
import CustomAside from "./CustomAside";
import Logo from "./Logo";

const Layout: NextPage = ({ children }) => {
  
  return (
    <div className="layout">
      <div className="header">
        <Logo />
        <HeaderNavs />
      </div>
      <main className="main">{children}</main>
      <CustomAside />
    </div>
  );
};

export default Layout;
