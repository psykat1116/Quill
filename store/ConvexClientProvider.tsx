"use client";
import { ReactNode } from "react";
import {
  ConvexReactClient,
  AuthLoading,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth, SignIn } from "@clerk/nextjs";

import ScreenLoader from "@/components/ScreenLoader";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-700 to-indigo-900">
            <div className="absolute inset-0 bg-white opacity-10 mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-20 blur-3xl transform rotate-45" />
            <SignIn routing="hash" />
          </div>
        </Unauthenticated>
        <AuthLoading>
          <ScreenLoader label="Authenticating..." />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
