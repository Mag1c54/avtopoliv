import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";


export const metadata = {
  title: "Автополив РФ",
  description: "Автоматический полив купить в Москве",
  viewport: "width=device-width, initial-scale=1",
};


export default function CatalogLayout({ children }) {
  return (
    <>
      <Header />
    
      {children}
      <Footer />
    </>
  );
}
