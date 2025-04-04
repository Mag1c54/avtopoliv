import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroContent from "@/components/heroContent/page";
import ContactForm from "@/components/contactForm/contactForm";
import Portfolio from "@/components/portfolio/portfolio";

export default function Home() {
  return (
    <div>
     
     <Header />
     <HeroContent />
     <Portfolio />
     <ContactForm />
     <Footer />

    </div>
  );
}
