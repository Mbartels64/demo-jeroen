import Header from "@/components/Header/header";
import Hero from "@/components/Hero/hero";
import LogoCloud from "@/components/LogoCloud/logo-cloud";
import Feature from "@/components/Feature/feature";
import Testimonial from "@/components/Testimonial/testimonial";
import Faqs from "@/components/FAQs/faqs";
import Cta from "@/components/CTA/cta";
import Footer from "@/components/Footer/footer";

export default function HomePage() {
  return (
    <div className="bg-white">
      <main className="isolate">
        <Hero />
        <LogoCloud />
        <Feature />
        <Testimonial />
        <Faqs />
        <Cta />
      </main>
    </div>
  );
}
