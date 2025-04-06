import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroContent from "@/components/heroContent/heroContent";
import ContactForm from "@/components/contactForm/contactForm";
import Portfolio from "@/components/portfolio/portfolio";
import TheorySection from "@/components/theory/theory";

export default function Home() {
  return (
    <div>
     
     <Header />
     <HeroContent />
     <Portfolio />
     <TheorySection />
     <ContactForm />
     <Footer /> 

    </div>
  );
}
