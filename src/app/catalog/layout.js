import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export const metadata = {
  title: "Автополив РФ",
  description: "Автоматический полив купить в Москве",

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
