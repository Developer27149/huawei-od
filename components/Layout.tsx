import type { NextPage } from "next";
import HeaderNavs from "./HeaderNavs";
import CustomAside from "./CustomAside";

const Layout: NextPage = ({ children }) => {
  
  return (
    <div className="layout">
      <div className="header">
        <img className="logo" src="/favicon.svg" />
        <HeaderNavs />
      </div>
      <main>{children}</main>
      <CustomAside />
    </div>
  );
};

export default Layout;
