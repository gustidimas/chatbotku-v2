import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <header className="w-full max-w-5xl mx-auto px-4 md:px-8 py-2 md:py-4 text-xs border-b border-secondary">
        <nav className="flex flex-row justify-between items-center">
          <ul className="flex items-center gap-4">
            <Link href={"/"}>Logo</Link>
          </ul>
          <ul className="flex items-center gap-4">
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
            <Button
              size={"sm"}
              onClick={() => router.push("/signin")}
              variant={"outline"}
            >
              Sign In
            </Button>
            <Button size={"sm"} onClick={() => router.push("/signup")}>
              Sign Up
            </Button>
          </ul>
        </nav>
      </header>
    </>
  );
}
