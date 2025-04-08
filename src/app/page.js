import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HeroContent from "@/components/heroContent/heroContent";
import ContactForm from "@/components/contactForm/contactForm";
import Portfolio from "@/components/portfolio/portfolio";
import TheorySection from "@/components/theory/theory";
import NewsBlock from "@/components/news/news";
import AboutCompany from "@/components/about/about";

export default function Home() {
  return (
    <div>
     
     <Header />
     <HeroContent />
     <Portfolio />
     <TheorySection />
     <AboutCompany />
     <NewsBlock />
     <ContactForm />
     <Footer /> 

    </div>
  );
}
