import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ForParticipants from "@/components/ForParticipants";
import OrganizingCommittee from "@/components/OrganizingCommittee";
import Coordinators from "@/components/Coordinators";
import Rounds from "@/components/Rounds";
import Timeline from "@/components/Timeline";
import Rules from "@/components/Rules";
import AccommodationNotice from "@/components/AccommodationNotice";
import Venue from "@/components/Venue";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function Home() {
  return (
    <SmoothScroll>
      <LoadingScreen />
      <CursorGlow />
      <Navbar />

      <main className="relative flex flex-col min-h-screen">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About and Theme */}
        <About />

        {/* 4. For Participants */}
        <ForParticipants />

        {/* 5. Organizing Committee */}
        <OrganizingCommittee />

        {/* 6. Coordinators */}
        <Coordinators />

        {/* 7. Hackathon Rounds */}
        <Rounds />

        {/* 8. Event Timeline */}
        <Timeline />

        {/* 9. Rules and Regulations */}
        <Rules />

        {/* 10. Important Accommodation Notice */}
        <AccommodationNotice />

        {/* 11. Venue and Location */}
        <Venue />

        {/* 12. Final CTA */}
        <FinalCTA />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Floating Call Button on Mobile */}
      <FloatingCallButton />
    </SmoothScroll>
  );
}
