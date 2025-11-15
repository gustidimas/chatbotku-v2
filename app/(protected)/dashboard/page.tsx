import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
