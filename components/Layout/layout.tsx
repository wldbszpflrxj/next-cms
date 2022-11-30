import Footer from "components/Layout/footer";
import Header from "components/Layout/header";
import Meta from "../meta";

export default function Layout({ gnbMenu, children }) {
  return (
    <>
      <Meta />
      <Header gnbMenu={gnbMenu} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
