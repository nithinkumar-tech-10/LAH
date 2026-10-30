"use client";

import dynamic from "next/dynamic";
import ErrorBoundary from "@/components/ErrorBoundary";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});
const CursorGlow = dynamic(() => import("@/components/CursorGlow"), {
  ssr: false,
});
const LoadingScreen = dynamic(() => import("@/components/LoadingScreen"), {
  ssr: false,
});

export default function ClientAnimations() {
  return (
    <>
      <ErrorBoundary>
        <SmoothScroll />
      </ErrorBoundary>
      <ErrorBoundary>
        <LoadingScreen />
      </ErrorBoundary>
      <ErrorBoundary>
        <CursorGlow />
      </ErrorBoundary>
    </>
  );
}

