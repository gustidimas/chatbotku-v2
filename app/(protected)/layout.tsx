"use client";

import { SignIn } from "@clerk/clerk-react";
import { useUser } from "@clerk/nextjs";
import React from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <SignIn />;
      </div>
    );
  }
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <main className="grow">{children}</main>
      </div>
    </>
  );
}
