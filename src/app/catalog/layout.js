import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function CatalogLayout({ children }) {
  return (
    <>
      <Header />
    
      {children}
      <Footer />
    </>
  );
}
