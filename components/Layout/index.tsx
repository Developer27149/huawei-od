import type { NextPage } from "next";
import dynamic from "next/dynamic";

const HeaderNavs = dynamic(() => import("../HeaderNavs"));
const Logo = dynamic(() => import("./Logo"));
const Footer = dynamic(() => import("./Footer"));
import sd from "styles/Layout.module.sass";

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <div className={sd.layout}>
        <div className={sd.header}>
          <Logo />
          <HeaderNavs />
        </div>
        <main className={sd.main}>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
