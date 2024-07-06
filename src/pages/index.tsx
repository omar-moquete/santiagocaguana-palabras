import IntroSection from "../components/IntroSection";
import BulletPointSection from "../components/BulletPointSection";
import ReviewsSection from "@/components/ReviewsSection";
import OutroSection from "@/components/OutroSection";
import CollapsablesSection from "@/components/CollapsablesSection";
import { playfairDisplay } from "@/app_config";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main
      className={`${playfairDisplay.className} text-xl md:text-2xl font-medium`}
    >
      <IntroSection />
      <BulletPointSection />
      <CollapsablesSection />
      <ReviewsSection />
      <OutroSection />
      <Footer />
    </main>
  );
}
