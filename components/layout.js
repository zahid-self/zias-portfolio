import Header from "./Header";
import Footer from "./Footer";
import HeadContent from "./HeadContent";

export default function Layout({ children }) {
  return (
    <>
      <HeadContent />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
