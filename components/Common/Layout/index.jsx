import Head from "next/head";
import NavBar from "../NavBar";

function Layout({
  children,
  title = "",
  transparentNavBar = false,
  triedToEagerConnect,
}) {
  return (
    <>
      <Head>
        <title>{`${title} NuBloom 🌼 - Gen Fractal`}</title>
      </Head>
      <NavBar
        transparentNavBar={transparentNavBar}
        triedToEagerConnect={triedToEagerConnect}
      />
      {children}
    </>
  );
}

export default Layout;
