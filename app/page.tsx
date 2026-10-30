import ErrorBoundary from "@/components/ErrorBoundary";
import ClientAnimations from "@/components/ClientAnimations";
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
import { getTrackGroups } from "@/lib/problemStatements";

export default function Home() {
  const tracks = getTrackGroups();

  return (
    <ErrorBoundary fallback={<div className="bg-[#030712] min-h-screen text-white" />}>
      <ClientAnimations />
      <Navbar />

      <main className="relative flex flex-col min-h-screen">
        {/* 2. Hero */}
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>

        {/* 3. About and Theme */}
        <About />

        {/* 4. For Participants */}
        <ForParticipants tracks={tracks} />

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

        {/* 11. Venue and Transport */}
        <Venue />

        {/* 12. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* 14. Floating Coordinator Call Button */}
      <FloatingCallButton />
    </ErrorBoundary>
  );
}
