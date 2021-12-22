import type { NextPage } from "next";
import HeaderNavs from "../HeaderNavs";
import Logo from "./Logo";
import sd from 'styles/Layout.module.sass'

const Layout: NextPage = ({ children }) => {
  
  return (
    <div className={sd.layout}>
      <div className={sd.header}>
        <Logo />
        <HeaderNavs />
      </div>
      <main className={sd.main}>{children}</main>
    </div>
  );
};

export default Layout;
